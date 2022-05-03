import ProjectTile from "./ProjectTile";
import { projects } from "../features/projects/projectData";

function Projects() {
  return (
    <section className="projects-cont" id="projects">
      {projects.map((project) => (
        <ProjectTile key={project.id} project={project} />
      ))}
    </section>
  );
}

export default Projects;
