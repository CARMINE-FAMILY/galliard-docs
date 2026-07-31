import { DocsPagination } from "../../components/generals/DocsPagination";
import "../../styles/getStartedDocs/_installation.scss";
import { CopyTextGal, CodeBlockGal } from "galliard-ui";

export const Installation = () => {
  const code = `import { ButtonGal } from 'galliard-ui';

const App = () => (
  <ButtonGal
    label="Cerrar sesión"
    action={() => handleLogout()}
    styleType="ThemeRed"
  />
);
`;

  const example = `<CopyTextGal
  label="Correo"
  iconLeft="tabler:mail-ai"
/>
`;

  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">Galliard UI</h1>

      <p className="text">
        Galliard UI es una librería de componentes React moderna, construida con
        TypeScript y Sass, diseñada para ser ligera, accesible, fácil de
        integrar y altamente personalizable para adecuarse a cada proyecto.
      </p>

      <h2 className="titleSecundary">🚀 Instalación</h2>

      <p className="text">
        Instala Galliard UI en tu proyecto usando tu gestor de paquetes
        favorito.
      </p>

      <p className="text">
        <strong>npm</strong>
      </p>

      <CopyTextGal command="npm install galliard-ui" theme="light" />

      <p className="text">
        <strong>yarn</strong>
      </p>

      <CopyTextGal command="yarn add galliard-ui" theme="light" />

      <h2 className="titleSecundary">🛠️ Uso Básico</h2>

      <p className="text">
        Una vez instalada la librería podrás importar los componentes para
        utilizarlos directamente en tu aplicación de React o Next.js.
      </p>

      <CodeBlockGal
        tabs={[
          {
            code,
            label: "Ejemplo de uso",
            theme: "blue",
            customTheme: { fontSize: "15px" },
          },
        ]}
      />

      <h2 className="titleSecundary">📦 Uso de YesIcon</h2>

      <p className="text">
        Algunos componentes de Galliard UI utilizan YesIcon. Para utilizarlos,
        sigue estos pasos:
      </p>

      <ol className="text">
        <li>Ingresa a YesIcon App y busca el ícono que deseas utilizar.</li>
        <li>
          Selecciona el ícono y elige <strong>React</strong> como lenguaje.
        </li>
        <li>
          Dentro de las opciones disponibles selecciona
          <strong> "Con @iconify/react"</strong>.
        </li>
        <li>
          Copia el nombre del ícono y utilízalo en la propiedad correspondiente
          del componente de Galliard UI.
        </li>
      </ol>

      <p className="text">Por ejemplo:</p>

      <CodeBlockGal
        tabs={[
          {
            code: example,
            label: "Ejemplo de uso",
            theme: "dracula",
            customTheme: { fontSize: "15px" },
          },
        ]}
      />

      <DocsPagination />
    </div>
  );
};
