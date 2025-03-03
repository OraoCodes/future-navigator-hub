
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="bg-black h-8 w-8 rounded-md flex items-center justify-center mr-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L17 6M17 6L14 6M17 6V9M17 6V3M9.5 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9.5M9.5 21C10.0304 21 10.5391 20.7893 10.9142 20.4142C11.2893 20.0391 11.5 19.5304 11.5 19V5C11.5 4.46957 11.2893 3.96086 10.9142 3.58579C10.5391 3.21071 10.0304 3 9.5 3M9.5 21H14.5M9.5 3H14.5M14.5 21C15.0304 21 15.5391 20.7893 15.9142 20.4142C16.2893 20.0391 16.5 19.5304 16.5 19V12M14.5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V12" 
                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-black font-bold text-xl">Teamway</span>
              </div>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Building talented remote teams for companies worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Hire Remote Talent
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  For Developers
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  For Companies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Teamway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
