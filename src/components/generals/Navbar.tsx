import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import logo from "/logo/pin.webp";
import { setTheme } from "../../store/themeSlice";
import { getEffectiveTheme } from "../../hooks/useThemeUtils";

const Navbar: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const location = useLocation();

  const effectiveTheme = getEffectiveTheme(location.pathname, theme);

  // El NavLink apunta a una sola página por sección (ej: button),
  // pero las demás rutas son hermanas (ej: inputs/checkbox), no hijas,
  // así que el matcheo exacto nunca las marcaría. Se matchea por prefijo.
  const sectionClass = (prefix: string) => ({ isActive }: { isActive: boolean }) =>
    isActive || location.pathname.startsWith(prefix) ? "active" : undefined;

  const handleToggleTheme = () => {
    const next = effectiveTheme === "dark" ? "light" : "dark";
    dispatch(setTheme(next));
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__brand">
        <img className="logo" src={logo} alt="Galliard UI" />
        <span className="title">Galliard UI</span>
      </NavLink>

      <ul className="navbar__links">
        <li>
          <NavLink to="/getStartDocs/docs" className={sectionClass("/getStartDocs")}>
            Docs
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/componentsDocs/button"
            className={sectionClass("/componentsDocs")}
          >
            Components
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/modalsDocs/bottomsheet"
            className={sectionClass("/modalsDocs")}
          >
            Modals
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/functionsDocs/unixactions"
            className={sectionClass("/functionsDocs")}
          >
            Functions
          </NavLink>
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
          rel="noopener noreferrer"
        >
          <Icon icon="devicon:npm" className="icon npm" />
        </a>

        <button
          className="theme__icon"
          onClick={handleToggleTheme}
          aria-label={
            effectiveTheme === "dark"
              ? "Cambiar a modo claro"
              : "Cambiar a modo oscuro"
          }
        >
          <Icon
            icon={effectiveTheme === "light" ? "ph:moon-fill" : "ph:sun-fill"}
            className={`theme-icon ${
              effectiveTheme === "light" ? "moon-icon" : "sun-icon"
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
