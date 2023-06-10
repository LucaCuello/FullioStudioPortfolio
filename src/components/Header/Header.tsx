import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  return (
    <header className="website-header">
      <div className="logo-container">
        <span className="website-logo">Fullio Studio</span>
      </div>
      {/* Hamburguer menu */}
      <div
        className={active ? "hamburguer-menu hamburguer-menu-active" : "hamburguer-menu"}
        onClick={() => setActive(!active)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={active ? "website-nav website-nav-active" : "website-nav"}>
        <ul>
          <li>
            <NavLink to="/" className="item-link" onClick={() => setActive(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutme" className="item-link" onClick={() => setActive(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="item-link" onClick={() => setActive(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="item-link" onClick={() => setActive(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
