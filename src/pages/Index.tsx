
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Users, Mic } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="gold-accent mb-4 inline-block">Premium Tech Career Coaching</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-navy tracking-tight mb-6"
            >
              Elevate Your Tech Career <br className="hidden md:block" /> to New Heights
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Expert guidance for tech professionals seeking to advance their careers through personalized coaching, CV reviews, and interview preparation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/services">
                <Button className="primary-button animate-float">
                  Book a Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button className="secondary-button">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored solutions to help you achieve your career goals in the tech industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CV Review */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">CV Review</h3>
              <p className="text-gray-600 mb-4">Expert feedback on your CV to highlight your strengths and stand out to recruiters.</p>
              <p className="font-semibold text-navy mb-6">Starting at $99</p>
              <Link to="/services" className="text-navy font-medium flex items-center hover:text-navy/80 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            {/* Career Coaching */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Career Coaching</h3>
              <p className="text-gray-600 mb-4">Strategic guidance to help you navigate your career path and achieve your goals.</p>
              <p className="font-semibold text-navy mb-6">Starting at $149</p>
              <Link to="/services" className="text-navy font-medium flex items-center hover:text-navy/80 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            {/* Mock Interviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
                <Mic size={24} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Mock Interviews</h3>
              <p className="text-gray-600 mb-4">Practice with realistic technical interviews and receive detailed feedback.</p>
              <p className="font-semibold text-navy mb-6">Starting at $129</p>
              <Link to="/services" className="text-navy font-medium flex items-center hover:text-navy/80 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4 bg-navy text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Ready to accelerate your tech career?</h2>
              <p className="text-white/80 text-lg">
                Join hundreds of tech professionals who have advanced their careers with our expert coaching.
              </p>
            </div>
            <Link to="/services">
              <Button className="bg-gold text-navy hover:bg-gold/90 premium-button">
                Book Your Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
