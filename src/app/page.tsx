'use client';

import { motion } from 'framer-motion';
import SocialLinks from '@/components/SocialLinks';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-6 tracking-tight">PRIJUN KOIRALA</h1>
          <h2 className="text-2xl text-gray-600 mb-8">Creative Designer</h2>
          
          <div className="flex flex-col sm:flex-row gap-8 text-gray-600 mb-8">
            <div>
              <p>kprijun@gmail.com</p>
              <p>Stockholm, Sweden</p>
            </div>
          </div>

          <SocialLinks />
        </motion.div>
      </motion.header>

      {/* Main Content */}
      <main className="pb-32">
        <Projects />
      </main>
    </div>
  );
}
