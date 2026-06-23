import { useState, type CSSProperties } from "react";
import type {
  InputTextProps,
  InputTextThemeValues,
} from "../models/InputTextModel";
import styles from "../styles/components/inputText.module.scss";
import { Icon } from "@iconify/react";

function CopyIcon() {
  return <Icon icon="icon-park-solid:copy" />;
}

function CheckIcon() {
  return <Icon icon="streamline-ultimate-color:check" />;
}

// Traduce la llave camelCase del modelo al nombre real de la
// variable CSS en el scss (ej. paddingY -> --it-padding-y).
const CSS_VAR_MAP: Record<keyof InputTextThemeValues, string> = {
  bg: "--it-bg",
  border: "--it-border",
  text: "--it-text",
  buttonBg: "--it-button-bg",
  buttonBorder: "--it-button-border",
  success: "--it-success",
  radius: "--it-radius",
  width: "--it-width",
  paddingY: "--it-padding-y",
};

// Solo arma variables CSS para las llaves que el usuario SI mando;
// lo que no se pasa cae al default definido en el scss.
function buildCustomStyle(
  customStyle?: Partial<InputTextThemeValues>,
): CSSProperties {
  if (!customStyle) return {};

  const style: Record<string, string> = {};

  for (const key in customStyle) {
    const typedKey = key as keyof InputTextThemeValues;
    const value = customStyle[typedKey];
    if (value) {
      style[CSS_VAR_MAP[typedKey]] = value;
    }
  }
  return style as CSSProperties;
}

export function InputText({
  command,
  className,
  theme = "solarized-light",
  customStyle,
}: InputTextProps) {
  const [copied, setCopied] = useState(false);

  const inlineStyle = buildCustomStyle(customStyle);

  // funcion para el metodo de copiar
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      //tiempo que tarda en copiar y que cambie el icono
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error al copiar:", error);
    }
  };

  return (
    <div
      className={`${styles["inputText-wrapper"]} ${className ?? ""}`}
      data-theme={theme}
      style={inlineStyle}
    >
      <span className={styles["inputText-text"]}>{command}</span>

      <button
        //funcion para copiar
        onClick={handleCopy}
        aria-label="Copiar comando"
        className={`${styles["inputText-copyButton"]} ${
          copied ? styles.copied : ""
        }`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}

        {copied && <span className={styles["inputText-tooltip"]}>Copiado</span>}
      </button>
    </div>
  );
}
