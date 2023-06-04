import { CiInstagram, CiLinkedin } from "react-icons/ci";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="website-footer">
      <div className="footer-description">
        <span>Fullio Studio 2023</span>
        <span>All rights reserved</span>
      </div>
      <div className="social-links">
        <a href="https://www.instagram.com/paufullio/" target="_blank">
          <CiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/paula-fullio/" target="_blank">
          <CiLinkedin />
        </a>
      </div>
    </footer>
  );
};
