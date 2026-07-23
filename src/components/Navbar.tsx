import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { toggleTheme } from "../store/themeSlice";
import HelmetLogo from "../assets/logo-helmet.svg";

const Navbar: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispach = useDispatch();

  const handleToggleTheme = () => {
    dispach(toggleTheme());
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar__brand">
        <span className="logo"><img src={HelmetLogo} alt="Galliard UI"/></span>
        <span className="title">Galliard UI</span>
      </a>

      <ul className="navbar__links">
        <li>
          <NavLink to="/getStartDocs/docs">Docs</NavLink>
        </li>

        <li>
          <NavLink to="/componentsDocs/button">Components</NavLink>
        </li>

        <li>
          <NavLink to="/functionsDocs/unixactions">Functions</NavLink>
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

        <button
          className="theme__icon"
          onClick={handleToggleTheme}
          role="switch"
          aria-checked={theme === "dark"}
          aria-label="Cambiar tema"
        >
          <span className="theme__icon-circle" />
          <span className="theme__icon-rays">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="theme__icon-mask" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
