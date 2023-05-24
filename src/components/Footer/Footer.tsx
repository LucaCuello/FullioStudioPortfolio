import { CiFacebook, CiInstagram } from "react-icons/ci";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="website-footer">
      <div className="footer-description">
        <span>Fullio Studio 2023</span>
        <span>All rights reserved</span>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com/paula.fullio" target="_blank">
          <CiFacebook />
        </a>
        <a href="https://www.instagram.com/paufullio/" target="_blank">
          <CiInstagram />
        </a>
      </div>
    </footer>
  );
};
