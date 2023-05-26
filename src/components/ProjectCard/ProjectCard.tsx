import { motion } from "framer-motion";
import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  portrait: string;
  isRightSide: boolean;
};

export const ProjectCard = ({
  title,
  subtitle,
  description,
  portrait,
  isRightSide,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isRightSide ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-200px 0px" }}
      className="card-container"
    >
      <div className="portrait-container" style={{ order: isRightSide ? 1 : -1 }}>
        <img src={portrait} alt="Portrait" className="portrait" />
      </div>
      <div className="card-body-container">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-subtitle">{subtitle}</h3>
        <p className="card-description text">{description}</p>
        <button className="card-button">Read more</button>
      </div>
    </motion.div>
  );
};
