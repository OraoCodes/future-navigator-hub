
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-archeoblue text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to accelerate your tech career?</h2>
            <p className="text-white/80 text-lg">
              Join hundreds of tech professionals who have advanced their careers with our expert coaching.
            </p>
          </div>
          <Link to="/services">
            <Button className="bg-archeoyellow text-archeoblue hover:bg-archeoyellow/90 premium-button">
              Book Your Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
