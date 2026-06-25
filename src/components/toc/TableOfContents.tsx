import { useTableOfContents } from "../../hooks/useTableOfContents";
import "../../styles/pages/_tableOfContents.scss";

export const TableOfContents = () => {
  const { items, activeId } = useTableOfContents();

  // Si la página no tiene headings, no mostramos nada.
  if (items.length === 0) return null;

  return (
    <nav className="toc" aria-label="Tabla de contenidos">
      <p className="toc-title">En esta página</p>

      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className={`toc-item level-${item.level} ${
              activeId === item.id ? "active" : ""
            }`}
          >
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
