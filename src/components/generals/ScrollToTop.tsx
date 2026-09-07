import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// El scroll real vive en `.docs-content` (overflow-y: auto), no en `window`.
// El navegador solo restaura el scroll de `window` al cambiar de ruta,
// así que hay que llevar el contenedor arriba explícitamente en cada
// navegación SPA (sidebar, paginación, navbar...).
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelector(".docs-content")?.scrollTo({ top: 0 });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
