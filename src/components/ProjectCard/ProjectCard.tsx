import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

type ProjectCardProps = {
  id: string;
  title: string;
  subtitle: string;
  description: Array<string>;
  portrait: string;
  isRightSide: boolean;
  isDetailed: boolean;
};

export const ProjectCard = ({
  id,
  title,
  subtitle,
  description,
  portrait,
  isRightSide,
  isDetailed,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isRightSide ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      className="card-container"
      style={{ gap: isRightSide ? "0px" : "20px" }}
    >
      <div
        className="portrait-container"
        style={{
          order: isRightSide ? 1 : -1,
          height: description.length >= 2 ? "710px" : "500px",
        }}
      >
        <img src={portrait} alt="Portrait" className="portrait" />
      </div>
      <div className="card-body-container">
        {isDetailed ? <h2 className="card-title">{title}</h2> : null}
        <h3 className="card-subtitle" style={{ paddingRight: isRightSide ? "20px" : "0px" }}>
          {subtitle}
        </h3>
        <div className="text-container">
          {description.map((paragraph, index) => (
            <p key={index} className="card-description text" style={{ paddingRight: isRightSide ? "20px" : "0px" }}>
              {paragraph}
            </p>
          ))}
        </div>
        {isDetailed ? (
          <Link
            to={id}
            className="card-button"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Read more
          </Link>
        ) : null}
      </div>
    </motion.div>
  );
};
