
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, BookOpen, Target } from "lucide-react";

const About = () => {
  const coreValues = [
    {
      icon: <Users className="h-6 w-6 text-archeoyellow" />,
      title: "Client-Centered",
      description: "We put our clients' career goals and needs first in everything we do."
    },
    {
      icon: <Award className="h-6 w-6 text-archeoyellow" />,
      title: "Excellence",
      description: "We strive for excellence in our coaching and constantly improve our services."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-archeoyellow" />,
      title: "Continuous Learning",
      description: "We stay up-to-date with industry trends to provide relevant guidance."
    },
    {
      icon: <Target className="h-6 w-6 text-archeoyellow" />,
      title: "Results-Oriented",
      description: "We focus on delivering measurable outcomes for our clients' careers."
    }
  ];

  return (
    <MainLayout>
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="gold-accent mb-4 inline-block">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-archeoblue tracking-tight mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helping tech professionals advance their careers through expert guidance and personalized coaching.
            </p>
          </motion.div>

          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team meeting"
                  className="rounded-xl shadow-md w-full h-auto object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-archeoblue">Who We Are</h2>
                <p className="text-gray-600">
                  Archeohub was founded in 2024 by senior tech talent specialists who saw a need for personalized career coaching
                  specifically tailored to technology professionals. Our founders have decades of combined experience at companies like
                  Google, Amazon, Microsoft, and numerous startups.
                </p>
                <p className="text-gray-600">
                  We believe that career advancement in tech requires a holistic approach. It's not just about technical skills, but also
                  about communication, personal branding, negotiation tactics, and strategic career planning. Our coaching sessions are
                  designed to address all these aspects.
                </p>
              </motion.div>
            </div>
          </div>
          
          <div className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-archeoblue text-center mb-10"
            >
              Our Core Values
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-archeoblue/10 hover:border-archeoblue/30 transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="rounded-full bg-archeoblue/5 w-12 h-12 flex items-center justify-center mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-archeoblue mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-archeoblue text-center mb-6"
              >
                Our Commitment
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600 text-center mb-8"
              >
                We're committed to providing the highest quality coaching services with measurable results. 
                Our success is measured by our clients' success - whether that's landing a dream job, 
                negotiating a higher salary, or advancing to a leadership role.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <a href="/services" className="primary-button">
                  Explore Our Services
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
