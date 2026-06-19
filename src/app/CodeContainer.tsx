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

      <CodeBlock
        tabs={[
          {
            label: "Ejemplo",
            language: "tsx",
            code,
          },
        ]}
      />
    </section>
  );
}
