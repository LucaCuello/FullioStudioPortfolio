import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="website-header">
      <div className="logo-container">
        <span className="website-logo">Fullio Studio</span>
      </div>
      <nav className="website-nav">
        <ul>
          <li>
            <NavLink to="/home" className="item-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="item-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="item-link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="item-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
