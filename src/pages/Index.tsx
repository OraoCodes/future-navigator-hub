
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
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-left">
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
                className="text-4xl md:text-6xl font-bold text-navy leading-tight mb-6"
              >
                Elevate Your Tech Career to New Heights
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-gray-600 mb-10"
              >
                Expert guidance for tech professionals seeking to advance their careers through personalized coaching, CV reviews, and interview preparation.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/services">
                  <Button className="primary-button w-full sm:w-auto">
                    Book a Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button className="secondary-button w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full aspect-square max-w-md mx-auto"
              >
                <div className="absolute inset-0 bg-navy/5 rounded-full animate-pulse"></div>
                <div className="absolute inset-3 bg-navy/10 rounded-full"></div>
                <div className="absolute inset-6 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Career Coaching" 
                    className="w-2/3 h-2/3 object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-navy/5 rounded-xl"
            >
              <h3 className="text-4xl font-bold text-navy mb-2">95%</h3>
              <p className="text-gray-600">Success rate for career transitions</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-navy/5 rounded-xl"
            >
              <h3 className="text-4xl font-bold text-navy mb-2">500+</h3>
              <p className="text-gray-600">Tech professionals coached</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-navy/5 rounded-xl"
            >
              <h3 className="text-4xl font-bold text-navy mb-2">30%</h3>
              <p className="text-gray-600">Average salary increase</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
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
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from tech professionals who transformed their careers with our coaching.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-navy/10 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Software Engineer at Google</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The mock interviews and career coaching were invaluable in helping me land my dream job. 
                I gained confidence and improved my technical communication skills significantly."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-navy/10 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Product Manager at Microsoft</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The CV review service transformed my resume from good to exceptional. 
                I started getting calls from recruiters within days of making the recommended changes."
              </p>
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
