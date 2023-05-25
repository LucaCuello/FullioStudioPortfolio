import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects-container container">
      <h1 className="title">Projects</h1>
      <ProjectCard />
    </div>
  );
};