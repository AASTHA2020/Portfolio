
import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-portfolio-darker to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="text-2xl sm:text-3xl font-black gradient-text mb-6">
            Aastha Modi
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <a
              href="https://github.com/AASTHA2020"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass border border-portfolio-glass-border rounded-full flex items-center justify-center text-gray-400 hover:text-portfolio-cyan hover:border-portfolio-cyan transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-cyan/25"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="mb-6 px-6 py-3 glass border border-portfolio-purple/30 text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-all duration-300 rounded-full font-medium"
          >
            Back to Top ↑
          </button>
          
          {/* Copyright */}
          <div className="border-t border-portfolio-glass-border pt-6">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2024 Aastha Modi. Crafted with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
