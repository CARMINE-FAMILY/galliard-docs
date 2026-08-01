export type ThemeValue = "light" | "dark";

const DOCS_PREFIXES = [
  "/",
  "/getStartDocs",
  "/componentsDocs",
  "/modalsDocs",
  "/functionsDocs",
];

export const isDocsRoute = (pathname: string) =>
  DOCS_PREFIXES.some((prefix) => pathname.startsWith(prefix));

export const getSystemTheme = (): ThemeValue =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const MANUAL_KEY = "theme_manual";

// true = el usuario ya tocó el botón alguna vez (en cualquier página)
export const isThemeManual = (): boolean =>
  typeof window !== "undefined" && localStorage.getItem(MANUAL_KEY) === "1";

export const markThemeManual = () => {
  if (typeof window !== "undefined") localStorage.setItem(MANUAL_KEY, "1");
};

// El tema que REALMENTE debe verse en pantalla según la ruta actual
export const getEffectiveTheme = (
  pathname: string,
  storeTheme: ThemeValue,
): ThemeValue => {
  if (isDocsRoute(pathname)) return storeTheme;
  // Landing: light por defecto, salvo que el usuario ya haya elegido manualmente
  return isThemeManual() ? storeTheme : "light";
};
