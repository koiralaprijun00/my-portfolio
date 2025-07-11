'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const HeroSection = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false });
  const { scrollY } = useScroll();
  
  const translateY = useTransform(scrollY, [0, 800], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Spring animations for smoother movement
  const smoothY = useSpring(translateY, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <div className="relative min-h-screen">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-2xl"
            >
              <h2 className="text-2xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                I&apos;m a Creative Designer based in Stockholm, Sweden, specializing in UI/UX design, 
                branding, and interactive experiences. With a background in visual design and a 
                passion for user-centered solutions, I create digital experiences that are both 
                beautiful and functional.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* Scroll indicator - only visible when hero section is in view */}
      <motion.div 
        className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 1, y: 0 }}
        animate={{ 
          opacity: isHeroInView ? 1 : 0,
          y: isHeroInView ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="w-6 h-9 border border-neutral-400 rounded-full flex justify-center items-start p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div className="w-1 h-1.5 bg-neutral-500 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;