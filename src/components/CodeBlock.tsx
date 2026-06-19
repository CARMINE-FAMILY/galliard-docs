import { useState } from "react";
import type { CodeBlockProps } from "../models/CodeBlockModel";
import { tokenize } from "../utils/codeTokenizer";
import "../styles/components/_codeBlock.scss";

function HighlightedCode({ code }: { code: string }) {
  const tokens = tokenize(code);

  return (
    <code>
      {tokens.map((token, i) => (
        <span key={i} className={`token-${token.type}`}>
          {token.value}
        </span>
      ))}
    </code>
  );
}

export function CodeBlock({ tabs, className }: CodeBlockProps) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentTab = tabs[active];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentTab.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error al copiar:", error);
    }
  };

  return (
    <div className={`codeBlock-wrapper ${className ?? ""}`}>
      <div className="codeBlock-header">
        <div className="codeBlock-tabsContainer">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`codeBlock-tabButton ${active === i ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className={`codeBlock-copyButton ${copied ? "copied" : ""}`}
        >
          {copied ? "✓ Copiado" : "📋 Copiar"}
        </button>
      </div>

      <pre className="codeBlock-codePre">
        <HighlightedCode code={currentTab.code} />
      </pre>
    </div>
  );
}