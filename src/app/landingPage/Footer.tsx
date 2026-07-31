import { ButtonGal } from "galliard-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="cta">
        <h2>Listo para comenzar?</h2>
        <p>Explora la documentación completa y comienza a construir.</p>

        <div className="container-actions">
          <ButtonGal
            label="Explorar Docs"
            action={() => navigate("/getStartDocs/docs")}
            icon="tabler:karate"
            bgColor="linear-gradient(to right, #9A4C95, #a78bfa)"
            txtColor="#FDF7FA"
            height="40px"
            padding="0.6rem 1rem"
            iconSize="2.7rem"
            customClassIcon="icon"
            customClassButton="hola"
            customClassLabel="label"
          />
        </div>
      </div>

      <div className="content">
        <p className="legal">
          Open source bajo licencia MIT. Creado por CARMINE-FAMILY.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
