'use client';

import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Creative Designer",
    company: "StoryCycle, Nepal",
    period: "Jan 2017 - Jul 2021",
    description: "As the only designer, I took the lead from strategy to the final output collaborating with the team. Involved in strategy, research and wireframing the User Interface and experience and come up with a unique selling point for websites."
  },
  {
    title: "Data Visualization, Infographics",
    company: "Province 01, Government of Nepal",
    period: "2020",
    description: "Worked with State 1 Federal government to create infographics and visual presentation of Provincial Profile. The visuals are designed in Nepali Language and illustrates the current scenario in numbers."
  },
  {
    title: "Cities for the Youth, 2021",
    company: "US Embassy Nepal",
    period: "2021",
    description: "Municipality level based web platform designed through telling stories in collaboration with the government. Designed and prototyped in figma including UX writing for the entire website."
  }
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <motion.p 
          className="text-lg text-gray-600 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I&apos;m a Creative Designer based in Stockholm, Sweden, specializing in UI/UX design, 
          branding, and interactive experiences. With a background in visual design and a 
          passion for user-centered solutions, I create digital experiences that are both 
          beautiful and functional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                className="border-l-2 border-gray-200 pl-6 relative"
              >
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2" />
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <p className="text-gray-600 mt-1">{exp.company} • {exp.period}</p>
                <p className="text-gray-700 mt-3 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;