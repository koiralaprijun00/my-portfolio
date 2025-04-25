'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
  alignment: 'left' | 'right';
}

// Featured projects data
const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Cities for the Youth",
    description: "Municipality level based web platform designed through telling stories in collaboration with the government. Platform is designed for easy replication and effectiveness with an intuitive user interface focused on youth engagement.",
    category: "UX Design",
    image: "/placeholder.jpg",
    slug: "cities-for-youth",
    alignment: 'right'
  },
  {
    id: 2,
    title: "Data Visualization Nepal",
    description: "Visual presentation of Provincial Profile with infographics designed in Nepali Language, illustrating current scenarios through numbers and intuitive visual representations to communicate complex data narratives.",
    category: "Data Visualization",
    image: "/placeholder.jpg",
    slug: "data-visualization-nepal",
    alignment: 'left'
  },
  {
    id: 3,
    title: "Digital Heritage",
    description: "Interactive platform preserving cultural heritage through digital storytelling and immersive experiences. This project combines traditional design elements with modern interaction patterns to create a bridge between past and future.",
    category: "Interactive Design",
    image: "/placeholder.jpg",
    slug: "digital-heritage",
    alignment: 'right'
  }
];

const FeaturedProjectItem = ({ project, index }: { project: FeaturedProject; index: number }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });
  
  // Calculate animation delay based on index
  const delay = 0.1 + index * 0.1;
  
  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center`}
    >
      {/* Image Column */}
      <motion.div 
        className={`relative h-[500px] overflow-hidden ${
          project.alignment === 'left' ? 'lg:order-1' : 'lg:order-2'
        }`}
        initial={{ opacity: 0, x: project.alignment === 'left' ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: project.alignment === 'left' ? -30 : 30 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        <div className="img-hover-zoom h-full w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        {/* Decorative border */}
        <motion.div 
          className="absolute inset-0 border border-neutral-300"
          style={{ 
            top: '15px', 
            left: project.alignment === 'left' ? '15px' : '-15px',
            right: project.alignment === 'left' ? '-15px' : '15px',
            bottom: '-15px',
            zIndex: -1 
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
        />
      </motion.div>

      {/* Content Column */}
      <motion.div 
        className={`${project.alignment === 'left' ? 'lg:order-2' : 'lg:order-1'}`}
        initial={{ opacity: 0, x: project.alignment === 'left' ? 30 : -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: project.alignment === 'left' ? 30 : -30 }}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
      >
        <span className="text-sm font-medium tracking-wider uppercase text-neutral-500 font-inter mb-4 block">
          {project.category}
        </span>
        
        <h3 className="text-3xl md:text-4xl font-playfair mb-6">{project.title}</h3>
        
        <p className="text-neutral-600 mb-8 font-inter leading-relaxed">
          {project.description}
        </p>
        
        <Link href={`/projects/${project.slug}`} passHref>
          <motion.div
            className="inline-flex items-center group cursor-pointer"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="mr-2 font-inter text-neutral-900 border-b border-neutral-300 group-hover:border-neutral-900 transition-colors">
              View Project
            </span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transform transition-transform group-hover:translate-x-1"
            >
              <path 
                d="M10 3L17 10L10 17M17 10H3" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-playfair mb-6">Featured Work</h2>
          <p className="text-lg text-neutral-600 max-w-2xl font-inter">
            Selected projects that showcase my approach to design challenges and creative problem-solving.
          </p>
        </motion.div>

        <div>
          {featuredProjects.map((project, index) => (
            <FeaturedProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;