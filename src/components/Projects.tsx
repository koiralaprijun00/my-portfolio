import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cities for the Youth",
    description: "Municipality level based web platform designed through telling stories in collaboration with the government. Platform is designed for easy replication and effectiveness.",
    category: "UX Design",
    images: Array(5).fill('/placeholder.jpg')
  },
  {
    id: 2,
    title: "Data Visualization Nepal",
    description: "Visual presentation of Provincial Profile with infographics designed in Nepali Language, illustrating current scenarios through numbers.",
    category: "Data Visualization",
    images: Array(5).fill('/placeholder.jpg')
  },
  {
    id: 3,
    title: "Our Dream City",
    description: "Interactive platform showcasing urban development vision through immersive storytelling and user engagement.",
    category: "UI/UX Design",
    images: Array(5).fill('/placeholder.jpg')
  },
  {
    id: 4,
    title: "Ride Through Sindhuligadhi",
    description: "Brand identity and visual storytelling project capturing the essence of historical journey.",
    category: "Brand Identity",
    images: Array(5).fill('/placeholder.jpg')
  },
  {
    id: 5,
    title: "Digital Heritage",
    description: "Interactive platform preserving cultural heritage through digital storytelling and immersive experiences.",
    category: "Interactive Design",
    images: Array(5).fill('/placeholder.jpg')
  },
  {
    id: 6,
    title: "Urban Mobility",
    description: "Transportation solution design focusing on user experience and sustainable urban mobility.",
    category: "UX Research",
    images: Array(5).fill('/placeholder.jpg')
  },
  {
    id: 7,
    title: "EcoVision",
    description: "Environmental awareness campaign with interactive data visualization and engagement tools.",
    category: "Interactive Design",
    images: Array(5).fill('/placeholder.jpg')
  },
  {
    id: 8,
    title: "Cultural Connect",
    description: "Digital platform bridging cultural gaps through interactive storytelling and user engagement.",
    category: "UI/UX Design",
    images: Array(5).fill('/placeholder.jpg')
  },
  {
    id: 9,
    title: "Smart City Dashboard",
    description: "Real-time data visualization platform for urban infrastructure and citizen services.",
    category: "Data Visualization",
    images: Array(5).fill('/placeholder.jpg')
  },
  {
    id: 10,
    title: "Heritage Walks",
    description: "Interactive guide system for cultural heritage sites with augmented reality features.",
    category: "Interactive Design",
    images: Array(5).fill('/placeholder.jpg')
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-[300px] overflow-hidden">
        <motion.div
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.images[currentImageIndex]}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Image Navigation */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6"
      >
        <span className="text-sm font-medium text-blue-600">{project.category}</span>
        <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
        <p className="mt-2 text-gray-600 line-clamp-2">{project.description}</p>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-600">A collection of my selected works</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 