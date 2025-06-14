
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Trophy, Code, Users, Calendar } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "AI-Powered Web Analytics Dashboard",
    type: "hackathon",
    category: "Full Stack Development",
    description: "Built a comprehensive analytics dashboard using React, Node.js, and machine learning algorithms for real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "ML", "Dashboard"],
    date: "2024",
    award: "1st Place Winner",
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 2,
    title: "Blockchain Voting System",
    type: "project",
    category: "Blockchain Development",
    description: "Developed a secure, transparent voting system using Ethereum smart contracts and React frontend.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    tags: ["Solidity", "Ethereum", "React", "Web3"],
    date: "2024",
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 3,
    title: "Mobile App for Local Businesses",
    type: "contribution",
    category: "Mobile Development",
    description: "Contributed to an open-source mobile application helping local businesses manage their inventory and customer relationships.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "Open Source"],
    date: "2023",
    links: {
      github: "#"
    }
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    type: "hackathon",
    category: "Real-time Systems",
    description: "24-hour hackathon project: Built a scalable real-time chat application with video calling features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["Socket.io", "WebRTC", "Express", "MongoDB"],
    date: "2023",
    award: "Best Technical Implementation",
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    id: 5,
    title: "E-commerce Platform Optimization",
    type: "contribution",
    category: "Performance Optimization",
    description: "Optimized loading times and user experience for a major e-commerce platform, reducing bounce rate by 40%.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Performance", "React", "GraphQL", "CDN"],
    date: "2023"
  },
  {
    id: 6,
    title: "Machine Learning Model Deployment",
    type: "project",
    category: "AI/ML",
    description: "Deployed machine learning models for predictive analytics using Docker containers and cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
    tags: ["Python", "Docker", "AWS", "TensorFlow"],
    date: "2024",
    links: {
      github: "#"
    }
  }
];

export const GallerySection = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hackathon':
        return <Trophy className="w-4 h-4" />;
      case 'project':
        return <Code className="w-4 h-4" />;
      case 'contribution':
        return <Users className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="gallery" className="section-padding bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            My Contributions & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my hackathon wins, open-source contributions, and personal projects
            that demonstrate my passion for building innovative solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-full p-2">
            <div className="flex space-x-2">
              {[
                { key: 'all', label: 'All Projects', icon: <Code className="w-4 h-4" /> },
                { key: 'hackathon', label: 'Hackathons', icon: <Trophy className="w-4 h-4" /> },
                { key: 'project', label: 'Projects', icon: <Code className="w-4 h-4" /> },
                { key: 'contribution', label: 'Contributions', icon: <Users className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`cursor-hover flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    filter === tab.key
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="cursor-hover group overflow-hidden border-0 shadow-lg glass hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    <div className="flex items-center space-x-1">
                      {getTypeIcon(item.type)}
                      <span className="capitalize">{item.type}</span>
                    </div>
                  </Badge>
                  {item.award && (
                    <Badge className="bg-yellow-500/90 text-white backdrop-blur-sm">
                      <Trophy className="w-3 h-3 mr-1" />
                      {item.award}
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
                  </Badge>
                </div>
                
                {/* Overlay with links */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {item.links?.github && (
                    <a
                      href={item.links.github}
                      className="cursor-hover p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {item.links?.live && (
                    <a
                      href={item.links.live}
                      className="cursor-hover p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold line-clamp-1">{item.title}</h3>
                </div>
                <p className="text-sm text-primary/80 font-medium mb-3">{item.category}</p>
                <p className="text-muted-foreground mb-4 line-clamp-3">{item.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Code className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};
