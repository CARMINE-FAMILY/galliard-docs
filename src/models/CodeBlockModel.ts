export type CodeLanguage = "tsx" | "ts" | "js" | "jsx" | "scss" | "bash";

// Debe coincidir EXACTO con las llaves de $themes en el .module.scss
export type CodeTheme =
  | "black"
  | "light"
  | "dracula"
  | "monokai"
  | "nord"
  | "solarized-light"
  | "github-dark"
  | "synthwave";

// Cada llave aqui = una variable CSS --code-* en el .module.scss.
// Si agregas una variable nueva al scss, agregala tambien aqui
// (mismo nombre, sin el prefijo "--code-").
export interface CodeThemeValues {
  bg: string;
  bgHeader: string;
  border: string;
  textMuted: string;
  textActive: string;
  accent: string;
  success: string;
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
  fontSize: string;
  lineHeight: string;
  padding: string;
  radius: string;
  fontFamily: string;
}

export interface CodeTab {
  label: string;
  code: string;
  language?: CodeLanguage;
  theme?: CodeTheme; // default: "black". Cada tab puede tener su propio tema
  customTheme?: Partial<CodeThemeValues>; // override parcial solo para este tab
}

export type TokenType =
  | "keyword"
  | "string"
  | "comment"
  | "function"
  | "type"
  | "number"
  | "operator"
  | "tag"
  | "attribute"
  | "punctuation"
  | "variable"
  | "plain";

export interface Token {
  type: TokenType;
  value: string;
}

export interface CodeBlockProps {
  tabs: CodeTab[];
  className?: string;
}
