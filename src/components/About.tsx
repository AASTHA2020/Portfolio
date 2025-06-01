import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-cyan/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block px-4 py-2 glass border border-portfolio-cyan/30 rounded-full text-portfolio-cyan text-sm font-medium mb-6">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-6xl font-black gradient-text mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="scroll-reveal">
            <div className="glass p-8 rounded-2xl border border-portfolio-glass-border">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Passionate Developer & Creative Problem Solver
              </h3>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  <strong>
                  Hello! I'm Aastha, a dedicated full-stack web developer with a passion for creating 
                  innovative digital solutions. My journey began with curiosity about how things work 
                  on the web, and it has evolved into a career focused on building exceptional user experiences.
                  </strong>
                </p>
                
                <p>
                  I specialize in modern web technologies including <span className="text-portfolio-cyan font-semibold">React.js</span>, 
                  <span className="text-portfolio-purple font-semibold"> Node.js</span>. I'm constantly 
                  learning and adapting to new technologies to stay at the forefront of web development.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-portfolio-glass-border">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-gray-400">Dedication</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Timeline */}
          <div className="scroll-reveal">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-8">My Journey</h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-purple via-portfolio-cyan to-portfolio-pink"></div>
                
                {/* Timeline Items */}
                <div className="space-y-8">
                  {[
                    {
                      year: '2025',
                      title: 'Full Stack Developer',
                      description: 'Leading complex projects and mentoring junior developers',
                      color: 'portfolio-pink'
                    },
                    {
                      year: '2024',
                      title: 'Jr MERN Stack Developer',
                      description: 'Developed scalable web applications using modern frameworks',
                      color: 'portfolio-cyan'
                    },
                    {
                      year: '2023',
                      title: 'Frontend Developer',
                      description: 'Focused on creating beautiful, responsive user interfaces',
                      color: 'portfolio-purple'
                    },
                    {
                      year: '2022',
                      title: 'Started My Journey',
                      description: 'Began learning programming and fell in love with development',
                      color: 'portfolio-gold'
                    }
                  ].map((item, index) => (
                    <div key={index} className="relative flex items-start ml-12">
                      <div className={`absolute -left-14 w-8 h-8 bg-${item.color} rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg`}>
                        <div className={`w-3 h-3 bg-white rounded-full`}></div>
                      </div>
                      
                      <div className="glass p-6 rounded-xl border border-portfolio-glass-border flex-1 hover:bg-portfolio-glass/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-bold text-white">{item.title}</h4>
                          <span className={`text-${item.color} text-sm font-semibold`}>{item.year}</span>
                        </div>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
