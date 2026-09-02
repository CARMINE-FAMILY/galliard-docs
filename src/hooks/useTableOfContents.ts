import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export type TocItem = {
  id: string;
  text: string;
  level: number;
  children: TocItem[];
};

type Options = {
  containerSelector?: string; // selector del contenedor que envuelve el artículo
  headingSelector?: string; // qué niveles de heading incluir
};

/**
 * Lee los headings dentro de `containerSelector` y arma una lista plana
 * para renderizar un Table of Contents. Se vuelve a calcular cada vez
 * que cambia la ruta, porque el contenido del artículo cambia.
 */
export const useTableOfContents = ({
  containerSelector = ".doc-content",
  headingSelector = "h2, h3, h4, h5, h6, h7, h8",
}: Options = {}) => {
  //Guarda los items encontrados
  const [items, setItems] = useState<TocItem[]>([]);
  //Guarda que heading está activo
  const [activeId, setActiveId] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const container = document.querySelector(containerSelector);
      if (!container) {
        setItems([]);
        return;
      }
      //Buscador de headings(Titulos)
      const headings = Array.from(
        container.querySelectorAll<HTMLHeadingElement>(headingSelector),
      );

      // Construye una estructura jerárquica: los niveles inferiores
      // (h3, h4, ...) se anidan como hijos de su último heading de nivel 2.
      const collected: TocItem[] = [];
      const stack: TocItem[] = [];

      headings.forEach((heading) => {
        // Si el heading no tiene id, se lo generamos a partir del texto.
        if (!heading.id) {
          heading.id = slugify(heading.textContent ?? "");
        }

        const item: TocItem = {
          id: heading.id,
          text: heading.textContent ?? "",
          level: Number(heading.tagName.replace("H", "")),
          children: [],
        };

        // Quita del stack todos los niveles que sean >= al actual
        // (solo pueden ser hijos de un heading de nivel menor)
        while (
          stack.length > 0 &&
          stack[stack.length - 1].level >= item.level
        ) {
          stack.pop();
        }

        if (stack.length > 0) {
          // Se anida bajo el último heading padre
          stack[stack.length - 1].children.push(item);
        } else {
          collected.push(item);
        }

        stack.push(item);
      });

      setItems(collected);
      //Al cambiar de pagina, se resetea
      // el id de la página anterior mientras carga el nuevo
      setActiveId(collected[0]?.id ?? null);
    }, 100); // Delay de 100ms para esperar a que el contenido se renderice

    return () => clearTimeout(timer); // Limpiar el timeout si el componente se desmonta o cambia de ruta
  }, [pathname, containerSelector, headingSelector]);

  // Resalta el heading visible actualmente mientras se hace scroll.
  useEffect(() => {
    if (items.length === 0) return;

    // En vez de "cuál está intersectando ahora" (que se queda pegado
    // o se pierde en headings cortos/juntos), calculamos en cada scroll
    // cuál heading es el último que ya cruzó la línea de referencia.
    // Es el mismo enfoque que usa Docusaurus.

    const scrollContainer =
      document.querySelector<HTMLElement>(".docs-content");
    if (!scrollContainer) return;

    // Aplana la estructura jerárquica para poder recorrerla de forma secuencial
    const flatItems: TocItem[] = [];
    const flatten = (list: TocItem[]) => {
      list.forEach((item) => {
        flatItems.push(item);
        flatten(item.children);
      });
    };
    flatten(items);

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const offset = 120;

      let current: string | null = flatItems[0]?.id ?? null;

      for (const item of flatItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const containerTop = scrollContainer.getBoundingClientRect().top;
        const elTop = el.getBoundingClientRect().top - containerTop + scrollTop;

        if (scrollTop + offset >= elTop) {
          current = item.id;
        } else {
          break;
        }
      }

      setActiveId(current);
    };

    handleScroll(); // estado inicial al montar
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [items]);
  return { items, activeId };
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
