import { motion } from "framer-motion";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { projectsData } from "./Data";
import "./Projects.css";

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="projects-container container"
    >
      <h2 className="title">Projects</h2>
      <div className="projects-card-container">
        {projectsData.map((props, index) => (
          <ProjectCard {...props} key={index} />
        ))}
      </div>
    </motion.div>
  );
};
