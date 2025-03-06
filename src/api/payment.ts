import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export interface CreatePaymentIntentResponse {
  clientSecret: string;
}

export const createPaymentIntent = async (amount: number): Promise<CreatePaymentIntentResponse> => {
  try {
    const response = await axios.post(`${API_URL}/create-payment-intent`, {
      amount,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

export const confirmPayment = async (paymentIntentId: string): Promise<void> => {
  try {
    await axios.post(`${API_URL}/confirm-payment`, {
      paymentIntentId,
    });
  } catch (error) {
    console.error('Error confirming payment:', error);
    throw error;
  }
}; 