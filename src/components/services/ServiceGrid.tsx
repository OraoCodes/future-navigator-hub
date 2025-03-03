
import React from "react";
import ServiceCard from "./ServiceCard";
import { FileText, Users, Mic } from "lucide-react";

const ServiceGrid = () => {
  const services = [
    {
      title: "CV Review",
      description: "Get expert feedback on your CV to highlight your strengths and stand out to recruiters.",
      icon: <FileText size={24} />,
      price: "KES 2,500",
      duration: "45 min",
      path: "/booking/cv-review",
    },
    {
      title: "Career Coaching",
      description: "Strategic guidance to help you navigate your career path and achieve your professional goals.",
      icon: <Users size={24} />,
      price: "KES 3,000",
      duration: "60 min",
      path: "/booking/career-coaching",
    },
    {
      title: "Mock Interviews",
      description: "Practice with realistic technical interviews and receive detailed feedback to improve.",
      icon: <Mic size={24} />,
      price: "KES 5,000",
      duration: "60 min",
      path: "/booking/mock-interview",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
};

export default ServiceGrid;
