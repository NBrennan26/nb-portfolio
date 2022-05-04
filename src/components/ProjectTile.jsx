function ProjectTile({ project }) {
  return (
    <div className="project-tile">
      <div className="project-img-cont">{project.photo}</div>
      <div className="project-data-cont">
        <div className="project-title">{project.title}</div>
        <div className="project-desc">{project.description}</div>
        <div className="project-link">
          <a href={project.link} target="_blank" rel="noreferrer">
            Preview
          </a>
        </div>
        <div className="project-github">
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
