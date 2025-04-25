'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SocialLinks = () => {
  const links = [
    { name: 'Behance', href: 'https://www.behance.net', color: 'neutral-900' },
    { name: 'Dribbble', href: 'https://dribbble.com', color: 'neutral-900' },
    { name: 'LinkedIn', href: 'https://linkedin.com', color: 'neutral-900' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex gap-8"
    >
      {links.map((link) => (
        <motion.div
          key={link.name}
          variants={itemVariants}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Link 
            href={link.href}
            className="text-neutral-600 hover:text-neutral-900 border-none font-inter text-sm uppercase tracking-wider"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative">
              {link.name}
              <motion.span
                className="absolute left-0 right-0 bottom-0 h-[1px] bg-current origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SocialLinks;