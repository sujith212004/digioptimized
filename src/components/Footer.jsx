import React, { useState, useEffect, useRef } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const footer = footerRef.current;
    if (footer) {
      footer.addEventListener("mousemove", handleMouseMove);
      return () => footer.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  const services = [
    "Web Development",
    "SEO Optimization",
    "Meta Ads Management",
    "Google My Business",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
  ];

  return (
    <footer ref={footerRef} className="bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden group">
      {/* Enhanced Decorative background with mouse interaction */}
      <div className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Dynamic Mouse Follow Spotlight Effect - Tracks cursor movement */}
      <div 
        className="absolute w-[700px] h-[700px] pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(6, 182, 212, 0.25) 30%, rgba(147, 51, 234, 0.15) 50%, transparent 70%)',
          filter: 'blur(50px)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      />

      {/* Secondary glow layer for depth */}
      <div 
        className="absolute w-[400px] h-[400px] pointer-events-none transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-10"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
          filter: 'blur(30px)',
          transition: 'left 0.05s ease-out, top 0.05s ease-out',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="group/company">
            <h3 className="text-3xl font-display font-extrabold gradient-text mb-4 group-hover/company:scale-105 transition-transform duration-300 cursor-default">
              Digioptimized<span className="text-blue-400 inline-block group-hover/company:rotate-180 transition-transform duration-500">.</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed group-hover/company:text-gray-300 transition-colors duration-300">
              Transforming businesses with stunning websites and powerful digital marketing solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 ${social.color} hover:text-white hover:shadow-lg hover:shadow-blue-500/50 relative group/social`}
                >
                  <social.icon className="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" />
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover/social:opacity-20 blur transition-opacity duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links with enhanced hover */}
          <div className="group/links">
            <h4 className="font-display font-bold text-lg mb-4 text-blue-400 group-hover/links:text-blue-300 transition-colors duration-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name} style={{ animationDelay: `${index * 0.05}s` }}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center group/link hover:translate-x-2"
                  >
                    <span className="w-0 group-hover/link:w-4 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mr-0 group-hover/link:mr-2 transition-all duration-300 rounded-full"></span>
                    <span className="group-hover/link:font-semibold transition-all duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services with animated bullets */}
          <div className="group/services">
            <h4 className="font-display font-bold text-lg mb-4 text-cyan-400 group-hover/services:text-cyan-300 transition-colors duration-300">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li 
                  key={service} 
                  className="text-gray-400 flex items-center gap-2 group/service hover:text-gray-300 transition-all duration-300 hover:translate-x-1 cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover/service:w-2 group-hover/service:h-2 group-hover/service:bg-cyan-400 transition-all duration-300 group-hover/service:animate-pulse"></div>
                  <span className="group-hover/service:font-medium transition-all duration-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter with enhanced interaction */}
          <div className="group/newsletter">
            <h4 className="font-display font-bold text-lg mb-4 text-purple-400 group-hover/newsletter:text-purple-300 transition-colors duration-300">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm group-hover/newsletter:text-gray-300 transition-colors duration-300">
              Subscribe to our newsletter for tips, updates, and exclusive offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none text-sm transition-all duration-300 hover:bg-slate-700 focus:ring-2 focus:ring-blue-500/50"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95 group/button relative overflow-hidden"
              >
                <Mail className="w-5 h-5 relative z-10 group-hover/button:scale-110 transition-transform duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></span>
              </button>
            </form>
          </div>
        </div>

        {/* Enhanced Divider with hover effect */}
        <div className="border-t border-slate-800 pt-8 group/footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="flex items-center gap-1 group-hover/footer-bottom:text-gray-300 transition-colors duration-300">
              © {currentYear} Digioptimized. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 inline animate-pulse hover:scale-125 transition-transform duration-300 cursor-pointer" /> for your success.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-y-1 hover:font-medium relative group/policy">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover/policy:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:font-medium relative group/terms">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover/terms:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-y-1 hover:font-medium relative group/cookie">
                Cookie Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover/cookie:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
