import { motion } from "framer-motion";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import "./Contact.css";

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="contact-container container"
    >
      <h2 className="title">Contact</h2>
      <div className="contact-form">
        <div className="contact-body">
          <h2 className="title contact-title">Contact me</h2>
          <p className="text">Please email me directly to:</p>
          <p className="text">fulliostudio@gmail.com</p>
          <p className="text">My socials:</p>
          <div className="contact-social social-links">
            <a href="https://www.linkedin.com/in/paula-fullio/" target="_blank">
              <CiLinkedin />
            </a>
            <a href="https://www.instagram.com/paufullio/" target="_blank">
              <CiInstagram />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </motion.div>
  );
};
