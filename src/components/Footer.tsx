import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="navbar__brand">
        <a href="/">
          <span className="navbar__logo">G</span>
          <span>Galliard UI</span>
        </a>
      </div>
        <p>Contáctanos: contacto@miweb.com</p>

        <ul className="footer__links">
          <li>
            <a href="/sobre-nosotros">Sobre nosotros</a>
          </li>
          <li>
            <a href="/aviso-legal">Aviso legal</a>
          </li>
        </ul>

        <p>© 2025 MiWeb</p>
      </div>
    </footer>
  );
};

export default Footer;