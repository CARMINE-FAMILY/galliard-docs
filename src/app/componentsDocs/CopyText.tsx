import { CopyTextGal, ComponentPreviewGal } from "galliard-ui";
import { DataTable } from "../../components/table/DataTable";
import type { PropRow } from "../../models/TableModel";
import { propsColumns } from "../../hooks/usePropsTableColumns";
import { DocsPagination } from "../../components/generals/DocsPagination";

export default function CopyText() {
  const contentProps: PropRow[] = [
    {
      name: "command",
      type: "string",
      description: "Texto o comando que se muestra y se copia al portapapeles.",
    },
  ];

  const appearanceProps: PropRow[] = [
    {
      name: "theme",
      type: "black, light, dracula, orange, green, solarized-light, blue, yellow, red",
      defaultValue: '"solarized-light"',
      description: "Define el tema de color del componente.",
    },
    {
      name: "customStyle",
      type: "Partial<CopyTextThemeValues>",
      description:
        "Sobreescribe variables CSS puntuales del tema (bg, border, text, buttonBg, buttonBorder, success, radius, width, paddingY) sin tener que cambiar de theme.",
    },
  ];

  const iconsProps: PropRow[] = [
    {
      name: "iconPosition",
      type: '"left" ó "right"',
      defaultValue: "right",
      description: "Define la posición del icono respecto al texto",
    },
  ];

  const themeValuesProps: PropRow[] = [
    {
      name: "bg",
      type: "string",
      description: "Color de fondo del contenedor",
    },
    {
      name: "border",
      type: "string",
      description: "Color del borde del contenedor",
    },
    {
      name: "text",
      type: "string",
      description: "Color del texto del comando mostrado",
    },
    {
      name: "buttonBg",
      type: "string",
      description: "Color de fondo del botón de copiar",
    },
    {
      name: "buttonBorder",
      type: "string",
      description: "Color del borde del botón de copiar",
    },
    {
      name: "success",
      type: "string",
      description: "Color del ícono/tooltip al copiar exitosamente",
    },
    {
      name: "radius",
      type: "string",
      description: "Border-radius del contenedor",
    },
    { name: "width", type: "string", description: "Ancho del componente" },
    {
      name: "paddingY",
      type: "string",
      description: "Padding vertical del contenedor",
    },
  ];

  const customizationProps: PropRow[] = [
    {
      name: "className",
      type: "string",
      description: "Clase CSS adicional aplicada al contenedor del componente.",
    },
  ];

  return (
    <div className="copyText-docs docs-content">
      <h1 className="titlePrimary">CopyText</h1>

      <p className="text">
        El componente CopyTextGal muestra un comando o texto junto a un botón
        que lo copia al portapapeles, con retroalimentación visual (ícono y
        tooltip) al copiarlo. Soporta 9 temas de color predefinidos y
        personalización puntual mediante variables CSS.
      </p>

      <h2 className="titleSecundary">Props</h2>

      <h3 className="subtitle">Contenido</h3>
      <DataTable
        columns={propsColumns}
        data={contentProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Apariencia</h3>
      <DataTable
        columns={propsColumns}
        data={appearanceProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">customStyle (CopyTextThemeValues)</h3>
      <p className="text">
        Estas son las variables que puedes sobreescribir parcialmente vía{" "}
        <span className="inline-code">customStyle</span>. Las que no se
        especifiquen toman el valor del{" "}
        <span className="inline-code">theme</span> base.
      </p>
      <DataTable
        columns={propsColumns}
        data={themeValuesProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Icono</h3>
      <DataTable
        columns={propsColumns}
        data={iconsProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Personalización</h3>
      <DataTable
        columns={propsColumns}
        data={customizationProps}
        rowKey={(r) => r.name}
      />

      {/* Básico */}
      <h2 className="titleSecundary">CopyText</h2>
      <p className="text">
        Ejemplo base del componente: solo se necesita
        <span className="inline-code">command</span>. Al hacer click en el
        botón, el texto se copia al portapapeles y el ícono cambia a un check
        por 2 segundos.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<CopyTextGal command="npm install galliard-ui" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<CopyTextGal command="npm install galliard-ui" />`,
          },
        ]}
      >
        <CopyTextGal command="npm install galliard-ui" />
      </ComponentPreviewGal>

      {/* Temas */}
      <h2 className="titleSecundary">Temas</h2>
      <p className="text">
        La prop <span className="inline-code">theme</span> define el tema de
        color del componente. Son los mismos 9 temas que usan CodeBlock y
        CollapsibleCode, para mantener coherencia visual entre ambos.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <CopyTextGal command="black" theme="black" />
        <CopyTextGal command="light" theme="light" />
        <CopyTextGal command="dracula" theme="dracula" />
        <CopyTextGal command="orange" theme="orange" />
        <CopyTextGal command="green" theme="green" />
        <CopyTextGal command="solarized-light" theme="solarized-light" />
        <CopyTextGal command="blue" theme="blue" />
        <CopyTextGal command="yellow" theme="yellow" />
        <CopyTextGal command="red" theme="red" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <CopyTextGal command="black" theme="black" />
        <CopyTextGal command="light" theme="light" />
        <CopyTextGal command="dracula" theme="dracula" />
        <CopyTextGal command="orange" theme="orange" />
        <CopyTextGal command="green" theme="green" />
        <CopyTextGal command="solarized-light" theme="solarized-light" />
        <CopyTextGal command="blue" theme="blue" />
        <CopyTextGal command="yellow" theme="yellow" />
        <CopyTextGal command="red" theme="red" />`,
          },
        ]}
      >
        <CopyTextGal command="black" theme="black" />
        <CopyTextGal command="light" theme="light" />
        <CopyTextGal command="dracula" theme="dracula" />
        <CopyTextGal command="orange" theme="orange" />
        <CopyTextGal command="green" theme="green" />
        <CopyTextGal command="solarized-light" theme="solarized-light" />
        <CopyTextGal command="blue" theme="blue" />
        <CopyTextGal command="yellow" theme="yellow" />
        <CopyTextGal command="red" theme="red" />
      </ComponentPreviewGal>

      {/* Posición del icono */}
      <h2 className="titleSecundary">Posición del icono</h2>
      <p className="text">
        La prop <span className="inline-code">iconPosition</span> define si el
        icono se muestra a la izquierda o la derecha del texto del botón
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <CopyTextGal command="derecha" iconPosition="right" />
        <CopyTextGal command="izquierda" iconPosition="left" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <CopyTextGal command="derecha" iconPosition="right" />
        <CopyTextGal command="izquierda" iconPosition="left" />`,
          },
        ]}
      >
        <CopyTextGal command="derecha" iconPosition="right" />
        <CopyTextGal command="izquierda" iconPosition="left" />
      </ComponentPreviewGal>

      {/* customStyle */}
      <h2 className="titleSecundary">Personalización con customStyle</h2>
      <p className="text">
        Con <span className="inline-code">customStyle</span> puedes
        sobreescribir variables puntuales de un tema (por ejemplo el color de
        fondo o el ancho) sin definir un tema nuevo desde cero. Solo se aplican
        las llaves que mandes; el resto sigue tomando el valor del
        <span className="inline-code">theme</span> base.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<CopyTextGal
  command="npm run build"
  theme="black"
  customStyle={{ bg: "#0f172a", success: "#38bdf8", width: "300px" }}
/>`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<CopyTextGal
  command="npm run build"
  theme="black"
  customStyle={{ bg: "#0f172a", success: "#38bdf8", width: "300px" }}
/>`,
          },
        ]}
      >
        <CopyTextGal
          command="npm run build"
          theme="black"
          customStyle={{ bg: "#0f172a", success: "#38bdf8", width: "300px" }}
        />
      </ComponentPreviewGal>

      {/* customStyle extendido */}
      <h2 className="titleSecundary">Combinando varias variables</h2>
      <p className="text">
        Puedes combinar tantas variables de{" "}
        <span className="inline-code">CopyTextThemeValues</span> como necesites
        para lograr una apariencia completamente distinta al tema base, sin
        dejar de usar el botón y la lógica de copiado del componente.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<CopyTextGal
  command="git clone repo.git"
  theme="black"
  customStyle={{
    bg: "#1a0e2e",
    border: "#7c3aed",
    text: "#e9d5ff",
    buttonBg: "#2a1745",
    buttonBorder: "#7c3aed",
    success: "#c084fc",
    radius: "12px",
    width: "320px",
  }}
/>`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<CopyTextGal
  command="git clone repo.git"
  theme="black"
  customStyle={{
    bg: "#1a0e2e",
    border: "#7c3aed",
    text: "#e9d5ff",
    buttonBg: "#2a1745",
    buttonBorder: "#7c3aed",
    success: "#c084fc",
    radius: "12px",
    width: "320px",
  }}
/>`,
          },
        ]}
      >
        <CopyTextGal
          command="git clone repo.git"
          theme="black"
          customStyle={{
            bg: "#1a0e2e",
            border: "#7c3aed",
            text: "#e9d5ff",
            buttonBg: "#2a1745",
            buttonBorder: "#7c3aed",
            success: "#c084fc",
            radius: "12px",
            width: "320px",
          }}
        />
      </ComponentPreviewGal>

      {/* Personalización con className */}
      <h2 className="titleSecundary">Personalización con className</h2>
      <p className="text">
        Con <span className="inline-code">className</span> puedes agregar una
        clase CSS propia al contenedor del componente, útil para ajustar
        márgenes, posición u otros estilos externos al componente.
      </p>
      <p className="note">Nota:</p>
      <p className="text">
        El tooltip "Copiado" se desvanece con la animación
        <span className="inline-code">ct-fade-up</span> definida en el SCSS del
        componente.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<CopyTextGal command="git clone repo.git" className="my-copy-text" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<CopyTextGal command="git clone repo.git" className="my-copy-text" />`,
          },
        ]}
      >
        <CopyTextGal command="git clone repo.git" className="my-copy-text" />
      </ComponentPreviewGal>

      <DocsPagination />
    </div>
  );
}
