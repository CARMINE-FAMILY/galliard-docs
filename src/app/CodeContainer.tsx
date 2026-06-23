import { CodeBlock } from "../components/CodeBlock";
import { CollapsibleCode } from "../components/CollapsibleCode";

export default function CodeExample() {
  const code = `import { ButtonGal, InputTextGal } from 'galliard-ui'

const App = () => (
  <div>
    <InputTextGal
      label="Email"
      placeholder="tu@email.com"
      typeInput="email"
      iconLeft="mi:mail"
    />

    <ButtonGal
      label="Cerrar sesion"
      action={() => handleLogout()}
      styleType="ThemeRed"
      icon="tabler:logout"
    />
  </div>
);
`;

  return (
    <section className="codeContainer">
      <div className="headerCodeContainer">
        <h1 className="title">Uso Basico</h1>
        <p className="subtitle">
          Importa los componentes y comienza a construir en segundos
        </p>
      </div>

      {/* Los 3 ejemplos juntos en un mismo CodeBlock, cada uno con su propio tema */}
      <CodeBlock
        tabs={[
          { label: "Ejemplo", language: "tsx", code, theme:"blue" },
          // {
          //   label: "Ejemplo con acento",
          //   language: "tsx",
          //   code,
          //   theme: "dracula",
          //   customTheme: {
          //     accent: "#ff0055",
          //     fontSize: "16px",
          //     bg:"#f7468a",
          //     string:"#B0e0e6"
          //   },
          // },
          // {
          //   label: "Ejemplo claro",
          //   language: "tsx",
          //   code,
          //   theme: "nord",
          //   customTheme: {
          //     bg: "#f0f4ff",
          //   },
          // },
        ]}
      />

      {/* <CollapsibleCode
        code={code}
        theme="black"
        customTheme={{ accent: "#ff0000" }}
      /> */}
    </section>
  );
}
