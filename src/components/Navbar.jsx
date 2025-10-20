import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Process", to: "process" },
    { name: "FAQ", to: "faq" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled 
          ? "glass shadow-xl py-3 backdrop-blur-lg" 
          : "bg-white/95 backdrop-blur-sm py-4 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Sleek Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={200}
          spy={true}
          offset={-80}
          hashSpy={false}
          isDynamic={true}
          onSetActive={() => setActiveSection("home")}
          className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold cursor-pointer group"
        >
          <span className="gradient-text group-hover:opacity-80 transition-opacity duration-100">
            Digioptimized
          </span>
          <span className="text-blue-600">.</span>
        </ScrollLink>

        {/* Ultra Responsive Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={200}
                spy={true}
                offset={-80}
                hashSpy={false}
                isDynamic={true}
                activeClass="text-blue-600 font-bold"
                onSetActive={() => setActiveSection(item.to)}
                className={`relative px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-100 rounded-lg hover:bg-blue-50 ${
                  activeSection === item.to 
                    ? "text-blue-600 font-bold" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
                {/* Active indicator dot */}
                {activeSection === item.to && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                )}
              </ScrollLink>
            </li>
          ))}
          
          {/* Modern CTA Button */}
          <li className="ml-3">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={200}
              offset={-80}
              hashSpy={false}
              isDynamic={true}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-lg cursor-pointer font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-100 active:scale-95"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </ScrollLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-all duration-100 active:scale-95"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="w-6 h-6 text-blue-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Ultra Fast Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-150 ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="glass shadow-xl mx-4 mt-2 rounded-xl overflow-hidden">
          <ul className="flex flex-col p-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={200}
                  spy={true}
                  offset={-80}
                  hashSpy={false}
                  isDynamic={true}
                  activeClass="bg-blue-50 text-blue-600 font-bold"
                  onClick={() => {
                    setOpen(false);
                    setActiveSection(item.to);
                  }}
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 cursor-pointer transition-all duration-100 rounded-lg active:scale-95"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
            <li className="mt-2 px-2">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={200}
                offset={-80}
                hashSpy={false}
                isDynamic={true}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-3 rounded-lg cursor-pointer font-semibold text-sm hover:shadow-lg transition-all duration-100 active:scale-95"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
