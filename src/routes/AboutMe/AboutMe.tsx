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
          I am Paula Fullio, an argentinian fashion designer driven by a passion for haute couture and impeccable
          design. At the core of my expertise lies the art of designing and crafting exquisite women's apparel.
        </p>
        <p className="about-me-text-eng text">
          I have a profound affinity for feminine designs that capture the essence of grace and refinement. Whether it
          is through delicate embroideries, avant-garde textures, or experimenting with unconventional materials, I
          always strive to add that special touch of artistry to my creations.
        </p>
        <p className="about-me-text-eng text">
          I perceive myself as a visual raconteur, entrusted with the task of articulating a brand's narrative through
          my product designs. I believe in working closely with each brand, ensuring that my creations align seamlessly
          with their vision and values.
        </p>
        <p className="about-me-text-eng text">
          With an artist's eye for detail, I am eager to continue weaving intricate tales through my constant
          exploration and curiosity. With an unwavering dedication to my craft and a genuine desire to make a positive
          impact, I am enthusiastic about continuously contributing to the fashion industry and creating garments that
          are not only aesthetically captivating but also tell a meaningful story.
        </p>
      </div>
    </motion.div>
  );
};
