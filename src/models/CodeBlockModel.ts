export type CodeLanguage = "tsx" | "ts" | "js" | "jsx" | "scss" | "bash";

export interface CodeTab {
  label: string;
  code: string;
  language?: CodeLanguage;
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
