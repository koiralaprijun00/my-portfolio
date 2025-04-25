'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Only show custom cursor on non-touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          backgroundColor: 'white',
          borderRadius: '50%',
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          width: isHovering ? 40 : 8,
          height: isHovering ? 40 : 8,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 150,
          damping: 15
        }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        @media (pointer: coarse) {
          body {
            cursor: auto;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;