
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Trophy, Code, Users, Calendar, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryItems = [
  {
    id: 1,
    title: "AI-Powered Web Analytics Dashboard",
    type: "hackathon",
    category: "Full Stack Development",
    description: "Built a comprehensive analytics dashboard using React, Node.js, and machine learning algorithms for real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Performance", "React", "GraphQL", "CDN"],
    date: "2023"
  },
  {
    id: 6,
    title: "Machine Learning Model Deployment",
    type: "project",
    category: "AI/ML",
    description: "Deployed machine learning models for predictive analytics using Docker containers and cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
    tags: ["Python", "Docker", "AWS", "TensorFlow"],
    date: "2024",
    links: {
      github: "#"
    }
  }
];

export const GallerySection = () => {
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [filteredItems.length]);

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

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalItems = filteredItems.length;
    
    let normalizedDiff = diff;
    if (diff > totalItems / 2) normalizedDiff = diff - totalItems;
    if (diff < -totalItems / 2) normalizedDiff = diff + totalItems;

    const isActive = normalizedDiff === 0;
    const absNormalizedDiff = Math.abs(normalizedDiff);
    
    if (absNormalizedDiff > 2) {
      return {
        transform: 'translateX(0) scale(0.7)',
        opacity: 0,
        zIndex: 1,
        filter: 'blur(3px)',
      };
    }

    const baseTranslate = normalizedDiff * 280;
    const scale = isActive ? 1 : 0.8 - (absNormalizedDiff * 0.1);
    const opacity = isActive ? 1 : 0.6 - (absNormalizedDiff * 0.2);
    const zIndex = isActive ? 10 : 10 - absNormalizedDiff;
    const blur = isActive ? 0 : absNormalizedDiff * 1.5;

    return {
      transform: `translateX(${baseTranslate}px) scale(${scale})`,
      opacity: Math.max(opacity, 0.3),
      zIndex,
      filter: `blur(${blur}px)`,
    };
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
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
        <div className="flex justify-center mb-16">
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
                  onClick={() => {
                    setFilter(tab.key);
                    setCurrentIndex(0);
                  }}
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

        {/* Modern Carousel */}
        <div className="relative h-[600px] flex items-center justify-center mb-12">
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              className="cursor-hover absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass border-0 bg-background/10 hover:bg-background/20 backdrop-blur-md"
              size="icon"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              onClick={nextSlide}
              className="cursor-hover absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass border-0 bg-background/10 hover:bg-background/20 backdrop-blur-md"
              size="icon"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Carousel Cards */}
            <div className="relative flex items-center justify-center h-full">
              {filteredItems.map((item, index) => {
                const style = getCardStyle(index);
                const isActive = index === currentIndex;
                
                return (
                  <div
                    key={item.id}
                    className="absolute cursor-hover transition-all duration-700 ease-out"
                    style={style}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Card className="w-80 h-96 overflow-hidden border-0 shadow-2xl glass hover:shadow-3xl transition-all duration-500 group">
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Overlay with badges */}
                        <div className="absolute top-4 left-4 flex items-center space-x-2">
                          <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                            <div className="flex items-center space-x-1">
                              {getTypeIcon(item.type)}
                              <span className="capitalize text-xs">{item.type}</span>
                            </div>
                          </Badge>
                          {item.award && (
                            <Badge className="bg-yellow-500/90 text-white backdrop-blur-sm">
                              <Trophy className="w-3 h-3 mr-1" />
                              <span className="text-xs">{item.award}</span>
                            </Badge>
                          )}
                        </div>

                        <div className="absolute top-4 right-4">
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="text-xs">{item.date}</span>
                          </Badge>
                        </div>
                        
                        {/* Hover overlay with links */}
                        {isActive && (
                          <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                            hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                          }`}>
                            {item.links?.github && (
                              <a
                                href={item.links.github}
                                className="cursor-hover p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
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
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="w-5 h-5 text-white" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                      
                      <CardContent className="p-4 h-36 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold line-clamp-1 mb-1">{item.title}</h3>
                          <p className="text-sm text-primary/80 font-medium mb-2">{item.category}</p>
                          <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mt-2">
                          {item.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                              {tag}
                            </Badge>
                          ))}
                          {item.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs px-2 py-0.5">
                              +{item.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2">
          {filteredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`cursor-hover w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
