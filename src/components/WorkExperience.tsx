interface WorkItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const WorkItem = ({ title, company, period, description }: WorkItemProps) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p className="text-gray-600 mb-2">
      {company} • {period}
    </p>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

const WorkExperience = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
      <div>
        <WorkItem
          title="Creative Designer"
          company="StoryCycle, Nepal"
          period="Jan 2017 - Jul 2021"
          description="As the only designer, I took the lead from strategy to the final output collaborating with the team. Involved in strategy, research and wireframing the User Interface and experience and come up with a unique selling point for websites. Designed logos and brand identities in early days for different organizations - national and international."
        />
        <WorkItem
          title="Data Visualization, Infographics"
          company="Province 01, Government of Nepal"
          period="2020"
          description="Worked with State 1 Federal government to create infographics and visual presentation of Provincial Profile. The visuals are designed in Nepali Language and illustrates the current scenario in numbers of Province 01, which lies on the eastern part of Nepal."
        />
        <WorkItem
          title="Cities for the Youth, 2021"
          company="US Embassy Nepal"
          period="2021"
          description="Municipality level based web platform designed through telling stories in collaboration with the government. Designed and prototyped in figma including UX writing for the entire website. Platform is designed in such a way that whole process can be replicated easily and effectively."
        />
      </div>
    </section>
  );
};

export default WorkExperience; 