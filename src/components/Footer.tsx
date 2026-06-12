import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <div className="footer__content">
        
        <div className="footer__brand">
          <a href="/">
            <span className="footer__logo">G</span>
            <span className="footer__title">Galliard UI</span>
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
