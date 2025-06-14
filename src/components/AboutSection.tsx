
import React from 'react';
import { GraduationCap, MapPin, Calendar, Code2 } from 'lucide-react';
import { InteractiveSkills } from './InteractiveSkills';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate computer science student with a drive for creating
            innovative solutions and exploring cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-lg font-semibold">Education</h3>
              </div>
              <p className="text-muted-foreground">
                Currently pursuing B.Tech in Computer Science & Engineering at
                Chandigarh University
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-cyan-500 mr-3" />
                <h3 className="text-lg font-semibold">Location</h3>
              </div>
              <p className="text-muted-foreground">Chandigarh, India</p>
            </div>

            <div className="glass p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold">Year</h3>
              </div>
              <p className="text-muted-foreground">3rd Year (2022-2026)</p>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Personal Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a dedicated computer science student with a passion for
                full-stack development and emerging technologies. My journey in
                tech began with curiosity about how digital solutions can solve
                real-world problems.
              </p>
              <p>
                Currently in my third year at Chandigarh University, I've been
                actively building projects that combine innovative design with
                robust functionality. I believe in continuous learning and
                staying updated with the latest industry trends.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open-source projects, or brainstorming the next
                big idea that could make a difference.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Skills Section */}
        <InteractiveSkills />
      </div>
    </section>
  );
};
