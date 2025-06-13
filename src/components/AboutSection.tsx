
import { GraduationCap, Trophy, Briefcase, Code2 } from 'lucide-react';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 
  'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'Firebase'
];

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Tech Company',
    period: '2024',
    description: 'Developed responsive web applications using React and TypeScript'
  },
  {
    title: 'Open Source Contributor',
    company: 'Various Projects',
    period: '2023 - Present',
    description: 'Contributing to open source projects and building community tools'
  }
];

const achievements = [
  'Dean\'s List - Academic Excellence',
  'Winner - University Hackathon 2024',
  'Published Research Paper on AI/ML',
  'Google Cloud Certified'
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions and constantly learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Education */}
            <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-hover">
              <div className="flex items-center mb-6">
                <div className="p-3 glass rounded-full mr-4">
                  <GraduationCap className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold gradient-text">B.Tech Computer Science & Engineering</h4>
                  <p className="text-muted-foreground">Chandigarh University • 2022-2026</p>
                  <p className="text-sm text-muted-foreground mt-2">Current: 3rd Year • CGPA: 8.5/10</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-hover">
              <div className="flex items-center mb-6">
                <div className="p-3 glass rounded-full mr-4">
                  <Briefcase className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-purple-500/30 pl-6">
                    <h4 className="text-lg font-semibold gradient-text">{exp.title}</h4>
                    <p className="text-muted-foreground">{exp.company} • {exp.period}</p>
                    <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-hover">
              <div className="flex items-center mb-6">
                <div className="p-3 glass rounded-full mr-4">
                  <Code2 className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="glass p-3 rounded-lg text-center hover:scale-105 transition-all duration-300 cursor-hover">
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-hover">
              <div className="flex items-center mb-6">
                <div className="p-3 glass rounded-full mr-4">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-3" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
