
import React, { useEffect, useState } from 'react';
import { Github } from 'lucide-react';

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "Full Stack Developer & UI/UX Designer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-portfolio-purple rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-portfolio-cyan rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-portfolio-pink rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/10 via-transparent to-portfolio-cyan/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Greeting */}
        <div className="animate-fade-in mb-6">
          <span className="inline-block px-4 py-2 glass border border-portfolio-purple/30 rounded-full text-portfolio-cyan text-sm font-medium">
            👋 Welcome to my digital world
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-slide-up">
          <span className="block mb-2">Hey, I'm</span>
          <span className="gradient-text glow-text">Aastha Modi</span>
        </h1>

        {/* Typewriter Effect */}
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light min-h-[2.5rem] animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="border-r-2 border-portfolio-neon pr-1">
            {typewriterText}
          </span>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up px-4" style={{ animationDelay: '0.4s' }}>
          I craft digital experiences that blend beautiful design with powerful functionality. 
          Specializing in modern web technologies and creating solutions that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-slide-up px-4" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className="group w-full sm:w-auto px-6 sm:px-8 py-4 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-portfolio-purple/25 transition-all duration-300 hover:scale-105 hover:animate-glow-pulse"
          >
            <span className="flex items-center justify-center gap-2">
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          <button
            onClick={() => window.open('https://github.com/AASTHA2020', '_blank')}
            className="group w-full sm:w-auto px-6 sm:px-8 py-4 glass border border-portfolio-glass-border text-white font-semibold rounded-full hover:bg-portfolio-glass hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              <Github className="w-5 h-5" />
              GitHub Profile
            </span>
          </button>

          {/* <button
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="group w-full sm:w-auto px-6 sm:px-8 py-4 border-2 border-portfolio-gold text-portfolio-gold font-semibold rounded-full hover:bg-portfolio-gold hover:text-portfolio-dark transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-portfolio-gold/25"
          >
            Download Resume
          </button> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-portfolio-cyan to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-20 left-10 w-2 h-2 bg-portfolio-cyan rounded-full animate-float floating-animation"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-portfolio-purple rounded-full animate-float floating-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-portfolio-pink rounded-full animate-float floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-portfolio-gold rounded-full animate-float floating-animation" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
