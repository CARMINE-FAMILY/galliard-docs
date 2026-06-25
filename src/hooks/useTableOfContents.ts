import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export type TocItem = {
  id: string;
  text: string;
  level: number; // 2 = h2, 3 = h3
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
    const container = document.querySelector(containerSelector);
    if (!container) {
      setItems([]);
      return;
    }

    //Buscador de headings(Titulos)
    const headings = Array.from(
      container.querySelectorAll<HTMLHeadingElement>(headingSelector),
    );

    const collected: TocItem[] = headings.map((heading) => {
      // Si el heading no tiene id, se lo generamos a partir del texto.
      if (!heading.id) {
        heading.id = slugify(heading.textContent ?? "");
      }
      return {
        id: heading.id,
        text: heading.textContent ?? "",
        level: Number(heading.tagName.replace("H", "")),
      };
    });

    setItems(collected);
    //Al cambiar de pagina, se resetea
    // el id de la página anterior mientras carga el nuevo
    setActiveId(collected[0]?.id ?? null);
  }, [pathname, containerSelector, headingSelector]);

  // Resalta el heading visible actualmente mientras se hace scroll.
  useEffect(() => {
    if (items.length === 0) return;

    // En vez de "cuál está intersectando ahora" (que se queda pegado
    // o se pierde en headings cortos/juntos), calculamos en cada scroll
    // cuál heading es el último que ya cruzó la línea de referencia.
    // Es el mismo enfoque que usa Docusaurus.

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 120; // qué tan abajo del top cuenta como "ya lo pasé"

      let current: string | null = items[0]?.id ?? null;

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollY + offset >= top) {
          current = item.id;
        } else {
          break;
        }
      }

      setActiveId(current);
    };

    handleScroll(); // estado inicial al montar
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return { items, activeId };
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
