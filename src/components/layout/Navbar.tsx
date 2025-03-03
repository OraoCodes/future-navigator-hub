
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Platform Logo" 
              className="h-8 w-auto"
            />
            <span className="text-archeoblue font-bold text-xl">Archaeological Platform</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-archeoblue relative ${
                    location.pathname === link.path
                      ? "text-archeoblue after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-archeoyellow"
                      : "text-gray-600 hover:text-archeoblue"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Call-to-action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-archeoblue text-archeoblue hover:bg-archeoblue/5">
                Log in
              </Button>
            </Link>
            <Link to="/services">
              <Button className="bg-archeoblue text-white hover:bg-archeoblue/90">
                Book a Session
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden animate-slide-down">
          <div className="px-4 py-3 bg-white border-t">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-2 px-3 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? "bg-archeoblue/5 text-archeoblue"
                      : "text-gray-600 hover:bg-archeoblue/5 hover:text-archeoblue"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Link to="/login" onClick={closeMenu}>
                  <Button variant="outline" className="w-full border-archeoblue text-archeoblue">
                    Log in
                  </Button>
                </Link>
                <Link to="/services" onClick={closeMenu}>
                  <Button className="w-full bg-archeoblue text-white">
                    Book a Session
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
