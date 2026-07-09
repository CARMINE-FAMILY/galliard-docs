import { useState } from "react";
import { TextAreaGal } from "galliard-ui";
import { ComponentPreview } from "../../../components/ComponentPreview";
import { DataTable } from "../../../components/DataTable";
import type { PropRow } from "../../../models/TableModel";
import { propsColumns } from "../../../hooks/usePropsTableColumns";

export default function TextArea() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");

  const contenidoPorps: PropRow[] = [
    {
      name: "label",
      type: "string",
      description: "Texto que se muestra encima del textarea",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Texto guía mostrado cuando el textarea está vacío",
    },
    {
      name: "value",
      type: "string",
      description: "Valor actual del textarea",
    },
    {
      name: "setValue",
      type: "(text: string) => void",
      description: "Mensaje de error que se muestra debajo del textarea",
    },
    {
      name: "errorMessage",
      type: "string",
      description: "Mensaje de error que se muestra debajo del textarea",
    },
  ];

  const comportamientoProps: PropRow[] = [
    {
      name: "maxCharacters",
      type: "number",
      defaultValue: "300",
      description: "Cantidad máxima de caracteres permitidos",
    },
    {
      name: "seeMaxCharCounter",
      type: "boolean",
      defaultValue: "true",
      description: "Muestra u oculta el contador de caracteres (actual/máximo)",
    },
    {
      name: "resize",
      type: "boolean",
      defaultValue: "true",
      description:
        "Permite o no redimensionar el textarea arrastrando desde la esquina",
    },
    {
      name: "args",
      type: "TextareaHTMLAttributes<HTMLTextAreaElement>",
      typePlain: true,
      description:
        "Props nativas adicionales que se pasan directo al <textarea>",
    },
  ];

  const aparienciaProps: PropRow[] = [
    {
      name: "width",
      type: "string ó number",
      defaultValue: "250",
      description: "Ancho inicial del textarea",
    },
    {
      name: "height",
      type: "string ó number",
      defaultValue: "100",
      description: "Alto inicial del textarea",
    },
    {
      name: "maxWidth",
      type: "string ó number",
      defaultValue: "500",
      description: "Ancho máximo al redimensionar",
    },
    {
      name: "maxHeight",
      type: "string ó number",
      defaultValue: "500",
      description: "Alto máximo al redimensionar",
    },
    {
      name: "rounded",
      type: "none,sm,md,lg",
      defaultValue: "lg",
      description: "Redondeo de las esquinas",
    },
    {
      name: "border",
      type: "boolean",
      defaultValue: "true",
      description: "Muestra u oculta el borde del textarea",
    },
    {
      name: "shadow",
      type: "boolean",
      description: "Aplica una sombra alrededor del textarea",
    },
    {
      name: "bgColor",
      type: "string",
      description: "Color de fondo del textarea",
    },
    {
      name: "textSize",
      type: "string ó number",
      description:
        "Tamaño de fuente compartido entre el label y el texto escrito",
    },
    {
      name: "textColor",
      type: "string",
      description: "Color compartido entre el label y el texto escrito",
    },
    {
      name: "font",
      type: "OpenSansLight, OpenSansRegular, OpenSansSemiBold, OpenSansBold, OpenSansBolder",
      typePlain: true,
      description: "Fuente utilizada para el texto escrito dentro del textarea",
    },
    {
      name: "fontLabel",
      type: "OpenSansLight, OpenSansRegular, OpenSansSemiBold, OpenSansBold, OpenSansBolder",
      typePlain: true,
      description: "Fuente utilizada para el label",
    },
  ];

  const iconosProps: PropRow[] = [
    {
      name: "seeIcon",
      type: "boolean",
      description: "Indica si se muestra el ícono junto al label",
    },
    {
      name: "icon",
      type: "string",
      defaultValue: '"mi:user"',
      description: "Identificador del ícono del label",
    },
    {
      name: "iconInRight",
      type: "boolean",
      defaultValue: "false",
      description:
        "Coloca el ícono a la derecha del label en vez de a la izquierda",
    },
    {
      name: "iconSize",
      type: "number",
      description: "Tamaño del ícono del label",
    },
    {
      name: "iconColor",
      type: "string",
      description: "Color del ícono del label",
    },
    {
      name: "customIcon",
      type: "React.ReactNode",
      description: "Reemplaza el ícono del label por un elemento personalizado",
    },
  ];

  const personalizacionProps: PropRow[] = [
    {
      name: "customContainerClass",
      type: "string",
      description: "Clase CSS adicional aplicada al contenedor del textarea",
    },
    {
      name: "customTextAreaClass",
      type: "string",
      description: "Clase CSS adicional aplicada al <textarea> nativo",
    },
    {
      name: "customIconClass",
      type: "string",
      description: "Clase CSS adicional aplicada al ícono del label",
    },
  ];

  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">TextArea</h1>
      <p className="text">
        El componente TextArea permite capturar texto libre de varias líneas,
        con contador de caracteres, límite máximo, redimensionado y estilos
        personalizables.
        <p className="note">Nota:</p>
        Este componente no tiene <span className="inline-code">labelSize</span>
        ni <span className="inline-code">textSize</span> y
        <span className="inline-code">textColor</span>
        controlan al mismo tiempo el label y el texto escrito dentro del
        textarea
      </p>

      <h2 className="titleSecundary">Props</h2>

      <h3 className="subtitle">Contenido</h3>
      <DataTable
        columns={propsColumns}
        data={contenidoPorps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Comportamiento</h3>
      <DataTable
        columns={propsColumns}
        data={comportamientoProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Apariencia</h3>
      <DataTable
        columns={propsColumns}
        data={aparienciaProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Iconos</h3>
      <DataTable
        columns={propsColumns}
        data={iconosProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Personalización</h3>
      <DataTable
        columns={propsColumns}
        data={personalizacionProps}
        rowKey={(r) => r.name}
      />

      {/* TextArea Basico */}
      <h2 className="titleSecundary">TextArea</h2>
      <p className="text">
        Ejemplo base del componente: un textarea simple, usando
        <span className="inline-code">value</span> y
        <span className="inline-code">setValue</span> para capturar lo que el
        usuario escribe
      </p>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
          const [value, setValue] = useState("");

          <TextAreaGal
            label="Comentarios"
            placeholder="Escribe tu comnetario"
            value={value}
            setValue={setValue}
          />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
          const [value, setValue] = useState<string>("");

          <TextAreaGal
            label="Comentarios"
            placeholder="Escribe tu comentario"
            value={value}
            setValue={setValue}
          />`,
          },
        ]}
      >
        <TextAreaGal
          label="Comentarios"
          placeholder="Escribe tu comentario"
          value={value1}
          setValue={setValue1}
        />
      </ComponentPreview>

      {/* Contador de caracteres */}
      <h2 className="titleSecundary">Limite y contador de caracteres</h2>
      <p className="text">
        Con <span className="inline-code">maxCharacters</span> defines cuántos
        caracteres puede escribir el usuario como máximo, y con
        <span className="inline-code">seeMaxCharCounter</span>
        muestras u ocultas el contador (actual/máximo) dentro del componente
      </p>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
            <TextAreaGal
            label="Máximo de 100 caracteres"
            maxCharacters={100}
            value={value}
            setValue={setValue}
          />
          <TextAreaGal
          label="Sin contador visible"
          seeMaxCharCounter={false}
          value={value}
          setValue={setValue}
          `,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
            <TextAreaGal
            label="Máximo de 100 caracteres"
            maxCharacters={100}
            value={value}
            setValue={setValue}
          />
          <TextAreaGal
          label="Sin contador visible"
          seeMaxCharCounter={false}
          value={value}
          setValue={setValue}
          `,
          },
        ]}
      >
        <TextAreaGal
          label="Máximo de 100 caracteres"
          maxCharacters={100}
          value={value2}
          setValue={setValue2}
        />
        <TextAreaGal
          label="Sin contador visible"
          seeMaxCharCounter={false}
          value={value2}
          setValue={setValue2}
        />
      </ComponentPreview>

      {/* Iconos */}
      <h2 className="titleSecundary">Ubicacion del ícono</h2>
      <p className="text">
        Con <span className="inline-code">seeIcon</span> e{" "}
        <span className="inline-code">icon</span> se agrega un ícono junto al
        label, y con <span className="inline-code">iconInRight</span>
        puedes colocarlo a la derecha del texto en vez de a la izquierda
      </p>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
          <TextAreaGal
            label:"Notas"
            seeIcon
            icon="tabler:note"
            value={value}
            setValue={setValue}
          />
          <TextAreaGal
            label:"Icono a la derecha"
            seeIcon
            icon="tabler:note"
            iconInRight
            value={value}
            setValue={setValue}
          />
          `,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
          <TextAreaGal
            label:"Notas"
            seeIcon
            icon="tabler:note"
            value={value}
            setValue={setValue}
          />
          <TextAreaGal
            label:"Icono a la derecha"
            seeIcon
            icon="tabler:note"
            iconInRight
            value={value}
            setValue={setValue}
          />
          `,
          },
        ]}
      >
        <TextAreaGal
          label="Notas"
          seeIcon
          icon="tabler:note"
          value={value3}
          setValue={setValue3}
        />
        <TextAreaGal
          label="Icono a la derecha"
          seeIcon
          icon="tabler:note"
          iconInRight
          value={value3}
          setValue={setValue3}
        />
      </ComponentPreview>

      {/* Tamaño y bordes */}
      <h2 className="titleSecundary">Tamaño y bordes</h2>
      <p className="text">
        Combinando <span className="inline-code">width</span>,
        <span className="inline-code">height</span>,
        <span className="inline-code">maxWidth</span>,
        <span className="inline-code">maxHeight</span>,
        <span className="inline-code">border</span>,
        <span className="inline-code">shadow</span> y
        <span className="inline-code">rounded</span> puedes ajustar las
        dimensiones, limites de redimensionado y el borde del textarea.
      </p>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
          <TextAreaGal label="Ancho" width={320} value={value} setValue={setValue} />
          <TextAreaGal label="Sin borde" border={false} value={value} setValue={setValue} />
          <TextAreaGal label="Con sombra" shadow value={value} setValue={setValue} />
          <TextAreaGal label="Redondeado" rounded="lg" value={value} setValue={setValue} />
          `,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
          <TextAreaGal label="Ancho" width={320} value={value} setValue={setValue} />
          <TextAreaGal label="Sin borde" border={false} value={value} setValue={setValue} />
          <TextAreaGal label="Con sombra" shadow value={value} setValue={setValue} />
          <TextAreaGal label="Redondeado" rounded="lg" value={value} setValue={setValue} />
          `,
          },
        ]}
      >
        <TextAreaGal
          label="Ancho"
          width={320}
          value={value4}
          setValue={setValue4}
        />
        <TextAreaGal
          label="Sin borde"
          border={false}
          value={value4}
          setValue={setValue4}
        />
        <TextAreaGal
          label="Con sombra"
          shadow
          value={value4}
          setValue={setValue4}
        />
        <TextAreaGal
          label="Redondeado"
          rounded="lg"
          value={value4}
          setValue={setValue4}
        />
      </ComponentPreview>

      {/* Error */}
      <h2 className="titleSecundary">Mensaje de error</h2>
      <p className="text">
        La prop <span className="inline-code">errorMessage</span> muestra un
        texto de validación debajo del textarea. Igual que en los demás
        componentes, TextArea no valida nada por sí mismo — depende de ti
        decidir cuándo mostrarlo.
      </p>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <TextAreaGal
          label="Comentarios"
          value={value}
          setValue={setValue}
          errorMessage="Este campo es obligatorio"
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <TextAreaGal
          label="Comentarios"
          value={value}
          setValue={setValue}
          errorMessage="Este campo es obligatorio"
        />`,
          },
        ]}
      >
        <TextAreaGal
          label="Comentarios"
          value={value5}
          setValue={setValue5}
          errorMessage="Este campo es obligatorio"
        />
      </ComponentPreview>

      {/* Personalización */}
      <h2 className="titleSecundary">Personalización de TextArea</h2>
      <p className="text">
        Para la personalización de TextArea se ocuparon las siguientes
        propiedades: <span className="inline-code">customContainerClass</span>,{" "}
        <span className="inline-code">customTextAreaClass</span> y{" "}
        <span className="inline-code">customIconClass</span>.
      </p>
      <p className="note">Nota:</p>
      <p className="text">
        Si los estilos personalizados no se aplican correctamente, puede deberse
        a que existen estilos con mayor prioridad. Para sobreescribirlos, puedes
        utilizar <span className="inline-code">!important</span>; una vez
        aplicado, verás que los estilos que seleccionaste se habrán aplicado.
      </p>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <TextAreaGal
          label="Comentarios"
          seeIcon
          icon="tabler:note"
          value={value}
          setValue={setValue}
          customContainerClass="textAreaDemo"
          customTextAreaClass="textAreaFieldDemo"
          customIconClass="textAreaIconDemo"
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <TextAreaGal
          label="Comentarios"
          seeIcon
          icon="tabler:note"
          value={value}
          setValue={setValue}
          customContainerClass="textAreaDemo"
          customTextAreaClass="textAreaFieldDemo"
          customIconClass="textAreaIconDemo"
        />`,
          },
        ]}
      >
        <TextAreaGal
          label="Comentarios"
          seeIcon
          icon="tabler:note"
          value={value6}
          setValue={setValue6}
          customContainerClass="textAreaDemo"
          customTextAreaClass="textAreaFieldDemo"
          customIconClass="textAreaIconDemo"
        />
      </ComponentPreview>
    </div>
  );
}
