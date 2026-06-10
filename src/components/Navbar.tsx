import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <a href="/">
          <span>G</span>
          <strong>Galliard UI</strong>
        </a>
      </div>

      <ul className="navbar__links">
        <li>
          <a href="/docs">Docs</a>
        </li>
        <li>
          <a href="/components">Components</a>
        </li>
        <li>
          <a href="/prueba">Prueba</a>
        </li>
        <li>
          <a href="/nose">Nose</a>
        </li>
        <li>
          <a href="/final">Final</a>
        </li>
      </ul>

      <div className="navbar__actions">
        <a
          className="navbar__github"
          href="https://github.com/CARMINE-FAMILY/galliard-docs"
          target="_blank"
          // Evita que el sitio externo pueda manipular la pestaña original
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" />
              <path d="M9 20.027c-3 .973-5.5 0-7-3" />
            </g>
          </svg>
        </a>
        <a
          className="navbar__npm"
          href="https://www.npmjs.com/package/galliard-ui"
          target="_blank"
          rel="noopener nereferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 128 128"
          >
            <path
              fill="#cb3837"
              d="M0 7.062C0 3.225 3.225 0 7.062 0h113.88c3.838 0 7.063 3.225 7.063 7.062v113.88c0 3.838-3.225 7.063-7.063 7.063H7.062c-3.837 0-7.062-3.225-7.062-7.063zm23.69 97.518h40.395l.05-58.532h19.494l-.05 58.581h19.543l.05-78.075l-78.075-.1l-.1 78.126z"
            />
            <path
              fill="#fff"
              d="M25.105 65.52V26.512H40.96c8.72 0 26.274.034 39.008.075l23.153.075v77.866H83.645v-58.54H64.057v58.54H25.105z"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
