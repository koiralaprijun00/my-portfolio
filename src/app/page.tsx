'use client';

import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}