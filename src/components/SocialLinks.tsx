'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SocialLinks = () => {
  const links = [
    { name: 'Behance', href: 'https://www.behance.net', color: 'blue' },
    { name: 'Dribbble', href: 'https://dribbble.com', color: 'pink' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="flex gap-6"
    >
      {links.map((link) => (
        <motion.div
          key={link.name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href={link.href}
            className={`text-gray-600 hover:text-${link.color}-600 transition-colors text-lg font-medium`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SocialLinks; 