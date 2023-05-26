import { motion } from "framer-motion";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="about-me-container container"
    >
      <h1 className="title">About</h1>
      <div className="about-me-picture"></div>
      <div className="about-me-text-container">
        <p className="about-me-text-eng text">
          I'm a 29 year old argentinian fashion designer based in Buenos Aires. I
          graduated from Universidad de Buenos Aires with a degree in fashion in the
          year 2018.
        </p>
        <p className="about-me-text-esp text">
          Tengo 29 años y soy una diseñadora de indumentaria argentina establecida en
          Buenos Aires. Me recibí de la carrera de diseño de indumentaria en la
          Universidad de Buenos Aires en el año 2018.
        </p>
      </div>
      <div className="about-me-picture"></div>
    </motion.div>
  );
};
