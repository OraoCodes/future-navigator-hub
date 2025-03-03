
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  // Sample stats
  const stats = [
    { label: "Increase in salary", value: "+25%", description: "Average salary increase after coaching" },
    { label: "Interview success rate", value: "98%", description: "More than 10K coaches" },
  ];

  // Sample trusted companies
  const trustedCompanies = [
    "TechGiant", "InnovateCorp", "FutureTech", "GlobalSoft"
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
              >
                Career consult <br />
                that leads you <br />
                to your goals
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600 mb-8"
              >
                Data-driven insights for tech career advancement, 
                advisors and executives.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link to="/services">
                  <Button className="bg-black text-white hover:bg-black/90 gap-2 rounded-full px-6 py-6 text-base">
                    Reinforce your career
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent1 font-semibold">$149.00</span>
                  <span className="text-gray-500 text-sm">per session</span>
                </div>
              </motion.div>
              
              <Separator className="mb-8" />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-sm text-gray-500 mb-4">
                  We provide our services to many worldwide leading companies
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                  {trustedCompanies.map((company, index) => (
                    <span key={index} className="text-gray-700 font-medium">
                      {company}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 z-10">
                <Card className="w-64 overflow-hidden bg-white shadow-lg rounded-xl">
                  <CardContent className="p-4">
                    <div className="bg-accent2/10 text-accent2 rounded-full w-8 h-8 flex items-center justify-center mb-2">
                      <Check className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-gray-500 mb-1">+25%</p>
                    <h3 className="font-semibold text-gray-900">
                      Increase of the company's efficiency
                    </h3>
                  </CardContent>
                </Card>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-0 rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Career coaching session" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                
                <div className="absolute bottom-4 right-4">
                  <Card className="w-48 bg-gray-900 text-white rounded-xl">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="bg-yellow-400 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          <span className="font-bold">98</span>
                        </div>
                        <div>
                          <p className="text-xs text-gray-300">Overall clients rate</p>
                          <p className="text-xs text-gray-400">More than 10K coaches</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
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
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="mb-4 w-12 h-12 rounded-full bg-pastel-blue flex items-center justify-center text-accent4">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CV Review</h3>
              <p className="text-gray-600 mb-4">Expert feedback on your CV to highlight your strengths and stand out to recruiters.</p>
              <p className="font-semibold text-gray-900 mb-6">Starting at $99</p>
              <Link to="/services" className="text-accent4 font-medium flex items-center hover:text-accent4/80 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            {/* Career Coaching */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="mb-4 w-12 h-12 rounded-full bg-pastel-green flex items-center justify-center text-accent2">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Coaching</h3>
              <p className="text-gray-600 mb-4">Strategic guidance to help you navigate your career path and achieve your goals.</p>
              <p className="font-semibold text-gray-900 mb-6">Starting at $149</p>
              <Link to="/services" className="text-accent2 font-medium flex items-center hover:text-accent2/80 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            {/* Mock Interviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="mb-4 w-12 h-12 rounded-full bg-pastel-orange flex items-center justify-center text-accent3">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mock Interviews</h3>
              <p className="text-gray-600 mb-4">Practice with realistic technical interviews and receive detailed feedback.</p>
              <p className="font-semibold text-gray-900 mb-6">Starting at $129</p>
              <Link to="/services" className="text-accent3 font-medium flex items-center hover:text-accent3/80 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm mb-2">{stat.label}</span>
                  <span className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</span>
                  <span className="text-gray-600 text-sm">{stat.description}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Ready to accelerate your tech career?</h2>
              <p className="text-white/80 text-lg">
                Join hundreds of tech professionals who have advanced their careers with our expert coaching.
              </p>
            </div>
            <Link to="/services">
              <Button className="bg-white text-gray-900 hover:bg-white/90 rounded-full px-6 py-6">
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
