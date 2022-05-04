import { IconContext } from "react-icons";

function SkillTile({ skill }) {
  return (
    <div className="skill-tile">
      <IconContext.Provider value={{ size: "2em" }}>
        <p>{skill.icon}</p>
        <p>{skill.title}</p>
      </IconContext.Provider>
    </div>
  );
}

export default SkillTile;
