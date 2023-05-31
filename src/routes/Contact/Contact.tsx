import { CiFacebook, CiLinkedin } from "react-icons/ci";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-body">
        <h2 className="title">Contact me</h2>
        <p className="text">Please email me directly to:</p>
        <p className="text">fulliostudio@gmail.com</p>
        <p className="text">My socials:</p>
        <div className="footer-social">
          <a href="https://www.facebook.com/paula.fullio" target="_blank">
            <CiFacebook />
          </a>
          <a href="https://www.linkedin.com/in/paula-fullio/" target="_blank">
            <CiLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};
