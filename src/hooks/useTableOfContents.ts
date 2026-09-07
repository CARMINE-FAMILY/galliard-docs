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
    // Limpieza inmediata al cambiar de ruta: evita mostrar 1 frame
    // con los items obsoletos de la página anterior.
    setItems([]);
    setActiveId(null);

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
      // Contador para generar ids únicos cuando varios headings
      // comparten el mismo texto (ej: "Parámetros" por función).
      const slugCount = new Map<string, number>();

      // Pre-conteo global de textos: los duplicados (ej: "Parámetros"
      // bajo cada función) están bajo padres distintos, no como hermanos.
      const textCount = new Map<string, number>();
      headings.forEach((h) => {
        const t = (h.textContent ?? "").trim();
        textCount.set(t, (textCount.get(t) ?? 0) + 1);
      });

      headings.forEach((heading) => {
        // Si el heading no tiene id, se lo generamos a partir del texto,
        // con sufijo numérico si el slug ya existe (ids duplicados = HTML
        // inválido y todos los enlaces apuntando a la primera sección).
        const baseSlug = heading.id || slugify(heading.textContent ?? "");
        const used = slugCount.get(baseSlug) ?? 0;
        slugCount.set(baseSlug, used + 1);
        heading.id = used === 0 ? baseSlug : `${baseSlug}-${used}`;

        // Si el texto aparece varias veces en la página (ej: "Parámetros"
        // bajo cada función), se calificará con el nombre del padre real
        // (tras el pop del stack) para que cada enlace sea distinguible.
        const rawText = (heading.textContent ?? "").trim();
        const isDuplicate = (textCount.get(rawText) ?? 0) > 1;

        // Quita del stack todos los niveles que sean >= al actual
        // (solo pueden ser hijos de un heading de nivel menor)
        const level = Number(heading.tagName.replace("H", ""));
        while (stack.length > 0 && stack[stack.length - 1].level >= level) {
          stack.pop();
        }

        const parent = stack[stack.length - 1];
        const displayText =
          parent && isDuplicate ? `${parent.text} · ${rawText}` : rawText;

        const item: TocItem = {
          id: heading.id,
          text: displayText,
          level,
          children: [],
        };

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
      const offset = 88;

      // Fondo de página: la última sección puede ser más corta que el
      // viewport y su heading nunca cruzaría la línea de referencia.
      // En ese caso se fuerza el último item (estándar tipo Docusaurus).
      const atBottom =
        scrollTop + scrollContainer.clientHeight >=
        scrollContainer.scrollHeight - 4;
      if (atBottom) {
        const last = flatItems[flatItems.length - 1]?.id ?? null;
        setActiveId((prev) => (prev === last ? prev : last));
        return;
      }

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

      // uso evita: re-renders en bucle si el activo no cambió
      setActiveId((prev) => (prev === current ? prev : current));
    };

    // requestAnimationFrame: uso para no leer rects a mitad del layout de tablas largas
    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(() => {
        rafId = null;
        handleScroll();
      });
    };
    // r4w
    handleScroll(); // estado inicial al montar
    scrollContainer.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scrollContainer.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [items]);
  return { items, activeId };
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
