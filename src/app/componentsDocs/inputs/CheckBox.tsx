import { useState } from "react";
import { CheckBoxGal } from "galliard-ui";
import { ComponentPreview } from "../../../components/ComponentPreview";
import { DataTable } from "../../../components/DataTable";
import type { PropRow } from "../../../models/TableModel";
import { propsColumns } from "../../../hooks/usePropsTableColumns";

export default function CheckBox() {
  const [checked, setChecked] = useState<boolean>(false);

  const contenidoProps: PropRow[] = [
    {
      name: "label",
      type: "string",
      description: "Texto que se muestra junto al checkbox.",
    },
    {
      name: "value",
      type: "boolean",
      description: "Estado actual del checkbox (marcado o no).",
    },
    {
      name: "setValue",
      type: "(value:boolean) => void",
      description: "Mensaje de error que se muestra debajo del chekbox",
    },
  ];

  const aparienciaProps: PropRow[] = [
    {
      name: "textSize",
      type: "string",
      description: "Tamaño del texto del label",
    },
    {
      name: "textColor",
      type: "string",
      description: "Color del texto del label",
    },
    {
      name: "font",
      type: "OpenSans...",
      typePlain: true,
      description: "Fuente utilizada para el texto del label",
    },
  ];

  const iconosProps: PropRow[] = [
    {
      name: "seeIcon",
      type: "boolean",
      description: "Indica si se muestra el icono junto al checkbox",
    },
    {
        name: "icon",
        type: "string",
        defaultValue: '"mi:user"',
        description: "Identificador del icono obtenido desde YesIcon"
    },
    {
        name:"iconSize",
        type:"string ó number",
        description: "Tamaño del icono",
    },
    {
        name: "iconColor",
        type:"string",
        description:"Color del ícono",
    },
    {
        name:"customIcon",
        type:"React.ReactNode",
        description:"Reemplaza el ícono de YesIcon por un ejemplo personalizado",
    },
  ];

  const enlaceProps: PropRow[] = [
    {
        name: "useLinkable",
        type: "boolean",
        description: "Convierte el label en un enlace (por ejemplo, para 'Acepto los terminos y condiciones')"
    },
    {
        name:"link",
        type:"string",
        description:"URL a la que apunta el label cuando useLinkable está activo"
    },
  ];

  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">CheckBox</h1>
      <p className="text">
        El componente CheckBox permite capturar una selección booleana del
        usuario. Ofrece soporte para íconos personalizados, un label convertible
        en enlace, y estilos personalizados para adaptarse a diferentes diseños
        de interfaz.
      </p>

      <h2 className="titleSecundary">Props</h2>
      <h3 className="subtitle">Contenido</h3>
    </div>
  );
}
