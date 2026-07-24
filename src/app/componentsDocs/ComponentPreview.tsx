import { ComponentPreviewGal } from "galliard-ui";
import { DataTable } from "../../components/DataTable";
import type { PropRow } from "../../models/TableModel";
import { propsColumns } from "../../hooks/usePropsTableColumns";
import { DocsPagination } from "../../components/DocsPagination";

export default function ComponentPreview() {
  const contenidoProps: PropRow[] = [
    {
      name: "children",
      type: "ReactNode",
      description:
        'El componente real, montado en vivo dentro del tab "Vista previa".',
    },
    {
      name: "codeTabs",
      type: "PreviewCodeTab[]",
      description:
        "Lista de snippets de código a mostrar como tabs adicionales (ej. HTML, JSX, TSX)",
    },
    {
      name: "title",
      type: "string",
      description:
        "Título opcional, por si no se coloca ya fuera del componente",
    },
    {
      name: "previewLabel",
      type: "string",
      defaultValue: "Vista previa",
      description: "Texto del primer tab, el que muestra el componente en vivo",
    },
    {
      name: "className",
      type: "string",
      description: "Clase CSS adicional aplicada al contenedor pricipal",
    },
  ];

  const previewCodeTabProps: PropRow[] = [
    {
      name: "label",
      type: "string",
      description: "Texto que se muestra en el botón del tab",
    },
    {
      name: "code",
      type: "string",
      description: "Código fuente a mostrar en ese tab",
    },
    {
      name: "language",
      type: "tsx, ts, jsx, scss, bash",
      typePlain: true,
      description: "Lenguaje del código, usado para el resultado del sintaxis",
    },
  ];

  const temasProps: PropRow[] = [
    {
      name: "theme",
      type: "PreviewTheme",
      defaultValue: '"light"',
      description:
        'Tema compartido: aplica tanto al fondo del canvas de "Vista previa" como a los CodeBlock internos (a menos que se oase codeTheme',
    },
    {
      name: "customTheme",
      type: "Partial<PreviewThemeValues>",
      description:
        "Override parcial de las variables de color de fondo (bg, stripe). No afecta a los CodeBlock internos",
    },
    {
      name: "codeTheme",
      type: "PreviewTheme",
      description:
        "Tema independientes solo para los CodeBlock internos, distinto al del fondo del canvas",
    },
    {
      name: "codeCustomTheme",
      type: "Partial<CodeThemeValues>",
      description:
        "Override parcial de las variables de color de los CodeBlock internos",
    },
  ];

  const comportamientoProps: PropRow[] = [
    {
      name: "allowOverflow",
      type: "boolean",
      defaultValue: "true",
      description:
        "Si es true, el contenido del canvas puede salirse del contenedor (necesario para componentes como menús despegables). Si es false, el contenido se recorta",
    },
  ];

  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">ComponentPreview</h1>
      <p className="text">
        El componente ComponentPreview envuelve un componente en vivo junto con
        su codigo de ejemplo, mostrando ambos en tabs intercambiables; un tab de
        "Vista previa" con el componente renderizado, y uno o mása tabs de
        código (HTML, JSX, TSX, etc) usando internamnete
        <span className="inline-code">CodeBlockGal</span>
      </p>

      <h2 className="titleSecundary">Props</h2>
      <h3 className="subtitle">Contenido</h3>
      <DataTable
        columns={propsColumns}
        data={contenidoProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">PreviewCodeTab</h3>
      <p className="text">
        Cada elemento del array <span className="inline-code">codeTabs</span>
        es un objeto con las siguientes propiedades
      </p>
      <DataTable
        columns={propsColumns}
        data={previewCodeTabProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Temas</h3>
      <DataTable
        columns={propsColumns}
        data={temasProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Comportamiento</h3>
      <DataTable
        columns={propsColumns}
        data={comportamientoProps}
        rowKey={(r) => r.name}
      />

      {/* Básico */}
      <h2 className="titleSecundaryButton">ComponentPreview básico</h2>
      <p className="text">
        Ejemplo mínimo: un componente en vivo en el tab "Vista previa", y un tab
        de código mostrando cómo se usó.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "TSX",
            language: "tsx",
            code: `<ComponentPreviewGal
  codeTabs={[
    { label: "TSX", language: "tsx", code: '<button>Enviar</button>' },
  ]}
>
  <button>Enviar</button>
</ComponentPreviewGal>`,
          },
        ]}
      >
        <ComponentPreviewGal
          codeTabs={[
            { label: "TSX", language: "tsx", code: "<button>Enviar</button>" },
          ]}
        >
          <button>Enviar</button>
        </ComponentPreviewGal>
      </ComponentPreviewGal>

      {/* Múltiples tabs de código */}
      <h2 className="titleSecundaryButton">Múltiples tabs de código</h2>
      <p className="text">
        Puedes pasar varios elementos en
        <span className="inline-code">codeTabs</span> para mostrar el mismo
        ejemplo en distintos lenguajes o formatos.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "TSX",
            language: "tsx",
            code: `<ComponentPreviewGal
  codeTabs={[
    { label: "HTML", language: "bash", code: '<button>Enviar</button>' },
    { label: "JSX", language: "jsx", code: '<button>Enviar</button>' },
  ]}
>
  <button>Enviar</button>
</ComponentPreviewGal>`,
          },
        ]}
      >
        <ComponentPreviewGal
          codeTabs={[
            {
              label: "HTML",
              language: "bash",
              code: "<button>Enviar</button>",
            },
            { label: "JSX", language: "jsx", code: "<button>Enviar</button>" },
          ]}
        >
          <button>Enviar</button>
        </ComponentPreviewGal>
      </ComponentPreviewGal>

      {/* Tema del canvas */}
      <h2 className="titleSecundaryButton">Tema del canvas</h2>
      <p className="text">
        Con <span className="inline-code">theme</span> cambias el fondo del
        canvas de "Vista previa" y, por defecto, también el tema de los
        CodeBlock internos.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "TSX",
            language: "tsx",
            code: `<ComponentPreviewGal
  theme="dracula"
  codeTabs={[
    { label: "TSX", language: "tsx", code: '<button>Enviar</button>' },
  ]}
>
  <button>Enviar</button>
</ComponentPreviewGal>`,
          },
        ]}
      >
        <ComponentPreviewGal
          theme="dracula"
          codeTabs={[
            { label: "TSX", language: "tsx", code: "<button>Enviar</button>" },
          ]}
        >
          <button>Enviar</button>
        </ComponentPreviewGal>
      </ComponentPreviewGal>

      {/* Tema independiente para el código */}
      <h2 className="titleSecundaryButton">
        Tema independiente para el código
      </h2>
      <p className="text">
        Con <span className="inline-code">codeTheme</span> puedes usar un tema
        distinto para los CodeBlock internos, sin afectar el fondo del canvas de
        "Vista previa".
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "TSX",
            language: "tsx",
            code: `<ComponentPreviewGal
  theme="light"
  codeTheme="blue"
  codeTabs={[
    { label: "TSX", language: "tsx", code: '<button>Enviar</button>' },
  ]}
>
  <button>Enviar</button>
</ComponentPreviewGal>`,
          },
        ]}
      >
        <ComponentPreviewGal
          theme="light"
          codeTheme="blue"
          codeTabs={[
            { label: "TSX", language: "tsx", code: "<button>Enviar</button>" },
          ]}
        >
          <button>Enviar</button>
        </ComponentPreviewGal>
      </ComponentPreviewGal>

      {/* Tema personalizado */}
      <h2 className="titleSecundaryButton">Tema personalizado</h2>
      <p className="text">
        Con <span className="inline-code">customTheme</span> sobreescribes solo
        el fondo del canvas de "Vista previa" (
        <span className="inline-code">bg</span>,
        <span className="inline-code">stripe</span>), y con
        <span className="inline-code">codeCustomTheme</span> sobreescribes
        colores puntuales de los CodeBlock internos, sin tener que definir un
        tema completo.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "TSX",
            language: "tsx",
            code: `<ComponentPreviewGal
              customTheme={{ bg: "#0f172a", stripe: "#1e293b" }}
              codeCustomTheme={{ accent: "#f59e0b", keyword: "#f59e0b" }}
                codeTabs={[
                 { label: "TSX", language: "tsx", code: '<button>Enviar</button>' },
                 ]}
                >
                <button>Enviar</button>
            </ComponentPreviewGal>`,
          },
        ]}
      >
        <ComponentPreviewGal
          customTheme={{ bg: "#0f172a", stripe: "#1e293b" }}
          codeCustomTheme={{ accent: "#f59e0b", keyword: "#f59e0b" }}
          codeTabs={[
            { label: "TSX", language: "tsx", code: "<button>Enviar</button>" },
          ]}
        >
          <button>Enviar</button>
        </ComponentPreviewGal>
      </ComponentPreviewGal>

      <DocsPagination/>
    </div>
  );
}
