
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

const About = () => {
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
            <span className="text-archeoyellow font-medium mb-4 inline-block">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-archeoblue tracking-tight mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helping archaeology professionals advance their research through innovative tools and resources.
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            <h2>Who We Are</h2>
            <p>
              Our platform was founded in 2021 by a team of archaeology and technology experts who saw a need for specialized digital tools
              specifically tailored to archaeology professionals. Our founders have decades of combined experience in archaeological research,
              field operations, and cutting-edge technology development.
            </p>

            <h2>Our Approach</h2>
            <p>
              We believe that archaeological research requires a comprehensive approach. It's not just about field operations, but also
              about data analysis, visualization, documentation, and collaboration. Our platform is designed to address all these aspects
              of modern archaeological practice.
            </p>

            <h2>Our Team</h2>
            <p>
              Our team consists of archaeologists, software developers, data scientists, and UX designers who work together to create
              tools that are both scientifically rigorous and user-friendly. Many have backgrounds in archaeological research and digital
              humanities, giving them unique insights into the needs of the community.
            </p>
            
            <h2>Our Commitment</h2>
            <p>
              We're committed to advancing archaeological research through technology. Our success is measured by the discoveries and
              insights our users achieve with our platform - whether that's identifying new sites, analyzing complex datasets, or
              sharing findings with the broader scientific community.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
