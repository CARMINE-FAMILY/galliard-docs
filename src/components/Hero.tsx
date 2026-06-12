import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCopy, FaCheck } from "react-icons/fa";

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
        <br />
        Ligera, accesible y altamente personalizable.
      </p>
      <p className="hero__made-with">
        Made with <span className="hero__heart">❤</span> using React +
        TypeScript.
      </p>
      <div>
        <br />
        <Link to="/get-started" className="hero__button hero__button--primary">
          Get Started →
        </Link>
      </div>
      <br />
      <div className="hero__install">
        <code>npm install galliard-ui</code>

        <button
          className="hero__copy-button"
          onClick={copyCommand}
          aria-label="Copiar comando"
        >
          {copied ? <FaCheck /> : <FaCopy />}
        </button>
      </div>
    </section>
  );
};

export default Hero;
