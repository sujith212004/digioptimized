import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Smooth page-to-page transitions with Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'page-transition-active');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800 overflow-hidden">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Enhanced Page Content with Smooth Transitions */}
      <main className="relative">
        {/* Animated Background Gradient */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50/40 via-white to-cyan-50/40 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(6,182,212,0.05),transparent_50%)]"></div>
        </div>

        {/* Smooth Animated Sections */}
        <div className="smooth-appear">
          <Hero />
        </div>
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
