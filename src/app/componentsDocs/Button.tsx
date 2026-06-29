import { ButtonGal } from "galliard-ui";
import { ComponentPreview } from "../../components/ComponentPreview";

export default function Button() {
  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">Button</h1>

      <p className="text">
        El componente ButtonGal permite ejecutar acciones mediante la
        interacción del usuario. Ofrece soporte para temas, tamaños, bordes,
        sombras, íconos y estilos personalizados, permitiendo adaptarse a
        diferentes diseños de interfaz.
      </p>

      <h2 className="titleSecundary">Hola</h2>
      <p className="text">jajjajaj</p>
      <ComponentPreview
        theme="light"
        codeTabs={[
          {
            label: "JSX",
            language: "tsx",
            code: `<ButtonGal label="Default" styleType="ThemeDark" />`,
          },
        ]}
      >
        <ButtonGal label="Default" styleType="ThemeDark" />
      </ComponentPreview>
    </div>
  );
}