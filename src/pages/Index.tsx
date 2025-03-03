
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { ArrowRight, Users, Check } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <MainLayout>
      <div className="bg-pastel-purple/30 min-h-screen pt-16">
        <div className="container mx-auto px-8 py-20 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left side - Hero text */}
            <div className="md:col-span-5 flex flex-col justify-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Build your dream team today.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-gray-600 text-lg"
              >
                Unlock success with our handpicked dream team of experts. Hire now for unparalleled results.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 flex items-center gap-4"
              >
                <Button className="bg-black hover:bg-black/90 text-white px-8 py-6 rounded-full flex items-center gap-2">
                  Hiring? Book a call
                  <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center">
                    <ArrowRight size={14} />
                  </div>
                </Button>
                
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=40&h=40" 
                    alt="Team member" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=40&h=40" 
                    alt="Team member" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=40&h=40" 
                    alt="Team member" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500">
                    73+
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right side - Feature cards grid */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {/* Mike card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="col-span-2 sm:col-span-1 glass-card overflow-hidden rounded-2xl"
                >
                  <div className="h-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600" 
                      alt="Mike" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">Mike</h3>
                          <p className="text-sm opacity-90">Frontend Dev</p>
                        </div>
                        <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center">
                          <Check size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Quick and adaptable card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="col-span-2 sm:col-span-1 glass-card rounded-2xl bg-pastel-green p-5"
                >
                  <h3 className="font-semibold text-lg mb-4">Quick and adaptable</h3>
                  <p className="text-sm text-gray-700">
                    Hire within a mere 72 hours. Easily adjust your team size from month to month as required.
                  </p>
                </motion.div>
                
                {/* Remote Talent Pool card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="col-span-2 sm:col-span-1 glass-card rounded-2xl bg-pastel-purple p-5"
                >
                  <h3 className="font-semibold text-lg mb-2">Remote Talent Pool</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Pre-vetted remote developers, designers, and product managers with world-class technical and communication skills.
                  </p>
                  <div className="mt-auto">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300" 
                        alt="Angel" 
                        className="w-full h-32 object-cover rounded-xl" 
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-sm">Angel</h3>
                            <p className="text-xs opacity-90">UX/UI Designer</p>
                          </div>
                          <div className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center">
                            <Check size={12} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Profile card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="col-span-1 glass-card overflow-hidden rounded-2xl"
                >
                  <div className="h-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=300" 
                      alt="Letisha" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-sm">Letisha</h3>
                          <p className="text-xs opacity-90">Mobile Dev</p>
                        </div>
                        <div className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center">
                          <Check size={12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Rest assured card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="col-span-1 glass-card rounded-2xl bg-pastel-orange p-5"
                >
                  <h3 className="font-semibold text-lg mb-2">Rest assured,</h3>
                  <p className="text-sm text-gray-700">
                    there are no crazy fees or legal hassle to worry about.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Clients section */}
          <div className="mt-24 text-center">
            <p className="text-gray-600 mb-10">
              Join 150+ companies trusting CareerMentor for their remote engineering needs.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-10">
              <img src="/lovable-uploads/f8874c1b-9a26-4f4a-bdb4-71055ca623d7.png" alt="Company logos" className="max-w-full h-auto opacity-20" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <section className="py-20 px-4 bg-navy text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Ready to build your dream team?</h2>
              <p className="text-white/80 text-lg">
                Join hundreds of companies who have found their perfect tech talent match.
              </p>
            </div>
            <Link to="/services">
              <Button className="bg-pastel-yellow text-gray-800 hover:bg-pastel-yellow/90 premium-button">
                Hire talent
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
