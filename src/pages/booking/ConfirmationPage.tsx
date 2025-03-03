
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ConfirmationPage = () => {
  return (
    <MainLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-emerald-500 flex justify-center"
          >
            <CheckCircle2 size={80} />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold text-navy mb-4">Booking Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for booking a session with CareerMentor. We've sent a confirmation email with all the details.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-sm border mb-8"
          >
            <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full p-1 bg-emerald-100 text-emerald-600 flex-shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <span>
                  <span className="font-medium">Check your email</span> for the booking confirmation and any preparation materials.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full p-1 bg-emerald-100 text-emerald-600 flex-shrink-0">
                  <Calendar size={16} />
                </div>
                <span>
                  <span className="font-medium">Add to your calendar</span> - we've included a calendar invite in the confirmation email.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full p-1 bg-emerald-100 text-emerald-600 flex-shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <span>
                  <span className="font-medium">Prepare for your session</span> by reviewing any requested materials and preparing questions.
                </span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <Button variant="outline" className="w-full sm:w-auto">
                Return to Home
              </Button>
            </Link>
            <Link to="/services">
              <Button className="w-full sm:w-auto bg-navy text-white">
                Book Another Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ConfirmationPage;
