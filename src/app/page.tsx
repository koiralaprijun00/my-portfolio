'use client';

import HeroSection from '@/components/HeroSection';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <Projects />
      <Contact />
    </main>
  );
}