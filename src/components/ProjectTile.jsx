function ProjectTile({ project }) {
  return (
    <div className="project-tile">
      <p>{project.title}</p>
      <p>{project.description}</p>
      <p>{project.link}</p>
      <p>{project.github}</p>
      <p>{project.photo}</p>
    </div>
  );
}

export default ProjectTile;
