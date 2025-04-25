'use client';

import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}