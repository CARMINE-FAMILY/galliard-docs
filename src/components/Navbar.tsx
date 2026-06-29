import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__brand">
        <span className="logo">G</span>
        <span className="title">Galliard UI</span>
      </a>

      <ul className="navbar__links">
        <li>
          <NavLink to="/docs">Docs</NavLink>
        </li>

        <li>
          <NavLink to="/button">Components</NavLink>
        </li>

        <li>
          <NavLink to="/functions">Functions</NavLink>
        </li>

      </ul>

      <div className="navbar__actions">
        <a
          className="social"
          href="https://github.com/CARMINE-FAMILY/galliard-docs"
          title="GitHub"
          target="_blank"
          // Evita que el sitio externo pueda manipular la pestaña original
          rel="noopener noreferrer"
        >
          <Icon icon="feather:github" className="icon" />
        </a>
        <a
          className="social"
          href="https://www.npmjs.com/package/galliard-ui"
          title="NPM" 
          target="_blank"
          rel="noopener nereferrer"
        >
          <Icon icon="devicon:npm" className="icon npm" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
