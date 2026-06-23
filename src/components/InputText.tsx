import { useState } from "react";
import type { InputTextProps } from "../models/InputTextModel";
import styles from "../styles/components/_inputText.module.scss";
import { Icon } from "@iconify/react";

function CopyIcon(){
    return(
        <Icon icon="icon-park-solid:copy" />
    );
}

function CheckIcon() {
  return (
    <Icon icon="streamline-ultimate-color:check" />
  );
}
 
export function InputText({ command, className }: InputTextProps) {
  const [copied, setCopied] = useState(false);
 
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error al copiar:", error);
    }
  };
 
  return (
    <div className={`${styles["inputText-wrapper"]} ${className ?? ""}`}>
      <span className={styles["inputText-text"]}>{command}</span>
 
      <button
        onClick={handleCopy}
        aria-label="Copiar comando"
        className={`${styles["inputText-copyButton"]} ${
          copied ? styles.copied : ""
        }`}
      >
        {/* key distinto fuerza a React a remontar el icono y
            relanzar la animacion "pop" en cada cambio */}
        <span key={copied ? "check" : "copy"} className={styles["inputText-icon"]}>
          {copied ? <CheckIcon /> : <CopyIcon />}
        </span>
 
        {copied && (
          <span className={styles["inputText-tooltip"]}>Copiado</span>
        )}
      </button>
    </div>
  );
}