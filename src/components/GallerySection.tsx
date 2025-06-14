
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryItems = [
  {
    id: 1,
    title: "AI-Powered Web Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Blockchain Voting System",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Mobile App for Local Businesses",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "E-commerce Platform Optimization",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Machine Learning Model Deployment",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
  }
];

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalItems = galleryItems.length;
    
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

    const baseTranslate = normalizedDiff * 320;
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
            My Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A visual showcase of my work and experiences
          </p>
        </div>

        {/* Modern Carousel */}
        <div className="relative h-[500px] flex items-center justify-center mb-12">
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

            {/* Carousel Images */}
            <div className="relative flex items-center justify-center h-full">
              {galleryItems.map((item, index) => {
                const style = getCardStyle(index);
                
                return (
                  <div
                    key={item.id}
                    className="absolute cursor-hover transition-all duration-700 ease-out"
                    style={style}
                    onClick={() => goToSlide(index)}
                  >
                    <div className="w-80 h-96 overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2">
          {galleryItems.map((_, index) => (
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
