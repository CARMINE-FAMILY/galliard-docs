import { useEffect, useRef } from "react";
import { useTableOfContents } from "../../hooks/useTableOfContents";
import "../../styles/pages/_tableOfContents.scss";

export const TableOfContents = () => {
  const { items, activeId } = useTableOfContents();
  const activeRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [activeId]);

  if (items.length === 0) return null;

  return (
    <nav className="toc" aria-label="Tabla de contenidos">
      <p className="toc-title">En esta página</p>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            ref={activeId === item.id ? activeRef : null}
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