import { InputText } from "../../components/InputText";
import "../../styles/getStartedDocs/_installation.scss";

export const Installation = () => {
  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">
        ¿Cómo instalar la librería de Galliard UI?
      </h1>

      <h2 className="titleSecundary">Requisitos</h2>
      <p className="text">Necesitás Node.js 18+ y React 18+.</p>

      <h2 className="titleSecundary">Instalación</h2>
      <p className="text">Elegí tu gestor de paquetes preferido.</p>

      <h3 className="subtitle">Usando npm</h3>
      <InputText command="npm install galliard-ui" />

      <h3 className="subtitle">Usando yarn</h3>
      <InputText command="yarn add galliard-ui" />

      <h3 className="subtitle">Usando pnpm</h3>
      <InputText command="pnpm add galliard-ui" />

      <h2 className="titleSecundary">Configuración</h2>
      <p className="text">
        Importá los estilos base una sola vez en tu entrada principal.
      </p>

      <h3 className="subtitle">Tema por defecto</h3>
      <p className="text">
        Galliard UI viene con un tema base listo para usar.
      </p>

      <h3 className="subtitle">Personalizando el tema</h3>
      <p className="text">
        Podés sobreescribir las variables CSS para adaptarlo a tu marca.
      </p>
    </div>
  );
};
