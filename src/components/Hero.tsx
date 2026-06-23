import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGal } from "galliard-ui";
import { InputText } from "./InputText";

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
          action={() => navigate("/docs")}
          icon="tabler:karate"
          bgColor="linear-gradient(to right, #9A4C95, #a78bfa)"
          txtColor="#FDF7FA"
          height="40px"
          padding="0.6rem 1rem"
          iconSize="2.7rem"
          customClassIcon="icon"
          customClassButton="hola"
        />

        <InputText 
        command="npm install galliard-ui"
        // customStyle={{bg:"#B0e0e6", text:"#f7468a", buttonBg:"#008f39"}}
        />
        {/* <InputText 
         command="prueba"
         theme="synthwave"
         customStyle={{}}
        /> */}
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
