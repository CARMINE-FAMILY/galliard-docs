import type { CodeLanguage, CodeTheme } from "./CodeBlockModel";

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
