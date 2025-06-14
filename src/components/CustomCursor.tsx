
import { useEffect, useState, useRef } from 'react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const followerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const mouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      // Update dot position immediately
      setMousePosition({
        x: targetX,
        y: targetY
      });
    };

    const animate = () => {
      // Smooth following animation for the circle
      const speed = 0.15;
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    const mouseEnter = () => setCursorVariant('hover');
    const mouseLeave = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);
    requestRef.current = requestAnimationFrame(animate);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .cursor-hover');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', mouseEnter);
      el.addEventListener('mouseleave', mouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', mouseEnter);
        el.removeEventListener('mouseleave', mouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor circle (follows with delay) */}
      <div
        ref={followerRef}
        className={`cursor-follower transition-all duration-300 ease-out ${
          cursorVariant === 'hover' ? 'scale-150' : 'scale-100'
        }`}
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          border: '2px solid #8b5cf6',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          backdropFilter: 'blur(4px)',
        }}
      />
      {/* Small dot (follows mouse directly) */}
      <div
        className="cursor-dot"
        style={{
          position: 'fixed',
          left: `${mousePosition.x - 4}px`,
          top: `${mousePosition.y - 4}px`,
          width: '8px',
          height: '8px',
          background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />
    </>
  );
};
