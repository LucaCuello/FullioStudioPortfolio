import { IoIosArrowRoundBack } from "react-icons/io";
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

  const renderSwitch = (id: string) => {
    switch (id) {
      case "moodindigo":
        return (
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo
            aspernatur soluta non odit temporibus? Explicabo sit blanditiis error
            nisi!
          </p>
        );
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
      <ProjectCard {...project!} isDetailed={false} />
      {/* {renderSwitch(project!.id)} */}

      <div className="images-container">
        <div className="image-container-normal">
          <img
            src="/src/assets/Previews/catalina.jpg"
            className="image"
            alt="image"
            draggable={false}
          />
        </div>
        <div className="image-container-normal">
          <img
            src="/src/assets/Previews/catalina.jpg"
            className="image"
            alt="image"
            draggable={false}
          />
        </div>
        <div className="image-container-normal">
          <img
            src="/src/assets/Previews/catalina.jpg"
            className="image"
            alt="image"
            draggable={false}
          />
        </div>
        <div className="image-container-normal">
          <img
            src="/src/assets/Previews/catalina.jpg"
            className="image"
            alt="image"
            draggable={false}
          />
        </div>
        <div className="image-container-large">
          <img
            src="/src/assets/Previews/catalina.jpg"
            className="image"
            alt="image"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
