
import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-archeoblue mb-4">Success Stories</h2>
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
              <div className="w-12 h-12 bg-archeoblue/10 rounded-full"></div>
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
              <div className="w-12 h-12 bg-archeoblue/10 rounded-full"></div>
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
  );
};

export default TestimonialsSection;
