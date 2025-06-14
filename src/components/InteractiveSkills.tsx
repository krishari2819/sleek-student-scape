
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Code2 } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillBubble extends Skill {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  isDragging: boolean;
  size: number;
  color: string;
}

const skills = [
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "React", level: 88, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Python", level: 75, category: "Backend" },
  { name: "Java", level: 70, category: "Backend" },
  { name: "MongoDB", level: 82, category: "Database" },
  { name: "PostgreSQL", level: 78, category: "Database" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "AWS", level: 65, category: "Cloud" },
  { name: "Firebase", level: 80, category: "Cloud" },
];

const categoryColors = {
  Frontend: 'from-blue-500 to-cyan-500',
  Backend: 'from-purple-500 to-pink-500',
  Database: 'from-green-500 to-teal-500',
  Tools: 'from-yellow-500 to-orange-500',
  Cloud: 'from-indigo-500 to-purple-500',
};

export const InteractiveSkills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [skillBubbles, setSkillBubbles] = useState<SkillBubble[]>([]);
  const [draggedBubble, setDraggedBubble] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const initializeBubbles = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    
    const bubbles = skills.map((skill, index) => {
      // Start bubbles in a loose cluster around the center
      const angle = (index / skills.length) * Math.PI * 2;
      const radius = 80 + Math.random() * 40;
      
      return {
        ...skill,
        id: `skill-${index}`,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        isDragging: false,
        size: Math.max(50, Math.min(100, skill.level * 0.9)),
        color: categoryColors[skill.category as keyof typeof categoryColors],
      };
    });
    
    setSkillBubbles(bubbles);
  }, []);

  const applyPhysics = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    
    setSkillBubbles(prev => {
      const updated = prev.map(bubble => {
        if (bubble.isDragging) return bubble;

        let newVx = bubble.vx;
        let newVy = bubble.vy;
        let newX = bubble.x;
        let newY = bubble.y;

        // Apply gravity towards center
        const centerX = containerRect.width / 2;
        const centerY = containerRect.height / 2;
        const dx = centerX - bubble.x;
        const dy = centerY - bubble.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0) {
          const gravity = 0.2;
          newVx += (dx / distance) * gravity;
          newVy += (dy / distance) * gravity;
        }

        // Bubble collision and attraction
        prev.forEach(other => {
          if (other.id === bubble.id || other.isDragging) return;
          
          const odx = other.x - bubble.x;
          const ody = other.y - bubble.y;
          const odist = Math.sqrt(odx * odx + ody * ody);
          const minDist = (bubble.size + other.size) / 2 + 5;
          
          if (odist < minDist && odist > 0) {
            // Repulsion when too close
            const repulsion = 0.5;
            newVx -= (odx / odist) * repulsion;
            newVy -= (ody / odist) * repulsion;
          } else if (odist < minDist + 30 && odist > 0) {
            // Attraction when nearby
            const attraction = 0.1;
            newVx += (odx / odist) * attraction;
            newVy += (ody / odist) * attraction;
          }
        });

        // Apply friction
        newVx *= 0.95;
        newVy *= 0.95;

        // Update position
        newX += newVx;
        newY += newVy;

        // Boundary collision
        const radius = bubble.size / 2;
        if (newX - radius < 0) {
          newX = radius;
          newVx = Math.abs(newVx) * 0.8;
        }
        if (newX + radius > containerRect.width) {
          newX = containerRect.width - radius;
          newVx = -Math.abs(newVx) * 0.8;
        }
        if (newY - radius < 0) {
          newY = radius;
          newVy = Math.abs(newVy) * 0.8;
        }
        if (newY + radius > containerRect.height) {
          newY = containerRect.height - radius;
          newVy = -Math.abs(newVy) * 0.8;
        }

        return {
          ...bubble,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
        };
      });

      return updated;
    });
  }, []);

  useEffect(() => {
    initializeBubbles();
    
    const handleResize = () => {
      setTimeout(initializeBubbles, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initializeBubbles]);

  useEffect(() => {
    const animate = () => {
      applyPhysics();
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [applyPhysics]);

  const handleMouseDown = (e: React.MouseEvent, bubbleId: string) => {
    e.preventDefault();
    const bubble = skillBubbles.find(b => b.id === bubbleId);
    if (!bubble) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    setDraggedBubble(bubbleId);
    setDragOffset({
      x: e.clientX - rect.left - bubble.x,
      y: e.clientY - rect.top - bubble.y,
    });

    setSkillBubbles(prev => 
      prev.map(b => 
        b.id === bubbleId ? { ...b, isDragging: true, vx: 0, vy: 0 } : b
      )
    );
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedBubble || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const bubble = skillBubbles.find(b => b.id === draggedBubble);
    if (!bubble) return;

    const newX = Math.max(bubble.size / 2, Math.min(rect.width - bubble.size / 2, e.clientX - rect.left - dragOffset.x));
    const newY = Math.max(bubble.size / 2, Math.min(rect.height - bubble.size / 2, e.clientY - rect.top - dragOffset.y));

    setSkillBubbles(prev =>
      prev.map(b =>
        b.id === draggedBubble ? { ...b, x: newX, y: newY } : b
      )
    );
  };

  const handleMouseUp = () => {
    if (!draggedBubble) return;

    setSkillBubbles(prev =>
      prev.map(b =>
        b.id === draggedBubble ? { ...b, isDragging: false } : b
      )
    );

    setDraggedBubble(null);
    setDragOffset({ x: 0, y: 0 });
  };

  return (
    <div className="glass p-8 rounded-2xl">
      <div className="flex items-center mb-8">
        <div className="p-3 glass rounded-full mr-4 bg-blue-500/10">
          <Code2 className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="text-2xl font-bold">Interactive Skills</h3>
      </div>
      
      <div className="mb-4 text-sm text-muted-foreground">
        Drag the skill bubbles around! They'll stick together with gravity. Bubble fill represents proficiency level.
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-96 bg-gradient-to-br from-purple-900/5 to-cyan-900/5 rounded-xl overflow-hidden select-none border border-purple-200/20"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {skillBubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`absolute cursor-move transition-all duration-200 ${
              bubble.isDragging ? 'scale-110 z-10' : 'hover:scale-105'
            }`}
            style={{
              left: bubble.x - bubble.size / 2,
              top: bubble.y - bubble.size / 2,
              width: bubble.size,
              height: bubble.size,
            }}
            onMouseDown={(e) => handleMouseDown(e, bubble.id)}
          >
            <div
              className={`relative w-full h-full rounded-full bg-gradient-to-br ${bubble.color} hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white font-semibold text-xs text-center p-2 shadow-lg border-2 border-white/20`}
              style={{
                background: `conic-gradient(from 0deg, hsl(var(--primary)) 0%, hsl(var(--primary)) ${bubble.level}%, rgba(255,255,255,0.2) ${bubble.level}%, rgba(255,255,255,0.2) 100%), linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
            >
              <div className="relative z-10">
                <div className="text-xs font-bold drop-shadow-sm">{bubble.name}</div>
                <div className="text-xs opacity-90 drop-shadow-sm">{bubble.level}%</div>
              </div>
              
              {/* Progress fill overlay */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(
                    from -90deg,
                    rgba(255,255,255,0.3) 0%,
                    rgba(255,255,255,0.3) ${bubble.level}%,
                    transparent ${bubble.level}%,
                    transparent 100%
                  )`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(categoryColors).map(([category, color]) => (
          <div key={category} className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${color}`} />
            <span className="text-sm text-muted-foreground">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
