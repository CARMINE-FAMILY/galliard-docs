import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store/store";
import { setThemeAuto } from "./store/themeSlice";
import {
  isDocsRoute,
  getSystemTheme,
  getEffectiveTheme,
} from "./hooks/useThemeUtils";

export function ThemeSync() {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const wasInDocs = useRef(false);

  // Al ENTRAR a docs (transición desde otra sección), forzar tema del navegador
  useEffect(() => {
    const inDocs = isDocsRoute(location.pathname);
    if (inDocs && !wasInDocs.current) {
      dispatch(setThemeAuto(getSystemTheme()));
    }
    wasInDocs.current = inDocs;
  }, [location.pathname, dispatch]);

  // Aplicar al DOM el tema que realmente debe verse
  useEffect(() => {
    const effective = getEffectiveTheme(location.pathname, theme);
    document.documentElement.setAttribute("data-theme", effective);
  }, [theme, location.pathname]);

  return null;
}
