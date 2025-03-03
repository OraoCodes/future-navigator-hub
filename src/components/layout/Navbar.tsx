
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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
    { name: "How We Help", path: "/services", hasDropdown: true },
    { name: "Our Offerings", path: "/services", hasDropdown: true },
    { name: "Pricing", path: "/services", hasDropdown: false },
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
        scrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-navy font-bold text-xl">CareerMentor</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-navy flex items-center gap-1 ${
                    location.pathname === link.path
                      ? "text-navy"
                      : "text-gray-600 hover:text-navy"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
              ))}
            </nav>
          )}

          {/* Call-to-action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <span className="text-gray-700 hover:text-navy font-medium text-sm">
                Log in
              </span>
            </Link>
            <Link to="/services">
              <Button className="bg-black text-white hover:bg-black/90 rounded-full px-6">
                Sign up
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
                      ? "bg-navy/5 text-navy"
                      : "text-gray-600 hover:bg-navy/5 hover:text-navy"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Link to="/login" onClick={closeMenu}>
                  <Button variant="outline" className="w-full border-navy text-navy">
                    Log in
                  </Button>
                </Link>
                <Link to="/services" onClick={closeMenu}>
                  <Button className="w-full bg-navy text-white">
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
