import {
  GraduationCap,
  Trophy,
  Briefcase,
  Code2,
  MapPin,
  Calendar,
  Star,
} from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript", 
  "React",
  "Node.js",
  "Python",
  "Java",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Docker",
  "AWS",
  "Firebase",
];

const experiences = [
  {
    title: "Joint Secretary",
    company: "ISTE Student Chapter, Chandigarh University",
    period: "2024-2025",
    location: "Chandigarh, India",
    description: `As Joint Secretary, I spearheaded research initiatives and technical development to bridge the gap between students, faculty, and industry leaders. I led full-stack application development, CI/CD implementation, and real-time solutions to enhance member engagement and mentorship programs.`,
    achievements: [
      "📈 Architected and deployed a full-stack platform using React.js (18.x), Context API, Express.js, and Vite, boosting member engagement by 35%",
      "⚙️ Integrated CI/CD pipelines via GitHub Actions, with Jest for unit testing and Vercel for deployment — achieving 99.9% uptime and cutting deployment time by 60%",
      "🔬 Orchestrated 5 student-industry research projects using MongoDB Atlas, Redis caching, and JWT authentication — leading to 2 research papers and 3 award-winning projects",
      "👨‍🏫 Initiated a real-time mentorship system using WebSockets and Nodemailer, achieving 90% positive feedback on student skill improvements",
      "📱 Developed responsive UI using Tailwind CSS, Material-UI, and CSS Grid/Flexbox — expanding accessibility across devices by 45%",
      "🚀 Optimized performance with lazy loading, memoization, and Lighthouse audits — improving page load speed by 40%",
    ],
    technologies: [
      "React.js 18.x",
      "Vite",
      "Express.js 4.x",
      "Node.js 16.x",
      "MongoDB Atlas",
      "Mongoose ODM",
      "Redis",
      "JWT",
      "WebSockets",
      "Tailwind CSS",
      "Material-UI",
      "Jest",
      "GitHub Actions",
      "Vercel",
      "Webpack",
      "ESLint",
      "Prettier",
    ],
  },
];

const achievements = [
  { title: "Dean's List - Academic Excellence", year: "2024", icon: Star },
  { title: "Winner - University Hackathon 2024", year: "2024", icon: Trophy },
  {
    title: "Published Research Paper on AI/ML",
    year: "2023",
    icon: GraduationCap,
  },
  { title: "Google Cloud Certified", year: "2023", icon: Code2 },
];

const skillCategories = ["Frontend", "Backend", "Database", "Tools", "Cloud"];

const categoryColors = {
  Frontend: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  Backend: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  Database: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  Tools: "from-orange-500/20 to-red-500/20 border-orange-500/30",
  Cloud: "from-indigo-500/20 to-violet-500/20 border-indigo-500/30",
};

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            I'm a passionate computer science student with a strong foundation
            in full-stack development. I love creating innovative solutions and
            constantly learning new technologies to stay ahead in this
            ever-evolving field.
          </p>
        </div>

        <div className="space-y-16">
          {/* Personal Info & Education */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-hover">
              <div className="flex items-center mb-6">
                <div className="p-3 glass rounded-full mr-4 bg-purple-500/10">
                  <GraduationCap className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold gradient-text">
                    B.Tech Computer Science & Engineering
                  </h4>
                  <div className="flex items-center text-muted-foreground mt-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Chandigarh University</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>2022 - 2026</span>
                  </div>
                  <div className="mt-3 flex items-center">
                    <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                      Current: 3rd Year
                    </span>
                    <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full ml-2">
                      CGPA: 8.4/10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-hover">
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Built
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">12+</div>
                  <div className="text-sm text-muted-foreground">
                    Technologies
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Learning
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">100+</div>
                  <div className="text-sm text-muted-foreground">
                    GitHub Commits
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section - Centered */}
          <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-hover">
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 glass rounded-full mr-4 bg-blue-500/10">
                <Code2 className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="glass p-8 rounded-2xl transition-transform hover:scale-[1.02] duration-300 cursor-hover">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Briefcase className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="ml-4 text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-[3px] border-cyan-400/30"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[10px] top-1.5 w-4 h-4 bg-cyan-500 shadow-md shadow-cyan-500/30 rounded-full animate-pulse"></div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold gradient-text">
                        {exp.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-1">
                        <span>{exp.company}</span>
                        <span className="text-white/30">•</span>
                        <span>{exp.period}</span>
                        <span className="text-white/30">•</span>
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                      {exp.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="flex items-start gap-1 text-xs bg-purple-500/20 text-purple-300 px-3 py-2 rounded-xl"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-hover">
            <div className="flex items-center mb-8">
              <div className="p-3 glass rounded-full mr-4 bg-yellow-500/10">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold">
                Achievements & Certifications
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 cursor-hover"
                  >
                    <div className="p-3 glass rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
                      <IconComponent className="w-5 h-5 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.year}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
