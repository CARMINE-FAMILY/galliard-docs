import { DocsPagination } from "../../components/DocsPagination";
import "../../styles/getStartedDocs/_installation.scss";
import { CopyTextGal, CodeBlockGal } from "galliard-ui";

export const Installation = () => {
  const code = `import { ButtonGal } from 'galliard-ui';

const App = () => (
  <ButtonGal label="Cerrrar sesión" action={() => handleLogout()} styleType="ThemeRed"/>
);
`;

  const example = `<CopyTextGal
  label="Correo"
  iconLeft="tabler:mail-ai""
/>
`;
  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">Galliard UI</h1>

      <p className="text">
        Galliard UI es una libreria de componentes React moderna, construida con
        TypeScript y Sass, diseñada para ser ligera, accesible, facil de
        integrar y altamente personalizable para adecuarse a cada proyecto
      </p>

      <h2 className="titleSecundary">🚀 Instalación</h2>

      <p className="text">
        Instala Galliard Ui en tu proyecto usando tu gestor de paquetes
        favoritos
        <br />
        npm: <br />
        <CopyTextGal command="npm install galliard-ui" theme="light" />
        <br />
        yarn
        <br /> <CopyTextGal command="yarn add galliard-ui" theme="light" />
      </p>

      <h2 className="titleSecundary">🛠️ Uso Básico</h2>
      <p className="text">
        Una vez instalada la libreria ya podras importar los componentes para
        utilizarlos directamente en tu aplicación de React o Next.js:
        <CodeBlockGal
          tabs={[
            {
              code: code,
              label: "Ejemplo de uso",
              theme: "blue",
              customTheme: { fontSize: "15px" },
            },
          ]}
        />
      </p>

      <h2 className="titleSecundary">📦 Uso de YesIcon</h2>
      <p className="text">
        Algunos componentes de Galliard UI utilizan Yesicon. Para utilizarlos,
        sigue estos pasos: <br />
        <ol>
          <li className="text">
            1.- Ingresa a YesIcon App y busca el ícono que deseas utilizar.
          </li>
          <li className="text">
            2.- Selecciona el ícono y elige React como lenguaje.
          </li>
          <li className="text">
            3.- Dentro de las opciones disponibles, selecciona "Con
            @iconify/react".
          </li>
          <li className="text">
            4.- Copia el nombre del ícono y utilízalo en la propiedad
            correspondiente del componente de Galliard UI.
          </li>
        </ol>
        Por Ejemplo:
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
      </p>
      <DocsPagination/>
    </div>
  );
};
