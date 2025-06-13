
import { GraduationCap, Trophy, Briefcase, Code2, MapPin, Calendar, Star } from 'lucide-react';

const skills = [
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'React', level: 88, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'Java', level: 70, category: 'Backend' },
  { name: 'MongoDB', level: 82, category: 'Database' },
  { name: 'PostgreSQL', level: 78, category: 'Database' },
  { name: 'Git', level: 85, category: 'Tools' },
  { name: 'Docker', level: 70, category: 'Tools' },
  { name: 'AWS', level: 65, category: 'Cloud' },
  { name: 'Firebase', level: 80, category: 'Cloud' }
];

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Tech Company',
    period: '2024',
    location: 'Remote',
    description: 'Developed responsive web applications using React and TypeScript. Collaborated with senior developers to implement user-friendly interfaces and optimize application performance.',
    achievements: ['Built 3 major features', 'Improved page load time by 40%', 'Mentored 2 junior interns']
  },
  {
    title: 'Open Source Contributor',
    company: 'Various Projects',
    period: '2023 - Present',
    location: 'Global',
    description: 'Contributing to open source projects and building community tools. Active member of developer communities.',
    achievements: ['50+ contributions', '5 major PRs merged', 'Maintained 2 projects']
  }
];

const achievements = [
  { title: 'Dean\'s List - Academic Excellence', year: '2024', icon: Star },
  { title: 'Winner - University Hackathon 2024', year: '2024', icon: Trophy },
  { title: 'Published Research Paper on AI/ML', year: '2023', icon: GraduationCap },
  { title: 'Google Cloud Certified', year: '2023', icon: Code2 }
];

const skillCategories = ['Frontend', 'Backend', 'Database', 'Tools', 'Cloud'];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            I'm a passionate computer science student with a strong foundation in full-stack development. 
            I love creating innovative solutions and constantly learning new technologies to stay ahead in this ever-evolving field.
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
                  <h4 className="text-xl font-semibold gradient-text">B.Tech Computer Science & Engineering</h4>
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
                      CGPA: 8.5/10
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
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">12+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">2+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">100+</div>
                  <div className="text-sm text-muted-foreground">GitHub Commits</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-hover">
            <div className="flex items-center mb-8">
              <div className="p-3 glass rounded-full mr-4 bg-blue-500/10">
                <Code2 className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
            
            <div className="space-y-8">
              {skillCategories.map((category) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-lg font-semibold text-muted-foreground">{category}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.filter(skill => skill.category === category).map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-hover">
            <div className="flex items-center mb-8">
              <div className="p-3 glass rounded-full mr-4 bg-cyan-500/10">
                <Briefcase className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-cyan-500/30 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xl font-semibold gradient-text">{exp.title}</h4>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, idx) => (
                        <span key={idx} className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
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
              <h3 className="text-2xl font-bold">Achievements & Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 cursor-hover">
                    <div className="p-3 glass rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
                      <IconComponent className="w-5 h-5 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.year}</p>
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
