import { motion } from "framer-motion";
import "./Home.css";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="homeimage-container"
    ></motion.div>
  );
};
