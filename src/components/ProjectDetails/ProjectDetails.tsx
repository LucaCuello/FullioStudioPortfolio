import { Link, useParams } from "react-router-dom";
import { projectsData } from "../../routes/Projects/Data";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./ProjectDetails.css";

export const ProjectDetails = () => {
  const getDetails = (id: string) => {
    return projectsData.find((project) => project.id === id);
  };

  const { id } = useParams();

  const project = getDetails(id!);

  return (
    <div className="project-details-container container">
      <Link to="/projects" className="go-back text">
        go back
      </Link>
      <h2 className="title">{project!.title}</h2>
      <ProjectCard {...project!} isReadMoreVisible={false} />
    </div>
  );
};
