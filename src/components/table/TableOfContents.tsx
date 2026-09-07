import { useEffect, useMemo, useRef } from "react";
import {
  useTableOfContents,
  type TocItem,
} from "../../hooks/useTableOfContents";
import "../../styles/pages/_tableOfContents.scss";

// árbol jerárquico en orden de documento para que todos
// los niveles (h2, h3, ...) se rendericen y puedan recibir `.active`.
const flattenItems = (list: TocItem[]): TocItem[] => {
  const flat: TocItem[] = [];
  list.forEach((item) => {
    flat.push(item);
    flat.push(...flattenItems(item.children));
  });
  return flat;
};

export const TableOfContents = () => {
  const { items, activeId } = useTableOfContents();
  const activeRef = useRef<HTMLLIElement | null>(null);
  const flatItems = useMemo(() => flattenItems(items), [items]);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        block: "nearest",
        behavior: "auto",
      });
    }
  }, [activeId]);

  if (items.length === 0) return null;

  return (
    <nav className="toc" aria-label="Tabla de contenidos">
      <p className="toc-title">En esta página</p>
      <ul>
        {flatItems.map((item) => (
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