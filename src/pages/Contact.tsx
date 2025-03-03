
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmailNotification = async (formData: any) => {
    console.log("Sending contact form notification with data:", formData);
    
    // In a real application, this would be an API call to your backend service
    // For demo purposes, we're simulating the API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Contact form notification sent successfully");
        resolve(true);
      }, 1000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    
    try {
      const formData = { name, email, message };
      
      // Send email notification
      await sendEmailNotification(formData);
      
      toast({
        title: "Message sent",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-archeoblue" />,
      title: "Email",
      value: "info@archeohub.com",
      link: "mailto:info@archeohub.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-archeoblue" />,
      title: "Phone",
      value: "+254 743 659 514",
      link: "tel:+254743659514"
    },
    {
      icon: <MapPin className="h-5 w-5 text-archeoblue" />,
      title: "Address",
      value: "Westlands Business Park, Nairobi, Kenya",
      link: "https://maps.google.com/?q=Westlands+Business+Park+Nairobi+Kenya"
    },
    {
      icon: <Clock className="h-5 w-5 text-archeoblue" />,
      title: "Hours",
      value: "Monday - Friday: 9AM - 6PM",
      link: null
    }
  ];

  return (
    <MainLayout>
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="gold-accent mb-4 inline-block">Get in Touch</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold text-archeoblue mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Have questions about our services? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3"
            >
              <Card className="border-archeoblue/10">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-semibold text-archeoblue mb-6">Send Us a Message</h2>
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name" 
                        className="border-archeoblue/20 focus:border-archeoblue/50"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address" 
                        className="border-archeoblue/20 focus:border-archeoblue/50"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we help you?"
                        className="min-h-[150px] border-archeoblue/20 focus:border-archeoblue/50"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-archeoblue text-white hover:bg-archeoblue/90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 space-y-8"
            >
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-archeoblue mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-archeoblue/10 p-2">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.title}</p>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-archeoblue hover:text-archeoblue/80 transition-colors"
                            target={item.title === "Address" ? "_blank" : undefined}
                            rel={item.title === "Address" ? "noopener noreferrer" : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-archeoblue">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-archeoblue mb-6">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="bg-white text-archeoblue px-4 py-2 rounded-lg hover:bg-archeoblue hover:text-white transition-colors duration-300 shadow-sm">LinkedIn</a>
                  <a href="#" className="bg-white text-archeoblue px-4 py-2 rounded-lg hover:bg-archeoblue hover:text-white transition-colors duration-300 shadow-sm">Twitter</a>
                  <a href="#" className="bg-white text-archeoblue px-4 py-2 rounded-lg hover:bg-archeoblue hover:text-white transition-colors duration-300 shadow-sm">Facebook</a>
                  <a href="#" className="bg-white text-archeoblue px-4 py-2 rounded-lg hover:bg-archeoblue hover:text-white transition-colors duration-300 shadow-sm">Instagram</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
