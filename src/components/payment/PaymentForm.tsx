import React, { useState, useEffect } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import type { StripeError } from '@stripe/stripe-js';
import type { Stripe } from 'stripe';

interface PaymentFormProps {
  clientSecret: string;
  amount: number;
  onSuccess?: () => void;
  onError?: (error: StripeError | Error) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  clientSecret,
  amount,
  onSuccess,
  onError,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Check PaymentIntent status on mount
  useEffect(() => {
    if (!stripe || !clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent, error }) => {
      if (error) {
        setMessage(error.message ?? "Something went wrong");
        return;
      }

      if (paymentIntent) {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment successful!");
            onSuccess?.();
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            // Don't show any message for initial state
            setMessage(null);
            break;
          default:
            if (paymentIntent.last_payment_error) {
              setMessage(paymentIntent.last_payment_error.message ?? "Payment failed. Please try again.");
            }
            break;
        }
      }
    });
  }, [stripe, clientSecret, onSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setMessage(null);

    try {
      // Validate the form first
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setMessage(submitError.message ?? "Please check your payment details.");
        setIsProcessing(false);
        return;
      }

      // Confirm the payment
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              address: {
                country: 'KE',
              },
            },
          },
          return_url: window.location.origin + '/booking/confirmation',
        },
      }) as { error?: StripeError; paymentIntent?: Stripe.PaymentIntent };

      console.log('Payment confirmation result:', result);

      if (result.error) {
        // Handle specific error types
        if (result.error.type === 'card_error' || result.error.type === 'validation_error') {
          setMessage(result.error.message ?? "Please check your card details.");
        } else {
          setMessage("An unexpected error occurred.");
        }
        onError?.(result.error);
        setIsProcessing(false);
      } else if (result.paymentIntent) {
        // Handle different PaymentIntent statuses
        switch (result.paymentIntent.status) {
          case 'succeeded':
            setMessage("Payment successful!");
            setIsProcessing(false);
            console.log('Payment succeeded, calling onSuccess');
            await onSuccess?.();
            break;
          case 'processing':
            setMessage("Your payment is processing. We'll update you when payment is received.");
            setIsProcessing(false);
            break;
          case 'requires_payment_method':
            setMessage("Your payment was not successful, please try again.");
            setIsProcessing(false);
            break;
          case 'requires_confirmation':
            // Try to confirm the payment again
            const confirmResult = await stripe.confirmPayment({
              elements,
              confirmParams: {
                return_url: window.location.origin + '/booking/confirmation',
              },
            }) as { error?: StripeError; paymentIntent?: Stripe.PaymentIntent };
            if (confirmResult.error) {
              setMessage(confirmResult.error.message ?? "Payment confirmation failed. Please try again.");
              onError?.(confirmResult.error);
            }
            setIsProcessing(false);
            break;
          default:
            setMessage("Something went wrong.");
            setIsProcessing(false);
            break;
        }
      }
    } catch (error) {
      console.error('Payment error:', error);
      setMessage("An unexpected error occurred.");
      onError?.(error as Error);
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Complete Your Payment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-2xl font-bold text-navy">
              {amount.toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}
            </p>
            <p className="text-gray-600">One-time payment for coaching session</p>
          </div>

          <PaymentElement 
            options={{
              layout: 'tabs',
              defaultValues: {
                billingDetails: {
                  address: {
                    country: 'KE',
                  },
                },
              },
              fields: {
                billingDetails: 'never',
              },
            }}
            className="mb-6"
          />

          {message && (
            <div 
              className={`p-4 rounded-md ${
                message.toLowerCase().includes("successful") 
                  ? "bg-green-50 text-green-700 border border-green-200" 
                  : message.toLowerCase().includes("processing")
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}

          <Button
            type="submit"
            disabled={!stripe || isProcessing}
            variant="default"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-300"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing Payment...
              </div>
            ) : (
              'Pay Now'
            )}
          </Button>

          {isProcessing && (
            <p className="text-sm text-center text-gray-500 mt-2">
              Please don't close this window while your payment is processing.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentForm; 