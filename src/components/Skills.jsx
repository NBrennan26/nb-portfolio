import SkillTile from "./SkillTile";
import {
  frontendSkills,
  backendSkills,
  otherSkills,
} from "../features/skills/skillData";

function Skills() {
  return (
    <section className="skills-cont" id="skills">
      {frontendSkills.map((skill) => (
        <SkillTile key={skill.id} skill={skill} />
      ))}{" "}
      {backendSkills.map((skill) => (
        <SkillTile key={skill.id} skill={skill} />
      ))}{" "}
      {otherSkills.map((skill) => (
        <SkillTile key={skill.id} skill={skill} />
      ))}
    </section>
  );
}

export default Skills;
