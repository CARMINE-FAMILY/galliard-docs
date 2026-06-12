import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <a href="/">
          <span className="navbar__logo">G</span>
          <span className="navbar__title">Galliard UI</span>
        </a>
      </div>

      <ul className="navbar__links">
        <li>
          <NavLink to="/docs">Docs</NavLink>
        </li>

        <li>
          <NavLink to="/components">Components</NavLink>
        </li>

        <li>
          <NavLink to="/prueba">Prueba</NavLink>
        </li>

        <li>
          <NavLink to="/nose">Nose</NavLink>
        </li>

        <li>
          <NavLink to="/final">Final</NavLink>
        </li>
      </ul>

      <div className="navbar__actions">
        <a
          className="navbar__social"
          href="https://github.com/CARMINE-FAMILY/galliard-docs"
          target="_blank"
          // Evita que el sitio externo pueda manipular la pestaña original
          rel="noopener noreferrer"
        >
          <Icon icon="feather:github" />
        </a>
        <a
          className="navbar__social"
          href="https://www.npmjs.com/package/galliard-ui"
          target="_blank"
          rel="noopener nereferrer"
        >
          <Icon icon="devicon:npm" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
