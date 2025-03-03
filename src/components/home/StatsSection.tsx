
import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-archeoblue/5 rounded-xl"
          >
            <h3 className="text-4xl font-bold text-archeoblue mb-2">95%</h3>
            <p className="text-gray-600">Success rate for career transitions</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-archeoblue/5 rounded-xl"
          >
            <h3 className="text-4xl font-bold text-archeoblue mb-2">500+</h3>
            <p className="text-gray-600">Tech professionals coached</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-archeoblue/5 rounded-xl"
          >
            <h3 className="text-4xl font-bold text-archeoblue mb-2">30%</h3>
            <p className="text-gray-600">Average salary increase</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
