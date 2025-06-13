
import { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    title: 'AI Chatbot Assistant',
    description: 'Intelligent chatbot using natural language processing to provide customer support and answer queries automatically.',
    techStack: ['Python', 'TensorFlow', 'Flask', 'React', 'WebSocket'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, file sharing, and team collaboration features.',
    techStack: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
    github: '#',
    demo: '#',
    featured: true
  }
];

const additionalProjects = [
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts and interactive maps.',
    techStack: ['React', 'OpenWeather API', 'Chart.js'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio website built with modern web technologies.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    title: 'Blog Platform',
    description: 'Full-featured blogging platform with CMS capabilities.',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL'],
    github: '#',
    demo: '#',
    featured: false
  }
];

export const ProjectsSection = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const ProjectCard = ({ project, index }: { project: typeof featuredProjects[0], index: number }) => (
    <div 
      className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-500 cursor-hover group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="glass px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/10 to-cyan-500/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-4">
        <a 
          href={project.github}
          className="flex items-center space-x-2 glass px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 cursor-hover"
        >
          <Github className="w-4 h-4" />
          <span className="text-sm">Code</span>
        </a>
        <a 
          href={project.demo}
          className="flex items-center space-x-2 glass px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 cursor-hover bg-gradient-to-r from-purple-500/20 to-cyan-500/20"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm">Live Demo</span>
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development skills through various web applications and software solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowMoreProjects(!showMoreProjects)}
            className="glass px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 cursor-hover bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 flex items-center space-x-2 mx-auto"
          >
            <span className="gradient-text font-semibold">
              {showMoreProjects ? 'Show Less' : 'More Projects'}
            </span>
            {showMoreProjects ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Additional Projects */}
        {showMoreProjects && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 animate-slide-up">
            {additionalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
