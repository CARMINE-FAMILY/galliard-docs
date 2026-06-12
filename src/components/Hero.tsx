import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCopy, FaCheck } from "react-icons/fa";
import { Icon } from "@iconify/react";

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyCommand = async (): Promise<void> => {
    await navigator.clipboard.writeText("npm install galliard-ui");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="hero">
      <h1 className="hero__title">Galliard UI</h1>
      <p className="hero__subtitle">
        Librería de componentes React moderna, construida con TypeScript y Sass.
        Ligera, accesible y altamente personalizable.
      </p>

      <div className="container-actions">
        <Link to="/get-started" className="h-button h-button--primary">
          Get Started
          <Icon icon="tabler:karate" className="icon" />
        </Link>

        <div className="h-install">
          <code>npm install galliard-ui</code>
          <button
            className="h-copy-button"
            onClick={copyCommand}
            aria-label="Copiar comando"
          >
            {copied ? <FaCheck /> : <FaCopy />}
          </button>
        </div>
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
