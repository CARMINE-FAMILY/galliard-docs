import { useState, type CSSProperties } from "react";
import type {
  CollapsibleCodeProps,
  CollapsibleCodeThemeValues,
} from "../models/CollapsibleCodeModel";
import { tokenize } from "../hooks/useCodeTokenizer";
import styles from "../styles/components/collapsibleCode.module.scss";

// Igual que en CodeBlock: traduce la llave camelCase del modelo
// al nombre real de la variable CSS en el scss.
const CSS_VAR_MAP: Record<keyof CollapsibleCodeThemeValues, string> = {
  bg: "--code-bg",
  border: "--code-border",
  textMuted: "--code-text-muted",
  accent: "--code-accent",
  fadeFrom: "--code-fade-from",
  fadeTo: "--code-fade-to",
  buttonBg: "--code-button-bg",
  keyword: "--code-keyword",
  string: "--code-string",
  comment: "--code-comment",
  function: "--code-function",
  type: "--code-type",
  number: "--code-number",
  operator: "--code-operator",
  tag: "--code-tag",
  attribute: "--code-attribute",
  punctuation: "--code-punctuation",
  variable: "--code-variable",
  plain: "--code-plain",
};

// Solo arma variables CSS para las llaves que el usuario SI mando;
// lo que no se pasa cae al tema base por la cascada normal de CSS.
function buildCustomStyle(
  customTheme?: Partial<CollapsibleCodeThemeValues>,
): CSSProperties {
  if (!customTheme) return {};

  const style: Record<string, string> = {};

  for (const key in customTheme) {
    const typedKey = key as keyof CollapsibleCodeThemeValues;
    const value = customTheme[typedKey];
    if (value) {
      style[CSS_VAR_MAP[typedKey]] = value;
    }
  }

  return style as CSSProperties;
}

function HighlightedCode({ code }: { code: string }) {
  const tokens = tokenize(code);

  return (
    <code>
      {tokens.map((token, i) => (
        <span key={i} className={styles[`token-${token.type}`]}>
          {token.value}
        </span>
      ))}
    </code>
  );
}

export function CollapsibleCode({
  code,
  previewLines = 8,
  className,
  theme = "black",
  customTheme,
}: CollapsibleCodeProps) {
  const [expanded, setExpanded] = useState(false);

  const lines = code.trim().split("\n");
  const isLong = lines.length > previewLines;
  const displayed = expanded ? code : lines.slice(0, previewLines).join("\n");

  const customStyle = buildCustomStyle(customTheme);

  return (
    <div
      className={`${styles["collapsibleCode-wrapper"]} ${className ?? ""}`}
      data-theme={theme}
      style={customStyle}
    >
      {/* mandas a llamar al ejemplo de tu codigo */}
      <pre className={styles["collapsibleCode-pre"]}>
        <HighlightedCode code={displayed} />
      </pre>

      {isLong && !expanded && (
        <div className={styles["collapsibleCode-fade"]} />
      )}

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className={styles["collapsibleCode-toggleButton"]}
        >
          {expanded ? "▲ Ver menos" : "▼ Ver más"}
        </button>
      )}
    </div>
  );
}
