
import { Award, FileText, Star, ExternalLink } from 'lucide-react';

const featuredItems = [
  {
    type: 'certificate',
    title: 'Google Cloud Professional',
    description: 'Cloud Architecture and Development',
    icon: Award,
    color: 'from-blue-500 to-cyan-500',
    link: '#'
  },
  {
    type: 'research',
    title: 'AI in Web Development',
    description: 'Published research paper on AI integration',
    icon: FileText,
    color: 'from-purple-500 to-pink-500',
    link: '#'
  },
  {
    type: 'achievement',
    title: 'Hackathon Winner',
    description: 'University Coding Competition 2024',
    icon: Star,
    color: 'from-yellow-500 to-orange-500',
    link: '#'
  },
  {
    type: 'certificate',
    title: 'AWS Solutions Architect',
    description: 'Associate Level Certification',
    icon: Award,
    color: 'from-green-500 to-teal-500',
    link: '#'
  },
  {
    type: 'research',
    title: 'Machine Learning Applications',
    description: 'Conference paper on ML in fintech',
    icon: FileText,
    color: 'from-indigo-500 to-purple-500',
    link: '#'
  },
  {
    type: 'achievement',
    title: 'Open Source Contributor',
    description: '50+ contributions to major projects',
    icon: Star,
    color: 'from-pink-500 to-rose-500',
    link: '#'
  }
];

export const FeaturedSection = () => {
  return (
    <section id="featured" className="section-padding bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Featured Highlights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Key achievements, certifications, and research work that showcase my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="group glass p-8 rounded-2xl hover:scale-105 transition-all duration-500 cursor-hover relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 glass rounded-full bg-gradient-to-br ${item.color} bg-opacity-10`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors cursor-hover" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${item.color} bg-opacity-10 text-transparent bg-clip-text`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
