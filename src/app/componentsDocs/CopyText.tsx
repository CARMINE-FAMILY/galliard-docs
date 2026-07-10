import { CopyTextGal } from "galliard-ui";
import { ComponentPreview } from "../../components/ComponentPreview";
import { DataTable } from "../../components/DataTable";
import type { PropRow } from "../../models/TableModel";
import { propsColumns } from "../../hooks/usePropsTableColumns";

export default function CopyText() {
  const contenidoProps: PropRow[] = [
    {
      name: "command",
      type: "string",
      description: "Texto o comando que se muestra y se copia al portapapeles.",
    },
  ];

  const aparienciaProps: PropRow[] = [
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

  const personalizacionProps: PropRow[] = [
    {
      name: "className",
      type: "string",
      description: "Clase CSS adicional aplicada al contenedor del componente.",
    },
  ];

  return (
    <div className="container doc-content">
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
        data={contenidoProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Apariencia</h3>
      <DataTable
        columns={propsColumns}
        data={aparienciaProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Personalización</h3>
      <DataTable
        columns={propsColumns}
        data={personalizacionProps}
        rowKey={(r) => r.name}
      />

      {/* Básico */}
      <h2 className="titleSecundaryButton">CopyText</h2>
      <p className="text">
        Ejemplo base del componente: solo se necesita
        <span className="inline-code">command</span>. Al hacer click en el
        botón, el texto se copia al portapapeles y el ícono cambia a un check
        por 2 segundos.
      </p>
      <ComponentPreview
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
      </ComponentPreview>

      {/* Temas */}
      <h2 className="titleSecundaryButton">Temas</h2>
      <p className="text">
        La prop <span className="inline-code">theme</span> define el tema de
        color del componente. Son los mismos 9 temas que usan CodeBlock y
        CollapsibleCode, para mantener coherencia visual entre ambos.
      </p>
      <ComponentPreview
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
      </ComponentPreview>

      {/* customStyle */}
      <h2 className="titleSecundaryButton">Personalización con customStyle</h2>
      <p className="text">
        Con <span className="inline-code">customStyle</span> puedes
        sobreescribir variables puntuales de un tema (por ejemplo el color de
        fondo o el ancho) sin definir un tema nuevo desde cero. Solo se aplican
        las llaves que mandes; el resto sigue tomando el valor del
        <span className="inline-code">theme</span> base.
      </p>
      <ComponentPreview
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
      </ComponentPreview>

      {/* Personalización con className */}
      <h2 className="titleSecundaryButton">Personalización con className</h2>
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
      <ComponentPreview
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
      </ComponentPreview>
    </div>
  );
}
