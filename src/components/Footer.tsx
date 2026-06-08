import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-contenido">
        <p>Contáctanos: contacto@miweb.com</p>
        <ul>
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
