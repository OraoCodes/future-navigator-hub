
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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

  return (
    <MainLayout>
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-navy mb-4"
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

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-sm border"
            >
              <h2 className="text-2xl font-semibold text-navy mb-6">Get In Touch</h2>
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
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-navy text-white hover:bg-navy/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">Office Hours</h2>
                <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <span className="text-navy font-medium mr-2">Email:</span>
                    <a href="mailto:info@careermentor.com" className="text-gray-600 hover:text-navy">info@careermentor.com</a>
                  </p>
                  <p className="flex items-start">
                    <span className="text-navy font-medium mr-2">Phone:</span>
                    <a href="tel:+11234567890" className="text-gray-600 hover:text-navy">+1 (123) 456-7890</a>
                  </p>
                  <p className="flex items-start">
                    <span className="text-navy font-medium mr-2">Address:</span>
                    <span className="text-gray-600">123 Career Avenue, Suite 200<br />San Francisco, CA 94103</span>
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-navy hover:text-navy/80">LinkedIn</a>
                  <a href="#" className="text-navy hover:text-navy/80">Twitter</a>
                  <a href="#" className="text-navy hover:text-navy/80">Facebook</a>
                  <a href="#" className="text-navy hover:text-navy/80">Instagram</a>
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
