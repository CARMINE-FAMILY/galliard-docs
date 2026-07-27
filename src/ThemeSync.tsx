// ThemeSync.tsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store/store";
import { setTheme } from "./store/themeSlice";

const DOCS_PREFIXES = [
  "/getStartDocs",
  "/componentsDocs",
  "/modalsDocs",
  "/functionsDocs",
];

const isDocsRoute = (pathname: string) =>
  DOCS_PREFIXES.some((prefix) => pathname.startsWith(prefix));

const getSystemTheme = (): "light" | "dark" =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export function ThemeSync() {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  // Rastrea si ya "entramos" a docs en esta sesión de navegación,
  // para no forzar el tema del navegador en cada re-render dentro de docs
  const wasInDocs = useRef(false);

  useEffect(() => {
    const inDocs = isDocsRoute(location.pathname);

    if (inDocs && !wasInDocs.current) {
      // Se acaba de entrar a docs: forzar tema del navegador
      dispatch(setTheme(getSystemTheme()));
    }

    if (!inDocs) {
      // Fuera de docs (landing): tema fijo
      document.documentElement.setAttribute("data-theme", "dark");
    }

    wasInDocs.current = inDocs;
  }, [location.pathname, dispatch]);

  useEffect(() => {
    if (isDocsRoute(location.pathname)) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, location.pathname]);

  return null;
}
