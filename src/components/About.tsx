'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import WorkExperience from '@/components/WorkExperience';

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, amount: 0.2 });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] overflow-hidden"
        >
          <Image
            src="/placeholder.jpg"
            alt="Prijun Koirala"
            fill
            className="object-cover object-center"
          />
          <motion.div 
            className="absolute inset-0 border border-neutral-300 -m-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h2 
            className="text-4xl font-playfair mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            About Me
          </motion.h2>
          
          <motion.div
            className="space-y-6 text-neutral-700 font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>
              I&apos;m a creative designer with a passion for crafting immersive digital experiences 
              that bridge the gap between functionality and aesthetics. With over 5 years of experience
              in UI/UX design, branding, and interactive media, I specialize in creating 
              user-centered solutions that both engage and inspire.
            </p>
            
            <p>
              My approach combines thoughtful research, strategic thinking, and creative exploration 
              to develop designs that not only solve problems but also create memorable experiences. 
              I believe in the power of storytelling through design and strive to create work that 
              resonates on both emotional and functional levels.
            </p>
            <p>
              When I&apos;m not designing, you can find me exploring the streets of Stockholm with my camera, 
              experimenting with new cooking recipes, or diving into the latest design trends and technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12"
          >
            <WorkExperience />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;