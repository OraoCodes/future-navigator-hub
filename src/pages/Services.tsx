
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import ServiceGrid from "@/components/services/ServiceGrid";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";

const Services = () => {
  const benefits = [
    "Expert guidance from industry professionals",
    "Personalized feedback and actionable advice",
    "Flexible scheduling to fit your availability",
    "Secure online booking and payment",
    "Satisfaction guarantee or your money back",
    "Ongoing support after your session"
  ];

  return (
    <MainLayout>
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <img 
                src="/lovable-uploads/0110b91f-955b-45dd-bd4f-cb721f2cd6aa.png" 
                alt="Archeohub Logo" 
                className="h-32 mx-auto" 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="gold-accent mb-4 inline-block">Our Services</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-archeoblue tracking-tight mb-6"
            >
              Premium Career Coaching Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Select the service that best fits your career goals and schedule a session with our expert coaches.
            </motion.p>
          </div>
          
          {/* Service Cards */}
          <div className="mb-20">
            <ServiceGrid />
          </div>
          
          {/* Benefits Section */}
          <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-archeoblue mb-6">
                  Why Choose Archeohub?
                </h2>
                <p className="text-gray-600 mb-8">
                  We provide specialized coaching for tech professionals at all career stages. Our experienced coaches have helped hundreds of clients land their dream jobs, negotiate higher salaries, and advance their careers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <div className="mt-1 rounded-full p-1 bg-archeogreen/20 text-archeogreen">
                        <CheckIcon size={14} />
                      </div>
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-archeoblue/5">
                  <h3 className="text-xl font-semibold text-archeoblue mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-archeoblue">How do I prepare for my session?</h4>
                      <p className="text-gray-600 mt-1 text-sm">
                        After booking, you'll receive an email with preparation instructions and any materials to share with your coach beforehand.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-archeoblue">What happens if I need to reschedule?</h4>
                      <p className="text-gray-600 mt-1 text-sm">
                        You can reschedule for free up to 24 hours before your session. Late cancellations may incur a fee.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-archeoblue">How are sessions conducted?</h4>
                      <p className="text-gray-600 mt-1 text-sm">
                        All sessions are held via Zoom. You'll receive a link after booking and reminders before your session.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-archeoblue">Do you offer package discounts?</h4>
                      <p className="text-gray-600 mt-1 text-sm">
                        Yes, we offer discounted rates when you book multiple sessions. Contact us for details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Services;
