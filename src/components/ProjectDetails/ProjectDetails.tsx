import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../../routes/Projects/Data";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./ProjectDetails.css";
import { Catalina } from "./Projects/Catalina/Catalina";
import { Editorials } from "./Projects/Editorials/Editorials";
import { FeteStore } from "./Projects/FeteStore/FeteStore";
import { MoodIndigo } from "./Projects/MoodIndigo/MoodIndigo";

export const ProjectDetails = () => {
  const getDetails = (id: string) => {
    return projectsData.find((project) => project.id === id);
  };

  const { id } = useParams();

  const project = getDetails(id!);

  const renderSwitch = (id: string) => {
    switch (id) {
      case "moodindigo":
        return <MoodIndigo />;
      case "fetestore":
        return <FeteStore />;
      case "editorials":
        return <Editorials />;
      case "catalinadearagon":
        return <Catalina />;

      // default:
      //   <p className="text">Default</p>;
      //   break;
    }
  };

  return (
    <div className="project-details-container container">
      <Link to="/projects" className="go-back text">
        <IoIosArrowRoundBack />
        go back
      </Link>
      <h2 className="title">{project!.title}</h2>
      <ProjectCard
        {...project!}
        isDetailed={false}
        portrait={project!.secondaryPortrait}
      />
      <div className="images-container">{renderSwitch(project!.id)}</div>
    </div>
  );
};
