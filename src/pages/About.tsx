
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
            <span className="gold-accent mb-4 inline-block">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helping tech professionals advance their careers through expert guidance and personalized coaching.
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            <h2>Who We Are</h2>
            <p>
              CareerMentor was founded in 2021 by a team of tech industry veterans who saw a need for personalized career coaching
              specifically tailored to technology professionals. Our founders have decades of combined experience at companies like
              Google, Amazon, Microsoft, and numerous startups.
            </p>

            <h2>Our Approach</h2>
            <p>
              We believe that career advancement in tech requires a holistic approach. It's not just about technical skills, but also
              about communication, personal branding, negotiation tactics, and strategic career planning. Our coaching sessions are
              designed to address all these aspects.
            </p>

            <h2>Our Team</h2>
            <p>
              Our coaches are all experienced tech professionals with at least 10 years of industry experience. Many have backgrounds
              in technical leadership, hiring, and HR, giving them unique insights into what companies are looking for in candidates.
            </p>
            
            <h2>Our Commitment</h2>
            <p>
              We're committed to providing the highest quality coaching services with measurable results. Our success is measured
              by our clients' success - whether that's landing a dream job, negotiating a higher salary, or advancing to a leadership role.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
