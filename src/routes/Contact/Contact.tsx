import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container container">
      <h2 className="title">Contact</h2>
      <div className="contact-form">
        <div className="contact-body">
          <h2 className="title contact-title">Contact me</h2>
          <p className="text">Please email me directly to:</p>
          <p className="text">fulliostudio@gmail.com</p>
          <p className="text">My socials:</p>
          <div className="contact-social social-links">
            <a href="https://www.facebook.com/paula.fullio" target="_blank">
              <CiFacebook />
            </a>
            <a href="https://www.linkedin.com/in/paula-fullio/" target="_blank">
              <CiLinkedin />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
