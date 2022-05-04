import { IconContext } from "react-icons";

function SkillTile({ skill }) {
  return (
    <div className="skill-tile">
      <IconContext.Provider value={{ size: "2em" }}>
        <div className="skill-icon-cont">
          {typeof skill.icon != "string" ? (
            skill.icon
          ) : (
            <span className="skill-span">{skill.icon}</span>
          )}
        </div>
        <span className="skill-title">{skill.title}</span>
      </IconContext.Provider>
    </div>
  );
}

export default SkillTile;
