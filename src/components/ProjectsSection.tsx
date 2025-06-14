import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const featuredProjects = [
  {
    title: "CarbonSense: The One-Stop Carbon Footprint Tracker",
    description:
      "CarbonSense helps users reduce their carbon footprint by tracking emissions from websites, products, and locations in real time. It offers eco-friendly tips, code optimizations, and greener shopping options—making sustainable choices easy and impactful.",
    techStack: [
      "React",
      "Node.js",
      "Supabase",
      "Typescript",
      "Tailwind",
      "Vite",
      "Websocket",
    ],
    github: "https://github.com/KRI5HNA-04/carbon-sense-eco-verse",
    demo: "https://carbon-sense-eco-verse.vercel.app/",
    featured: true,
  },
  {
    title: "GitHub Profile Parser",
    description:
      "Developed GitHub Profile Dive, a modern web application that transforms how developers and recruiters explore GitHub profiles. This tool provides instant, comprehensive insights into user profiles, repositories, and coding patterns through an intuitive interface.",
    techStack: [
      "React",
      "Tensorflow",
      "Shadcn UI",
      "Tailwind CSS",
      "Github API",
    ],
    github: "https://github.com/KRI5HNA-04/github-profile-dive",
    demo: "https://github-profile-dive.vercel.app/",
    featured: true,
  },
  {
    title: "PathWise: Adaptive E-learning Platform",
    description:
      "PathWise is a unified e-learning platform offering gamified courses, tech roadmaps, leaderboards, and skill assessments with certification. It includes tools like a distraction-free YouTube player and collaborative coding, all in one streamlined interface for focused, effective learning.",
    techStack: ["React", "Firebase", "OpenAI", "Websocket", "Tailwind CSS"],
    github: "https://github.com/KRI5HNA-04/learnloop-navigator",
    demo: "https://learnloop-navigator.vercel.app/",
    featured: true,
  },
];

const additionalProjects = [
  {
    title: "Collaborative Code Editor",
    description:
      "Real-time collaborative code editor with syntax highlighting and version control.",
    techStack: ["React", "Monaco Editor", "WebSocket", "Node.js"],
    github: "https://github.com/KRI5HNA-04/Collab-Code-Editor",
    demo: "https://collab-code-editor-ecru.vercel.app/",
    featured: false,
  },
  {
    title: "Disease Prediction using Machine Learning",
    description:
      "Developed a machine learning model to predict diseases based on patient data and symptoms.",
    techStack: ["Python", "TensorFlow", "Flask", "React", "WebSocket"],
    github: "https://github.com/KRI5HNA-04/Disease-Prediction-Accuracy",
    demo: "#",
    featured: false,
  },
  {
    title: "Healthcare Management System",
    description:
      "Comprehensive platform for managing patient records, appointments, and billing.",
    techStack: ["Python", "TensorFlow", "Flask", "React", "WebSocket"],
    github: "https://github.com/KRI5HNA-04/Healthcare-Management-System",
    demo: "#",
    featured: false,
  },
];

export const ProjectsSection = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const ProjectCard = ({
    project,
    index,
  }: {
    project: (typeof featuredProjects)[0];
    index: number;
  }) => (
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development skills through various web applications
            and software solutions
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
              {showMoreProjects ? "Show Less" : "More Projects"}
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
