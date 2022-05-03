import SkillTile from "./SkillTile";
import {
  frontendSkills,
  backendSkills,
  otherSkills,
} from "../features/skills/skillData";

function Skills() {
  return (
    <section className="skills-cont" id="skills">
      <div className="skill-block">
        <span className="skill-block-title">Front-End Skills</span>
        <div className="skill-block-cont">
          {frontendSkills.map((skill) => (
            <SkillTile key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
      <div className="skill-block">
        <span className="skill-block-title">Back-End Skills</span>
        <div className="skill-block-cont">
          {backendSkills.map((skill) => (
            <SkillTile key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
      <div className="skill-block">
        <span className="skill-block-title">Other Skills</span>
        <div className="skill-block-cont">
          {otherSkills.map((skill) => (
            <SkillTile key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
