import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../../routes/Projects/Data";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./ProjectDetails.css";
import { ArtFashion } from "./Projects/ArtFashion/ArtFashion";
import { CalvinKlein } from "./Projects/CalvinKlein/CalvinKlein";
import { Catalina } from "./Projects/Catalina/Catalina";
import { Editorials } from "./Projects/Editorials/Editorials";
import { FeteStore } from "./Projects/FeteStore/FeteStore";
import { Graduation } from "./Projects/Graduation/Graduation";
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
      case "graduationcollection":
        return <Graduation />;
      case "artfashion":
        return <ArtFashion />;
      case "calvinklein":
        return <CalvinKlein />;

      // default:
      //   <p className="text">Default</p>;
      //   break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="project-details-container container"
    >
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
    </motion.div>
  );
};
