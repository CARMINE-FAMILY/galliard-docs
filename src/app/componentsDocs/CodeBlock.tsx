import { CodeBlockGal, ComponentPreviewGal } from "galliard-ui";
import { DataTable } from "../../components/table/DataTable";
import type { PropRow } from "../../models/TableModel";
import { propsColumns } from "../../hooks/usePropsTableColumns";
import { DocsPagination } from "../../components/generals/DocsPagination";

export default function CodeBlock() {
  const contentProps: PropRow[] = [
    {
      name: "tabs",
      type: "Codetab[]",
      description:
        "Lista de tabs de código a mostrar. Cada tab define su propio label, código, lenguaje y tema",
    },
    {
      name: "ClassName",
      type: "string",
      description: "Clase CSS adicional aplicada al contenedor principal",
    },
    {
      name: "hideHeaderIfSingleTab",
      type: "boolean",
      defaultValue: "false",
      description:
        "Si hay un solo tab y esto es true, oculta la fila del selector de tabs. El botón de copiar se mantiene visible",
    },
  ];

  const codeTabProps: PropRow[] = [
    {
      name: "label",
      type: "string",
      description:
        'Texto ques e muestra en el botón del tab (ej."JSX", "TSX").',
    },
    {
      name: "code",
      type: "string",
      description: "Código fuente a mostrar y copiar",
    },
    {
      name: "language",
      type: "tsx, ts, js, jsx, scss, bash",
      typePlain: true,
      description: "Lenguaje del código, usado para el resaltado de sintaxis",
    },
    {
      name: "theme",
      type: "CodeTheme",
      defaultValue: '"black"',
      description:
        "Tema de color para este tab.Cada tab puede tener su propio tema",
    },
    {
      name: "customTheme",
      type: "Partial<CodeThemeValues>",
      description: "Override parcial de colores/tipografia dolo para este tab",
    },
    {
      name: "collapsible",
      type: "boolean",
      defaultValue: "false",
      description:
        'Si true, el tab nace colapsado mostrando solo las primeras lineas, con un botón "Ver más".',
    },
    {
      name: "previewLines",
      type: "number",
      defaultValue: "8",
      description:
        "Cantidad de líneas visibles cuando el tab está colapsado. Solo aplica si collapsible es true",
    },
  ];

  const themesProps: PropRow[] = [
    {
      name: "CodeTheme",
      type: "black, light, dracula, orange, green, solarized-light, blue, yellow, red",
      typePlain: true,
      description: "Temas disponibles para colocar el bloque de código",
    },
  ];

  const themeValuesProps: PropRow[] = [
    {
      name: "bg",
      type: "string",
      description: "Color de fondo del bloque de código",
    },
    {
      name: "bgHeader",
      type: "string",
      description: "Color de fondo de la barra de tabs/header",
    },
    {
      name: "border",
      type: "string",
      description: "Color del borde del contenedor",
    },
    {
      name: "textMuted",
      type: "string",
      description: "Color de texto secundario (tabs inactivos, etc.)",
    },
    {
      name: "textActive",
      type: "string",
      description: "Color de texto del tab activo",
    },
    {
      name: "accent",
      type: "string",
      description: "Color de acento (indicador de tab activo, focus, etc.)",
    },
    {
      name: "success",
      type: "string",
      description: "Color usado para el estado de 'copiado' exitoso",
    },
    {
      name: "fadeFrom",
      type: "string",
      description: "Color inicial del degradado cuando el tab está colapsado",
    },
    {
      name: "fadeTo",
      type: "string",
      description: "Color final del degradado cuando el tab está colapsado",
    },
    {
      name: "buttonBg",
      type: "string",
      description: "Color de fondo del botón 'Ver más/menos'",
    },
    {
      name: "keyword",
      type: "string",
      description: "Color de palabras clave en el resaltado de sintaxis",
    },
    {
      name: "stringTexts",
      type: "string",
      description: "Color de strings en el resaltado de sintaxis",
    },
    { name: "comment", type: "string", description: "Color de comentarios" },
    {
      name: "function",
      type: "string",
      description: "Color de nombres de funciones",
    },
    {
      name: "type",
      type: "string",
      description: "Color de tipos (TypeScript)",
    },
    {
      name: "number",
      type: "string",
      description: "Color de valores numéricos",
    },
    { name: "operator", type: "string", description: "Color de operadores" },
    { name: "tag", type: "string", description: "Color de tags JSX/HTML" },
    {
      name: "attribute",
      type: "string",
      description: "Color de atributos JSX/HTML",
    },
    {
      name: "punctuation",
      type: "string",
      description: "Color de puntuación (llaves, comas, etc.)",
    },
    { name: "variable", type: "string", description: "Color de variables" },
    {
      name: "plain",
      type: "string",
      description: "Color de texto plano sin tokenizar",
    },
    {
      name: "fontSize",
      type: "string",
      description: "Tamaño de fuente del bloque de código",
    },
    {
      name: "lineHeight",
      type: "string",
      description: "Alto de línea del bloque de código",
    },
    {
      name: "padding",
      type: "string",
      description: "Padding interno del bloque de código",
    },
    {
      name: "radius",
      type: "string",
      description: "Border-radius del contenedor",
    },
    {
      name: "fontFamily",
      type: "string",
      description: "Familia tipográfica del código",
    },
  ];

  return (
    <div className="codeBlock-docs docs-content">
      <h1 className="titlePrimary">CodeBlock</h1>
      <p className="text">
        El componente CodeBlock muestra bloques de código con resaltado de
        sintaxis, soporte para múltiples tabs, botón de copiar, temas de color
        intercambiables y modo colapsable para fragmentos largos.
      </p>

      <h2 className="titleSecundary">Props</h2>
      <h3 className="subtitle">Contenido</h3>
      <DataTable
        columns={propsColumns}
        data={contentProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">CodeTab</h3>
      <p className="text">
        Cada elemento del array <span className="inline-code">tabs</span> es un
        objeto <span className="inline-code">CodeTab</span> con las siguientes
        propiedades:
      </p>
      <DataTable
        columns={propsColumns}
        data={codeTabProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Colores</h3>
      <DataTable
        columns={propsColumns}
        data={themesProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">customTheme (CodeThemeValues)</h3>
      <p className="text">
        Cualquiera de estas variables puede sobreescribirse parcialmente vía{" "}
        <span className="inline-code">customTheme</span>, sin necesidad de
        definir el objeto completo. Los valores no especificados toman el color
        del <span className="inline-code">theme</span> base.
      </p>
      <DataTable
        columns={propsColumns}
        data={themeValuesProps}
        rowKey={(r) => r.name}
      />

      {/* Básico */}
      <h2 className="titleSecundary">CodeBlock básico</h2>
      <p className="text">
        Ejemplo con un solo tab. Al haber un único tab, se recomienda usar{" "}
        <span className="inline-code">hideHeaderIfSingleTab</span> para ocultar
        el selector innecesario.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "TSX",
            language: "tsx",
            code: `<CodeBlockGal
  hideHeaderIfSingleTab
  tabs={[
    {
      label: "TypeScript",
      language: "ts",
      code: \`const saludo = (nombre: string) => \\\`Hola \\\${nombre}\\\`;\`,
    },
  ]}
/>`,
          },
        ]}
      >
        <CodeBlockGal
          hideHeaderIfSingleTab
          tabs={[
            {
              label: "TypeScript",
              language: "ts",
              code: `const saludo = (nombre: string) => \`Hola \${nombre}\`;`,
            },
          ]}
        />
      </ComponentPreviewGal>

      {/* Múltiples tabs */}
      <h2 className="titleSecundary">Múltiples tabs</h2>
      <p className="text">
        Cuando se pasa más de un tab, el header muestra el selector para
        alternar entre ellos. Cada tab puede tener su propio{" "}
        <span className="inline-code">language</span> y{" "}
        <span className="inline-code">theme</span>.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "TSX",
            language: "tsx",
            code: `<CodeBlockGal
  tabs={[
    {
      label: "JSX",
      language: "jsx",
      code: \`<Button label="Enviar" onClick={handleSubmit} />\`,
    },
    {
      label: "TSX",
      language: "tsx",
      code: \`<Button label="Enviar" onClick={handleSubmit} />\`,
    },
  ]}
/>`,
          },
        ]}
      >
        <CodeBlockGal
          tabs={[
            {
              label: "JSX",
              language: "jsx",
              code: `<Button label="Enviar" onClick={handleSubmit} />`,
            },
            {
              label: "TSX",
              language: "tsx",
              code: `<Button label="Enviar" onClick={handleSubmit} />`,
            },
          ]}
        />
      </ComponentPreviewGal>

      {/* Temas */}
      <h2 className="titleSecundary">Temas</h2>
      <p className="text">
        Con <span className="inline-code">theme</span> puedes cambiar la paleta
        de colores de cada tab de forma independiente.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "TSX",
            language: "tsx",
            code: `<CodeBlockGal
  hideHeaderIfSingleTab
  tabs={[
    {
      label: "Dracula",
      language: "ts",
      theme: "dracula",
      code: \`const activo = true;\`,
    },
  ]}
/>`,
          },
        ]}
      >
        <CodeBlockGal
          hideHeaderIfSingleTab
          tabs={[
            {
              label: "Dracula",
              language: "ts",
              theme: "dracula",
              code: `const activo = true;`,
            },
          ]}
        />
      </ComponentPreviewGal>

      {/* Colapsable */}
      <h2 className="titleSecundary">Colapsable</h2>
      <p className="text">
        Con <span className="inline-code">collapsible</span> el tab nace
        colapsado mostrando solo las primeras{" "}
        <span className="inline-code">previewLines</span> líneas, con un
        degradado y un botón para expandirlo.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "TSX",
            language: "tsx",
            code: `<CodeBlockGal
  hideHeaderIfSingleTab
  tabs={[
    {
      label: "Ejemplo largo",
      language: "ts",
      //Con este mandas a traer a collapsible
      collapsible: true,
      previewLines: 4,
      code: \`function ejemplo() {
  console.log("línea 1");
  console.log("línea 2");
  console.log("línea 3");
  console.log("línea 4");
  console.log("línea 5");
  console.log("línea 6");
}\`,
    },
  ]}
/>`,
          },
        ]}
      >
        <CodeBlockGal
          hideHeaderIfSingleTab
          tabs={[
            {
              label: "Ejemplo largo",
              language: "ts",
              collapsible: true,
              previewLines: 4,
              code: `function ejemplo() {
  console.log("línea 1");
  console.log("línea 2");
  console.log("línea 3");
  console.log("línea 4");
  console.log("línea 5");
  console.log("línea 6");
}`,
            },
          ]}
        />
      </ComponentPreviewGal>

      {/* customTheme */}
      <h2 className="titleSecundary">Tema personalizado</h2>
      <p className="text">
        Con <span className="inline-code">customTheme</span> puedes
        sobreescribir solo algunas variables de color del tema base, sin tener
        que definir la paleta completa.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "TSX",
            language: "tsx",
            code: `<CodeBlockGal
  hideHeaderIfSingleTab
  tabs={[
    {
      label: "Custom",
      language: "ts",
      theme: "black",
      customTheme: {
        accent: "#ff5c7a",
        keyword: "#ff5c7a",
      },
      code: \`const color = "personalizado";\`,
    },
  ]}
/>`,
          },
        ]}
      >
        <CodeBlockGal
          hideHeaderIfSingleTab
          tabs={[
            {
              label: "Custom",
              language: "ts",
              theme: "black",
              customTheme: {
                accent: "#ff5c7a",
                keyword: "#ff5c7a",
              },
              code: `const color = "personalizado";`,
            },
          ]}
        />
      </ComponentPreviewGal>

      {/* customTheme extendido */}
      <h2 className="titleSecundary">Personalizando varias variables</h2>
      <p className="text">
        Puedes combinar tantas variables de{" "}
        <span className="inline-code">CodeThemeValues</span> como necesites.
        Aquí se sobreescriben el fondo, el header, el borde y algunos colores de
        sintaxis para lograr una paleta completamente distinta al tema base.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "TSX",
            language: "tsx",
            code: `<CodeBlockGal
  hideHeaderIfSingleTab
  tabs={[
    {
      label: "Custom completo",
      language: "ts",
      theme: "black",
      customTheme: {
        bg: "#1a0e2e",
        bgHeader: "#2a1745",
        border: "#7c3aed",
        accent: "#c084fc",
        keyword: "#c084fc",
        stringTexts: "#a3e635",
        comment: "#8b7ba8",
      },
      code: \`// Paleta morada personalizada
const mensaje: string = "Hola mundo";\`,
    },
  ]}
/>`,
          },
        ]}
      >
        <CodeBlockGal
          hideHeaderIfSingleTab
          tabs={[
            {
              label: "Custom completo",
              language: "ts",
              theme: "black",
              customTheme: {
                bg: "#1a0e2e",
                bgHeader: "#2a1745",
                border: "#7c3aed",
                accent: "#c084fc",
                keyword: "#c084fc",
                stringTexts: "#a3e635",
                comment: "#8b7ba8",
              },
              code: `// Paleta morada personalizada
const mensaje: string = "Hola mundo";`,
            },
          ]}
        />
      </ComponentPreviewGal>

      <DocsPagination />
    </div>
  );
}
