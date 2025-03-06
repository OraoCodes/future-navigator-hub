import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';

const PaymentSuccess = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Payment Successful!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for your payment. Your coaching session has been scheduled.
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/dashboard"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-archeoblue hover:bg-archeoblue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-archeoblue"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentSuccess; 