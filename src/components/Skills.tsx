const Skills = () => {
  const skills = [
    "Wireframing and Prototyping",
    "Interaction Design",
    "Visual Design",
    "Branding",
    "Product Design",
    "Video Editing",
    "Motion Graphics"
  ];

  const tools = [
    "Figma",
    "Adobe XD",
    "Adobe Illustrator",
    "Adobe Indesign",
    "Adobe Photoshop",
    "Adobe Premiere Pro",
    "Adobe After Effects"
  ];

  return (
    <section className="mb-16">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Tools</h2>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 