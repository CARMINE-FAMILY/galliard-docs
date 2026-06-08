import React from 'react';

// Usamos React.FC para definir que es un Function Component de React
const Hero: React.FC = () => {
  return (
    <header className="hero-container" style={{textAlign:'center', padding: '100px'}}>
      {/* Título con degradado */}
      <h1 className="hero-title">Galliard UI</h1>
      
      {/* Subtítulo / Descripción */}
      <p className="hero-subtitle">
        Librería de componentes React moderna, construida con TypeScript y Sass.<br />
        Ligera, accesible y altamente personalizable.
      </p>
    </header>
  );
};

export default Hero;