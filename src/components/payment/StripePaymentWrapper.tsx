import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import type { StripeElementsOptions } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface StripePaymentWrapperProps {
  clientSecret: string;
  amount: number;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const StripePaymentWrapper: React.FC<StripePaymentWrapperProps> = ({
  clientSecret,
  amount,
  onSuccess,
  onError,
}) => {
  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#1e40af', // archeoblue
        colorBackground: '#ffffff',
        colorText: '#1f2937',
        colorDanger: '#ef4444',
        fontFamily: 'system-ui, sans-serif',
        spacingUnit: '4px',
        borderRadius: '4px',
      },
    },
    loader: 'auto',
  };

  const handleSuccess = () => {
    console.log('Payment successful, triggering onSuccess callback');
    onSuccess?.();
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm
        clientSecret={clientSecret}
        amount={amount}
        onSuccess={handleSuccess}
        onError={onError}
      />
    </Elements>
  );
};

export default StripePaymentWrapper; 