'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import SocialLinks from '@/components/SocialLinks';
import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 800], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Spring animations for smoother movement
  const smoothY = useSpring(translateY, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  // References for scroll animations
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Text animations for hero section
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  useEffect(() => {
    // Smooth scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 bg-grain">
      <Navbar />

      {/* Hero Section */}
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
              className="font-playfair mb-6 tracking-tight"
              custom={0}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={titleVariants}
            >
              <span className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  PRIJUN KOIRALA
                </motion.span>
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl text-neutral-600 mb-8 font-inter font-light"
              custom={1}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={titleVariants}
            >
              <span className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  Creative Designer
                </motion.span>
              </span>
            </motion.h2>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-8 text-neutral-600 mb-8 font-inter"
              custom={2}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={titleVariants}
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  kprijun@gmail.com
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Stockholm, Sweden
                </motion.p>
              </div>
            </motion.div>

            <SocialLinks />
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

      {/* Main Content */}
      <main className="pb-32">
        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-neutral-600 mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © {new Date().getFullYear()} Prijun Koirala. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}