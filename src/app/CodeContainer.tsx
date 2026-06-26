import { CodeBlock } from "../components/CodeBlock";

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
          { label: "Ejemplo", code: code, theme: "blue" },
          // {
          //   label: "Ejemplo",
          //   code: code,
          //   theme: "dracula",
          //   collapsible: true,
          //   previewLines: 10,
          // },
        ]}
      />
    </section>
  );
}
