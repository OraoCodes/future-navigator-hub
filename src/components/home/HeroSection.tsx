
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wand } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
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
              className="text-4xl md:text-6xl font-bold text-archeoblue leading-tight mb-6"
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
                <Button className="bg-archeoblue hover:bg-archeoblue/90 text-white font-medium px-6 py-3 rounded-lg shadow-md w-full sm:w-auto">
                  Book a Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://archeo20.netlify.app" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white border-2 border-archeoblue text-archeoblue hover:bg-archeoblue/5 font-medium px-6 py-3 rounded-lg shadow-sm w-full sm:w-auto">
                  <Wand className="mr-2 h-4 w-4" />
                  Archeo 2.0
                </Button>
              </a>
            </motion.div>
          </div>
          
          {!isMobile && (
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-md mx-auto"
              >
                <div className="relative aspect-square rounded-full shadow-xl overflow-hidden bg-white border-4 border-white mx-auto" style={{ width: '350px', height: '350px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Tech professional coding on laptop" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-archeoblue/10 to-transparent pointer-events-none rounded-full"></div>
                </div>
                
                {/* Fully visible decorative circles */}
                <motion.div 
                  className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 rounded-full bg-archeoyellow cursor-pointer hover:bg-archeoyellow/80 transition-colors"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                ></motion.div>
                <motion.div 
                  className="absolute -z-10 -top-6 -left-6 w-24 h-24 rounded-full bg-archeogreen cursor-pointer hover:bg-archeogreen/80 transition-colors" 
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                ></motion.div>
                <motion.div 
                  className="absolute -z-10 top-1/2 -translate-y-1/2 -right-4 w-16 h-16 rounded-full bg-archeoblue cursor-pointer hover:bg-archeoblue/80 transition-colors" 
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                ></motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
