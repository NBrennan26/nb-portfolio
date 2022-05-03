function SkillTile({ skill }) {
  return (
    <div className="skill-tile">
      <p>{skill.title}</p>
      <p>{skill.icon}</p>
    </div>
  );
}

export default SkillTile;
