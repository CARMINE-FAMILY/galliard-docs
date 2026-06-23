export type CodeLanguage = "tsx" | "ts" | "js" | "jsx" | "scss" | "bash";

// Debe coincidir EXACTO con las llaves de $themes en el .module.scss
// para que se aplique el color pertinente
export type CodeTheme =
  | "black"
  | "light"
  | "dracula"
  | "orange"
  | "green"
  | "solarized-light"
  | "blue"
  | "yellow"
  | "red";

// Subset de variables que aplican a CollapsibleCode (no usa
// bgHeader/textActive/success porque no tiene tabs ni boton de copiar).
export interface CollapsibleCodeThemeValues {
  bg: string;
  border: string;
  textMuted: string;
  accent: string;
  fadeFrom: string;
  fadeTo: string;
  buttonBg: string;
  keyword: string;
  string: string;
  comment: string;
  function: string;
  type: string;
  number: string;
  operator: string;
  tag: string;
  attribute: string;
  punctuation: string;
  variable: string;
  plain: string;
}

export interface CollapsibleCodeProps {
  code: string;
  language?: CodeLanguage;
  previewLines?: number;
  className?: string;
  theme?: CodeTheme; // default: "black"
  customTheme?: Partial<CollapsibleCodeThemeValues>;
}
