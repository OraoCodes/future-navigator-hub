
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
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
            <span className="gold-accent mb-4 inline-block">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our services? We're here to help you advance your tech career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button type="submit" className="bg-navy text-white hover:bg-navy/90 w-full">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                Our team is available Monday through Friday, 9am to 5pm PST.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-navy">Email</h3>
                  <p className="text-gray-600">info@careermentor.example.com</p>
                </div>
                <div>
                  <h3 className="font-medium text-navy">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-medium text-navy">Office</h3>
                  <p className="text-gray-600">
                    101 Tech Avenue, Suite 500<br />
                    San Francisco, CA 94103<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-navy mb-2">Business Hours</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Monday - Friday: 9:00 AM - 5:00 PM (PST)</li>
                  <li>Saturday - Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
