import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGal, CopyTextGal } from "galliard-ui";


const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1 className="hero__title">Galliard UI</h1>
      <p className="hero__subtitle">
        Librería de componentes React moderna, construida con TypeScript y Sass.
        <br />
        Ligera, accesible y altamente personalizable.
      </p>

      <div className="container-actions">
        <ButtonGal
          label="Get Started"
          action={() => navigate("/getStartDocs/docs")}
          icon="tabler:karate"
          bgColor="linear-gradient(to right, #9A4C95, #a78bfa)"
          txtColor="#FDF7FA"
          height="40px"
          padding="0.6rem 1rem"
          iconSize="2.7rem"
          customClassButton="hola"
          customClassIcon="icon"
        />

        <CopyTextGal 
        command="npm install galliard-ui"
        theme="light"
        />
      </div>

      <p className="hero__made-with">
        {" "}
        Made with <span className="h-heart">❤</span> using React +
        TypeScript.{" "}
      </p>
    </section>
  );
};

export default Hero;
