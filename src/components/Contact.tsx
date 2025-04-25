'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const socialLinks = [
  { name: 'Behance', href: 'https://www.behance.net', color: 'blue' },
  { name: 'Dribbble', href: 'https://dribbble.com', color: 'pink' }
];

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <motion.p 
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I&apos;m always open to new opportunities and collaborations.
          Feel free to reach out if you&apos;d like to work together!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 mb-12"
        >
          <a 
            href="mailto:kprijun@gmail.com"
            className="block text-xl hover:text-accent transition-colors"
          >
            kprijun@gmail.com
          </a>
          <p className="text-gray-600">Stockholm, Sweden</p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-8"
        >
          {socialLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className={`text-lg font-medium text-gray-600 hover:text-accent transition-colors`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;