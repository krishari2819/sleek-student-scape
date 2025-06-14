
import React, { useRef, useEffect, useState } from 'react';
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
  const [skillBubbles, setSkillBubbles] = useState<SkillBubble[]>([]);
  const [draggedBubble, setDraggedBubble] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize bubble positions
    const initializeBubbles = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      
      const bubbles = skills.map((skill, index) => ({
        ...skill,
        id: `skill-${index}`,
        x: Math.random() * (containerRect.width - 120) + 60,
        y: Math.random() * (containerRect.height - 120) + 60,
        isDragging: false,
        size: Math.max(60, skill.level * 0.8),
        color: categoryColors[skill.category as keyof typeof categoryColors],
      }));
      
      setSkillBubbles(bubbles);
    };

    initializeBubbles();
    
    const handleResize = () => {
      setTimeout(initializeBubbles, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        b.id === bubbleId ? { ...b, isDragging: true } : b
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
        Drag the skill bubbles around! Bubble size represents proficiency level.
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-96 bg-gradient-to-br from-purple-900/5 to-cyan-900/5 rounded-xl overflow-hidden select-none"
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
              className={`w-full h-full rounded-full bg-gradient-to-br ${bubble.color} opacity-80 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white font-semibold text-xs text-center p-2 shadow-lg`}
            >
              <div>
                <div className="text-xs font-bold">{bubble.name}</div>
                <div className="text-xs opacity-90">{bubble.level}%</div>
              </div>
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
