
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Users, Mic } from "lucide-react";

const ServicesPreview = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-archeoblue mb-4">Our Services</h2>
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
            <div className="mb-4 w-12 h-12 rounded-lg bg-archeoblue/5 flex items-center justify-center text-archeoblue">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-semibold text-archeoblue mb-2">CV Review</h3>
            <p className="text-gray-600 mb-4">Expert feedback on your CV to highlight your strengths and stand out to recruiters.</p>
            <p className="font-semibold text-archeoblue mb-6">Starting at $99</p>
            <Link to="/services" className="text-archeoblue font-medium flex items-center hover:text-archeoblue/80 transition-colors">
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
            <div className="mb-4 w-12 h-12 rounded-lg bg-archeoblue/5 flex items-center justify-center text-archeoblue">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-semibold text-archeoblue mb-2">Career Coaching</h3>
            <p className="text-gray-600 mb-4">Strategic guidance to help you navigate your career path and achieve your goals.</p>
            <p className="font-semibold text-archeoblue mb-6">Starting at $149</p>
            <Link to="/services" className="text-archeoblue font-medium flex items-center hover:text-archeoblue/80 transition-colors">
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
            <div className="mb-4 w-12 h-12 rounded-lg bg-archeoblue/5 flex items-center justify-center text-archeoblue">
              <Mic size={24} />
            </div>
            <h3 className="text-xl font-semibold text-archeoblue mb-2">Mock Interviews</h3>
            <p className="text-gray-600 mb-4">Practice with realistic technical interviews and receive detailed feedback.</p>
            <p className="font-semibold text-archeoblue mb-6">Starting at $129</p>
            <Link to="/services" className="text-archeoblue font-medium flex items-center hover:text-archeoblue/80 transition-colors">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
