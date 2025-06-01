import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, we can stop observing
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      <Hero />
      
      {/* Smooth transition divider */}
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-portfolio-purple/10 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-16 bg-gradient-to-b from-portfolio-purple via-portfolio-cyan to-portfolio-pink animate-pulse"></div>
        </div>
      </div>
      
      <About />
      
      {/* Another transition */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-portfolio-cyan/10 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-portfolio-purple rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-portfolio-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-portfolio-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
      
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Index;
