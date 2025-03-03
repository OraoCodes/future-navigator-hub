
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <MainLayout>
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-navy tracking-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last Updated: May 15, 2023
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using CareerMentor's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              CareerMentor provides career coaching services, including but not limited to CV reviews, career coaching sessions, and mock interviews. Our services are designed to help tech professionals advance their careers through professional guidance.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features of our platform, you may need to register for an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>

            <h2>4. Payment Terms</h2>
            <p>
              Our services are provided on a fee-for-service basis. All payments are processed securely through our payment processors. Prices for our services are subject to change without notice. All charges are non-refundable except as expressly provided in our Cancellation Policy.
            </p>

            <h2>5. Cancellation Policy</h2>
            <p>
              You may cancel or reschedule a booking up to 24 hours before the scheduled session without penalty. Cancellations made less than 24 hours before the scheduled session may result in a cancellation fee of up to 100% of the service price.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by CareerMentor and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall CareerMentor be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the "Last Updated" date at the top of this page. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              legal@archeohub.com
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;
