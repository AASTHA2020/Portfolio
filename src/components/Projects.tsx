import { memo, useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image?: string;
  webapp?: string;
}

const personalProjects: Project[] = [
  {
    title: "Amazon Clone (Ecommerce Website)",
    description: "Developed an Amazon clone using React with Firebase for backend services.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    webapp: "https://mctreact.vercel.app/",
  },
  {
    title: "Greeting Chrome Extension",
    description: "Provides a random quote and a greeting every time you open a new tab. Also has a dark mode toggle. ",
    image: "https://github.com/AASTHA2020/Greetings_Extensions/raw/main/image3.png",
    webapp: "https://chrome.google.com/webstore/detail/greetings-extension/",
  },
  {
    title: "Video Chat App",
    description: "Join video chat rooms with a unique session ID built using React. ",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop",
    webapp: "https://aastha-video-chat-room.vercel.app/",
  },
  {
    title: "Real Estate Website - RentUp",
    description: "Modern platform for renting properties with search and listings.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    webapp: "https://rent-house-react-jade.vercel.app/",
  },
  {
    title: "CryptoView",
    description: "Real-time cryptocurrency portfolio tracker with real-time  alerts. ",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
    webapp: "https://cryptoview-one.vercel.app/",
  },
];

const companyProjects: Project[] = [
  {
    title: "Learning Management System (LMS)",
    description: "LMS with features like course creation, quizzes, assignments, and tracking. Enabled seamless collaboration between instructors and students, integrated analytics dashboards, and automated grading workflows.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&h=300&fit=crop",
  },
  {
    title: "Vehicle Insurance Website (USA Company)",
    description: "US-based insurance website focusing on policy management and UX . Implemented secure online claims, active chat support, real-time policy quotes, and a responsive design for mobile and desktop users.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
  },
  {
    title: "Brand-Influencer Platform",
    description: "Connects brands with influencers for campaign management. Features include campaign analytics, automated contract generation, and real-time messaging between brands and influencers.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&h=300&fit=crop",
  },
];

const ProjectCard = memo(({ project, index, isPersonal = true }: { project: Project; index: number; isPersonal?: boolean }) => (
  <div key={index} className="group scroll-reveal">
    <div className="glass border border-portfolio-glass-border rounded-xl overflow-hidden hover:bg-portfolio-glass/50 transition-all duration-300 hover:scale-105">
      <div className="relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-48 bg-portfolio-glass flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
        {isPersonal && project.webapp && (
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={project.webapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 glass border border-portfolio-cyan/30 rounded-full flex items-center justify-center text-portfolio-cyan hover:bg-portfolio-cyan hover:text-white transition-all duration-300"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-3 leading-relaxed">{project.description}</p>
      </div>
    </div>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

export const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [visibleCompanyProjects, setVisibleCompanyProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      await new Promise(res => setTimeout(res, 500));
      setVisibleCompanyProjects(companyProjects);
      await new Promise(res => setTimeout(res, 500));
      setVisibleProjects(personalProjects);
      setIsLoading(false);
    };
    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground">A collection of company and personal projects</p>
        </motion.div>

        {isLoading ? (
          <div className="text-center text-white">Loading projects...</div>
        ) : (
          <>
            <h3 className="text-2xl font-semibold mb-6">Company Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {visibleCompanyProjects.map((project, i) => (
                <ProjectCard key={i} project={project} index={i} isPersonal={false} />
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6">Personal Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, i) => (
                <ProjectCard key={i} project={project} index={i} isPersonal={true} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default memo(Projects);
