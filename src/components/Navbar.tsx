import React from 'react';

const Navbar: React.FC = () => {
  return (
    // display: flex pone las 3 secciones principales en una sola fila horizontal
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      
      {/* Sección Izquierda */}
      <div>
        <a href="/">
          <span>G </span>
          <strong>Galliard UI</strong>
        </a>
      </div>

      {/* Sección Central: display: flex aquí quita el comportamiento de lista hacia abajo */}
      <ul style={{ display: 'flex', listStyle: 'none', gap: '15px', margin: 0, padding: 0 }}>
        <li><a href="/docs">Docs</a></li>
        <li><a href="/components">Components</a></li>
      </ul>

      {/* Sección Derecha */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <a href="https://github.com" rel="noopener noreferrer">Ver Perfil de GitHub</a>
        <a href="https://www.npmjs.com/package/galliard-ui">NPM</a>
      </div>
    </nav>
  );
};

export default Navbar;