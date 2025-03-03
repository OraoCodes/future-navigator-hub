
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last Updated: May 15, 2023
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy describes how CareerMentor ("we," "us," or "our") collects, uses, and discloses your personal information when you use our website and services. Please read this policy carefully to understand our practices regarding your personal data.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and professional information.</li>
              <li><strong>Payment Information:</strong> Credit card details and billing information (processed securely through our payment processors).</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, services, and communications.</li>
              <li><strong>Communications:</strong> Content of messages sent to us through email, chat, or our contact forms.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide and improve our services</li>
              <li>To process payments and manage your account</li>
              <li>To communicate with you about our services</li>
              <li>To personalize your experience</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>4. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers who help us deliver our services</li>
              <li>Payment processors to complete transactions</li>
              <li>Legal authorities when required by law</li>
              <li>Professional advisors such as lawyers and accountants</li>
            </ul>

            <h2>5. Your Rights</h2>
            <p>Depending on your location, you may have rights regarding your personal data, including:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your information</li>
              <li>Objection to certain processing activities</li>
              <li>Data portability</li>
            </ul>

            <h2>6. Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              privacy@careermentor.example.com
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
