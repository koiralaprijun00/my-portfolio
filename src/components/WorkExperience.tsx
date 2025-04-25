'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WorkItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
}

const WorkItem = ({ title, company, period, description, index }: WorkItemProps) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.1 * index,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="mb-12 relative pl-6 border-l border-neutral-200"
    >
      <motion.div 
        className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-neutral-900"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
      />
      
      <h3 className="text-xl font-medium font-playfair">{title}</h3>
      <p className="text-neutral-600 mt-1 mb-3 font-inter text-sm">
        {company} • {period}
      </p>
      <p className="text-neutral-700 leading-relaxed font-inter text-sm">{description}</p>
    </motion.div>
  );
};

const WorkExperience = () => {
  const experienceRef = useRef(null);
  const isInView = useInView(experienceRef, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Creative Designer",
      company: "StoryCycle, Nepal",
      period: "Jan 2017 - Jul 2021",
      description: "As the only designer, I took the lead from strategy to the final output collaborating with the team. Involved in strategy, research and wireframing the User Interface and experience and come up with a unique selling point for websites. Designed logos and brand identities in early days for different organizations - national and international."
    },
    {
      title: "Data Visualization, Infographics",
      company: "Province 01, Government of Nepal",
      period: "2020",
      description: "Worked with State 1 Federal government to create infographics and visual presentation of Provincial Profile. The visuals are designed in Nepali Language and illustrates the current scenario in numbers of Province 01, which lies on the eastern part of Nepal."
    },
    {
      title: "Cities for the Youth, 2021",
      company: "US Embassy Nepal",
      period: "2021",
      description: "Municipality level based web platform designed through telling stories in collaboration with the government. Designed and prototyped in figma including UX writing for the entire website. Platform is designed in such a way that whole process can be replicated easily and effectively."
    }
  ];

  return (
    <div ref={experienceRef}>
      <motion.h3 
        className="text-2xl font-playfair mb-8 horizontal-line inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h3>
      
      <div>
        {experiences.map((exp, index) => (
          <WorkItem
            key={index}
            index={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;