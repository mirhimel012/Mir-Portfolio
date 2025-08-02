import { Progress } from "@material-tailwind/react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SkillsBar from "./SkillsBar";

const Skills = () => {
  return (
    <div className="mb-32 px-4 sm:px-8" id="skills">
      <SectionTitle heading="My Skills" />
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <SkillsBar name="HTML5" value={90} color="orange" />
        <SkillsBar name="CSS3" value={85} color="blue" />
        <SkillsBar name="TailwindCSS" value={90} color="blue" />
        <SkillsBar name="React.js" value={80} color="sky" />
        <SkillsBar name="MongoDB" value={75} color="green" />
        <SkillsBar name="Python" value={70} color="cyan" />
        <SkillsBar name="Firebase" value={60} color="amber" />
        <SkillsBar name="Node.js" value={60} color="lime" />
      </div>
    </div>

  );
};

export default Skills;
