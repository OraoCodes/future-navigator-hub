import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';

const PaymentError = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="flex justify-center">
            <XCircle className="h-16 w-16 text-red-500" />
          </div>
          <div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Payment Failed
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We couldn't process your payment. Please try again or contact support if the problem persists.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <Link
              to="/services"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-archeoblue hover:bg-archeoblue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-archeoblue"
            >
              Try Again
            </Link>
            <div>
              <Link
                to="/contact"
                className="text-sm text-archeoblue hover:text-archeoblue/90"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentError; 