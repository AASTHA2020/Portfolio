import React, { useState, useEffect, memo } from 'react';
import { Globe, Database, Smartphone, Code, Palette, Zap } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="w-6 h-6" />,
    color: "portfolio-cyan",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Redux", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      // { name: "Vue.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 }
    ]
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    color: "portfolio-purple",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "WebSockets", level: 75 },
      // { name: "Python", level: 85 },
      // { name: "Express.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 85 },
      // { name: "Redis", level: 75 }
    ]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    color: "portfolio-pink",
    skills: [
      { name: "React Native", level: 80 },

      { name: "Flutter", level: 75 },
      { name: "Expo", level: 85 },
      { name: "PWA", level: 90 },
      { name: "Capacitor", level: 80 },
      { name: "Native iOS", level: 70 }
    ]
  },
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    color: "portfolio-yellow",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      // { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      // { name: "Go", level: 70 },
      // { name: "Rust", level: 65 }
    ]
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="w-6 h-6" />,
    color: "portfolio-cyan",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 85 },
      
      { name: "Design Systems", level: 90 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Zap className="w-6 h-6" />,
    color: "portfolio-purple",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Git", level: 95 },
     
    ]
  }
];

const technologies = [
  "React", "Node.js","JavaScript", "TypeScript", , "PostgreSQL", "MongoDB", 
   "Next.js",  "Express.js",
  "Tailwind CSS", "Framer Motion", "Redux", "GraphQL", "REST APIs", "WebSockets"
];

const Skills: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-96 h-96 bg-portfolio-pink/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-portfolio-gold/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block px-4 py-2 glass border border-portfolio-pink/30 rounded-full text-portfolio-pink text-sm font-medium mb-6">
            What I Know
          </span>
          <h2 className="text-4xl md:text-6xl font-black gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies 
            I use to bring ideas to life.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-portfolio-pink to-portfolio-gold mx-auto mt-8"></div>
        </div>

        {/* Skills Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[...Array(6)].map((_, index) => (
              <Skeleton key={index} className="h-[260px] rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="scroll-reveal">
                <div className="glass border border-portfolio-glass-border rounded-2xl p-6 hover:bg-portfolio-glass/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-${category.color}/20 border border-${category.color}/30 rounded-lg flex items-center justify-center text-${category.color} mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          <span className={`text-${category.color} text-sm font-semibold`}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-portfolio-glass rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r from-${category.color} to-${category.color}-light h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Cloud */}
        <div className="scroll-reveal">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Technologies I Work With</h3>
            <p className="text-gray-400">Some of the tools and frameworks in my toolkit</p>
          </div>
          <div className="glass border border-portfolio-glass-border rounded-2xl p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-portfolio-glass border border-portfolio-glass-border rounded-full text-sm text-gray-300 hover:text-portfolio-cyan hover:border-portfolio-cyan/50 transition-all duration-300 cursor-default hover:scale-105"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fade-in 0.6s ease-out forwards'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="glass border border-portfolio-glass-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-400 mb-6">
              Technology evolves rapidly, and I'm passionate about staying current with the latest 
              trends, tools, and best practices in web development.
            </p>
            <button className="group px-8 py-4 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-portfolio-purple/25 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                Let's Build Something Amazing
                <Zap className="w-4 h-4 group-hover:animate-pulse" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
