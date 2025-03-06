import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

// Middleware
app.use(cors());

// Use JSON parsing for all routes except webhook
app.use((req, res, next) => {
  if (req.originalUrl === '/api/webhook') {
    next();
  } else {
    express.json()(req, res, next);
  }
});

// Create a payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'kes', // Use KES for Kenyan Shillings
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        integration_check: 'accept_a_payment',
      },
      // Enable test mode specific settings
      ...(process.env.NODE_ENV !== 'production' && {
        confirm: false,
        setup_future_usage: undefined,
      }),
    });

    console.log('Created PaymentIntent:', {
      id: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      status: paymentIntent.status,
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ 
      error: 'Error creating payment intent',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Confirm a payment
app.post('/api/confirm-payment', async (req, res) => {
  try {
    const { paymentIntentId } = req.body;

    console.log('Confirming payment for PaymentIntent:', paymentIntentId);

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    console.log('Payment status:', {
      id: paymentIntent.id,
      status: paymentIntent.status,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    });

    if (paymentIntent.status === 'succeeded') {
      // Payment was successful
      res.json({ 
        status: 'success',
        paymentIntent: {
          id: paymentIntent.id,
          amount: paymentIntent.amount,
          status: paymentIntent.status,
          currency: paymentIntent.currency,
        }
      });
    } else if (paymentIntent.status === 'requires_payment_method') {
      res.json({ 
        status: 'requires_payment_method',
        message: 'Payment requires confirmation'
      });
    } else if (paymentIntent.status === 'requires_action') {
      res.json({ 
        status: 'requires_action',
        message: 'Payment requires additional authentication',
        next_action: paymentIntent.next_action
      });
    } else if (paymentIntent.status === 'processing') {
      res.json({ 
        status: 'processing',
        message: 'Payment is being processed'
      });
    } else {
      res.status(400).json({ 
        status: 'failed',
        message: `Payment status: ${paymentIntent.status}`,
        last_error: paymentIntent.last_payment_error
      });
    }
  } catch (error) {
    console.error('Error confirming payment:', error);
    res.status(500).json({ 
      error: 'Error confirming payment',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Webhook endpoint for Stripe events
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    console.log('Received webhook event:', {
      type: event.type,
      id: event.id,
    });

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Payment succeeded:', {
          id: paymentIntent.id,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
          status: paymentIntent.status,
        });
        break;
        
      case 'payment_intent.processing':
        const processingPayment = event.data.object as Stripe.PaymentIntent;
        console.log('Payment processing:', {
          id: processingPayment.id,
          amount: processingPayment.amount,
          currency: processingPayment.currency,
        });
        break;
        
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent;
        console.log('Payment failed:', {
          id: failedPayment.id,
          error: failedPayment.last_payment_error,
        });
        break;
        
      case 'payment_intent.requires_action':
        const actionRequired = event.data.object as Stripe.PaymentIntent;
        console.log('Payment requires action:', {
          id: actionRequired.id,
          next_action: actionRequired.next_action,
        });
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).json({ 
      error: 'Webhook error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Test mode: ${process.env.NODE_ENV !== 'production' ? 'enabled' : 'disabled'}`);
}); 