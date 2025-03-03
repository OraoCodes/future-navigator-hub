
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  duration: string;
  path: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
  duration,
  path,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="service-card"
    >
      <div>
        <div className="mb-4 w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Price</p>
            <p className="font-semibold text-navy">{price}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Duration</p>
            <p className="font-semibold text-navy">{duration}</p>
          </div>
        </div>
      </div>
      
      <Link to={path}>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md shadow-md transition-all duration-300">
          Book Now
        </Button>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
