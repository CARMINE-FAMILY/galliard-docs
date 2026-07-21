import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { toggleTheme } from "../store/themeSlice";

const Navbar: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispach = useDispatch();

  const handleToggleTheme = () => {
    dispach(toggleTheme());
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar__brand">
        <span className="logo">G</span>
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
          className="navbar__theme-toggle"
          onClick={handleToggleTheme}
          role="switch"
          aria-checked={theme === "dark"}
          aria-label="Cambiar tema"
        >
          <span className="navbar__theme-toggle-track">
            <svg
              className="navbar__theme-icon navbar__theme-icon--sun"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 2v2M12 20v2M4 12H2M22 12h-2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="navbar__theme-icon navbar__theme-icon--moon"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span className="navbar__theme-toggle-thumb" />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
