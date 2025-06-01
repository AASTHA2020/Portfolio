import React, { useState, useCallback } from 'react';
import { Mail, MessageCircle,      Linkedin, Send, Heart, Coffee, Github } from 'lucide-react';
// import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  console.log("[Contact] Component rendering");
  const {
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  console.log("[Contact] Rendering form with errors:", errors);

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      handle: "missaastha11@gmail.com",
      link: "missaastha11@gmail.com",
      color: "portfolio-cyan",
      description: "Drop me a line"
    },
  
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      handle: "Aastha Modi",
      link: "https://www.linkedin.com/in/aastha-modi-a24450255/",
      color: "portfolio-pink",
      description: "Connect professionally"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      handle: "yourusername",
      link: "https://github.com/yourusername",
      color: "portfolio-purple",
      description: "Check out my projects"
    }
  ];

  const quickMessages = [
    "👋 Hey! I'd love to collaborate",
    "🚀 I have a project idea",
    "💼 Let's discuss opportunities",
    "🎨 I need help with design",
    "⚡ Quick question about your work",
    "☕ Want to chat over coffee?"
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-portfolio-cyan/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-portfolio-purple/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-portfolio-pink/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block px-4 py-2 glass border border-portfolio-cyan/30 rounded-full text-portfolio-cyan text-sm font-medium mb-6">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-6xl font-black gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Got a project in mind? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you! Choose your favorite way to reach out.
          </p>
          
          {/* Fun CTA */}
          <div className="glass border border-portfolio-glass-border rounded-2xl p-6 max-w-lg mx-auto mb-8">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <MessageCircle className="w-6 h-6 text-portfolio-cyan" />
              <span className="text-xl font-bold text-white">DM Me Anything!</span>
              <Heart className="w-5 h-5 text-portfolio-pink animate-pulse" />
            </div>
            <p className="text-gray-400 text-sm">
              No phone calls needed - I'm all about that digital communication life! 
              Pick your platform and let's start the conversation.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Social Links */}
          <div className="scroll-reveal">
            <h3 className="text-2xl font-bold text-white mb-8">Choose Your Adventure</h3>
            
            <div className="space-y-4 mb-8">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className={`glass border border-portfolio-glass-border rounded-xl p-6 hover:bg-portfolio-glass/50 hover:border-${social.color}/50 transition-all duration-300 hover:scale-105`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-${social.color}/20 border border-${social.color}/30 rounded-lg flex items-center justify-center text-${social.color} group-hover:bg-${social.color} group-hover:text-white transition-all duration-300`}>
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white group-hover:text-portfolio-cyan transition-colors duration-300">
                          {social.name}
                        </h4>
                        <p className="text-gray-400 text-sm">{social.description}</p>
                        <p className={`text-${social.color} text-sm font-medium`}>{social.handle}</p>
                      </div>
                      <Send className={`w-5 h-5 text-${social.color} group-hover:translate-x-1 transition-transform duration-300`} />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Fun Stats */}
            <div className="glass border border-portfolio-glass-border rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text">24/7</div>
                  <div className="text-xs text-gray-400">Available Online</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">~2h</div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">∞</div>
                  <div className="text-xs text-gray-400">Coffee Breaks</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-xs text-gray-400">Friendly Vibes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Messages */}
          <div className="scroll-reveal">
            <h3 className="text-2xl font-bold text-white mb-8">Quick Start Messages</h3>
            <p className="text-gray-400 mb-6">
              Not sure what to say? Here are some conversation starters you can copy and use!
            </p>
            
            <div className="space-y-3 mb-8">
              {quickMessages.map((message, index) => (
                <div 
                  key={index}
                  className="group glass border border-portfolio-glass-border rounded-lg p-4 hover:bg-portfolio-glass/50 transition-all duration-300 cursor-pointer"
                  onClick={() => navigator.clipboard.writeText(message.replace(/[^\w\s!?.']/g, ''))}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {message}
                    </span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-portfolio-cyan">Click to copy</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coffee Invitation */}
            <div className="glass border border-portfolio-gold/30 rounded-xl p-6 text-center">
              <Coffee className="w-12 h-12 text-portfolio-gold mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Local? Let's Grab Coffee!</h4>
              <p className="text-gray-400 text-sm mb-4">
                If you're in the area, I'm always up for a coffee chat about tech, 
                projects, or just life in general.
              </p>
              <button className="px-6 py-3 bg-portfolio-gold/20 border border-portfolio-gold/30 text-portfolio-gold hover:bg-portfolio-gold hover:text-white transition-all duration-300 rounded-full font-medium">
                Schedule a Coffee Chat
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="glass border border-portfolio-glass-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Something Awesome?</h3>
            <p className="text-gray-400 mb-6">
              Whether it's a full-scale project or just a quick question, 
              I'm here and excited to help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:missaastha11@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-portfolio-purple/25 transition-all duration-300 hover:scale-105"
              >
                Send me an Email
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
