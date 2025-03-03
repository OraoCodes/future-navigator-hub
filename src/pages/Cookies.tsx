
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

const Cookies = () => {
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
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last Updated: May 15, 2023
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.</li>
              <li><strong>Analytical/Performance Cookies:</strong> These cookies allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
              <li><strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.</li>
              <li><strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed.</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>
            <p>We use the following types of cookies:</p>
            <ul>
              <li><strong>Session Cookies:</strong> These cookies are temporary and are deleted when you close your browser.</li>
              <li><strong>Persistent Cookies:</strong> These cookies remain on your device for a specified period or until you delete them.</li>
              <li><strong>First-Party Cookies:</strong> These cookies are set by our website.</li>
              <li><strong>Third-Party Cookies:</strong> These cookies are set by third parties, such as analytics providers and advertising networks.</li>
            </ul>

            <h2>4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. However, if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly.
            </p>

            <h2>5. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
              privacy@careermentor.example.com
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cookies;
