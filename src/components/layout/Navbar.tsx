
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
    { name: "Companies", path: "/companies" },
    { name: "Members", path: "/members" },
    { name: "Society", path: "/society" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
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
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="bg-black h-8 w-8 rounded-md flex items-center justify-center mr-2">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L17 6M17 6L14 6M17 6V9M17 6V3M9.5 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9.5M9.5 21C10.0304 21 10.5391 20.7893 10.9142 20.4142C11.2893 20.0391 11.5 19.5304 11.5 19V5C11.5 4.46957 11.2893 3.96086 10.9142 3.58579C10.5391 3.21071 10.0304 3 9.5 3M9.5 21H14.5M9.5 3H14.5M14.5 21C15.0304 21 15.5391 20.7893 15.9142 20.4142C16.2893 20.0391 16.5 19.5304 16.5 19V12M14.5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V12" 
                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-black font-bold text-xl">Teamway</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-accent1 ${
                    location.pathname === link.path
                      ? "text-accent1 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Call-to-action button */}
          <div className="hidden md:flex items-center">
            <Link to="/services">
              <Button className="bg-black hover:bg-black/90 text-white rounded-full">
                Hire talent
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
                      ? "bg-gray-100 text-accent1"
                      : "text-gray-600 hover:bg-gray-50 hover:text-accent1"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t">
                <Link to="/services" onClick={closeMenu}>
                  <Button className="w-full bg-black text-white rounded-full">
                    Hire talent
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
