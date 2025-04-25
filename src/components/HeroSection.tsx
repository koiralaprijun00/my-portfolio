'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  
  const translateY = useTransform(scrollY, [0, 800], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Spring animations for smoother movement
  const smoothY = useSpring(translateY, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <motion.header
      ref={heroRef}
      style={{
        scale: smoothScale,
        opacity: smoothOpacity,
        y: smoothY
      }}
      className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden relative"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold mb-6 tracking-tight"
          >
            PRIJUN KOIRALA
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-neutral-600 mb-8"
          >
            Creative Designer
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 text-neutral-600 mb-8"
          >
            <div>
              <p>kprijun@gmail.com</p>
              <p>Stockholm, Sweden</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <motion.div 
          className="w-6 h-9 border border-neutral-400 rounded-full flex justify-center items-start p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div className="w-1 h-1.5 bg-neutral-500 rounded-full" />
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default HeroSection;