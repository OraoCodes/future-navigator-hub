import React, { useState } from 'react';
import { createPaymentIntent } from '@/api/payment';
import StripePaymentWrapper from '@/components/payment/StripePaymentWrapper';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PaymentTest = () => {
  const [amount, setAmount] = useState<number>(99.99);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleStartPayment = async () => {
    try {
      setError(null);
      const response = await createPaymentIntent(amount);
      setClientSecret(response.clientSecret);
    } catch (err) {
      setError('Failed to initialize payment. Please try again.');
      console.error('Payment initialization error:', err);
    }
  };

  const handlePaymentSuccess = () => {
    navigate('/payment-success');
  };

  const handlePaymentError = (error: Error) => {
    setError(error.message);
    navigate('/payment-error');
  };

  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <h1 className="text-3xl font-bold text-archeoblue mb-8">
          Test Payment Integration
        </h1>

        {!clientSecret ? (
          <div className="space-y-6 max-w-md">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                Payment Amount (USD)
              </label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min="0.01"
                step="0.01"
                className="max-w-[200px]"
              />
            </div>

            <Button
              onClick={handleStartPayment}
              className="bg-archeoblue hover:bg-archeoblue/90"
            >
              Start Payment
            </Button>
          </div>
        ) : (
          <StripePaymentWrapper
            clientSecret={clientSecret}
            amount={amount}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
          />
        )}

        {error && (
          <div className="mt-4 text-red-600 text-sm">
            {error}
          </div>
        )}

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Test Card Numbers</h2>
          <ul className="space-y-2 text-sm">
            <li>✅ Success: 4242 4242 4242 4242</li>
            <li>❌ Failure: 4000 0000 0000 0002</li>
            <li>📅 Expiry: Any future date</li>
            <li>🔒 CVC: Any 3 digits</li>
            <li>📍 ZIP: Any 5 digits</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentTest; 