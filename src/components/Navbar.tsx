import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-portfolio-purple via-portfolio-cyan to-portfolio-pink bg-clip-text text-transparent"
          >
            AM
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                  activeSection === section
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-portfolio-purple via-portfolio-cyan to-portfolio-pink"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 glass border border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-all duration-300 rounded-full font-medium hover:shadow-lg hover:shadow-portfolio-purple/25"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
              <span className="w-6 h-0.5 bg-foreground" />
              <span className="w-6 h-0.5 bg-foreground" />
              <span className="w-6 h-0.5 bg-foreground" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Scroll to top button */}
      {isScrolled && (
        <button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-6 right-6 w-12 h-12 glass border border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-all duration-300 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-portfolio-purple/25 animate-bounce z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </motion.nav>
  );
};

export default Navbar;
