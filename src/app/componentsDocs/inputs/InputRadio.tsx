import { useState } from "react";
import { InputRadioGal, ComponentPreviewGal } from "galliard-ui";
import { DataTable } from "../../../components/DataTable";
import type { PropRow } from "../../../models/TableModel";
import { propsColumns } from "../../../hooks/usePropsTableColumns";

export default function InputRadio() {
  const [radioValue1, setRadioValue1] = useState<string>("");
  const [radioValue2, setRadioValue2] = useState<string>("");
  const [radioValue3, setRadioValue3] = useState<string>("");
  const [radioValue4, setRadioValue4] = useState<string>("");
  const [radioValue5, setRadioValue5] = useState<string>("");

  const opciones = [
    { value: "yes", label: "Si" },
    { value: "no", label: "No" },
  ];

  const opcionesConIconos = [
    { value: "dog", label: "Perro", icon: "mdi:dog", seeIcon: true },
    { value: "cat", label: "Gato", icon: "mdi:cat", seeIcon: true },
    { value: "bird", label: "Ave", icon: "mdi:bird", seeIcon: true },
  ];

  const contenidoProps: PropRow[] = [
    {
      name: "label",
      type: "string",
      description: "Texto que se muestra encima del grupo de radios",
    },
    {
      name: "options",
      type: "RadioOptionModel[]",
      description: "Lista de opciones del grupo (value, label, icono, etc)",
    },
    {
      name: "setValue",
      type: "(value: string) => void",
      description: "Función que se ejecuta al seleccionar una opción",
    },
    {
      name: "name",
      type: "string",
      description:
        "Nombre del grupo de radios. Obligatorio para que el navegador agrupe correctamente las opciones",
    },
    {
      name: "errorMessage",
      type: "string",
      description: "Mensaje de error que se muestra debajo del grupo",
    },
  ];

  const comportamientoProps: PropRow[] = [
    {
      name: "HorV",
      type: '"horizontal" ó "vertical"',
      description: "Define si las opciones se acomodan en fila o en columna",
    },
    {
      name: "iconInRight",
      type: "boolean",
      description:
        "Coloca el ícono del label principal a la derecha del texto en vez de a la izquierda",
    },
  ];

  const aparienciaProps: PropRow[] = [
    {
      name: "labelSize",
      type: "string ó number",
      description: "Tamaño del label principal",
    },
    {
      name: "labelColor",
      type: "string",
      description: "Color del label principal",
    },
    {
      name: "textSize",
      type: "string ó number",
      description: "Tamaño del texto de cada opción",
    },
    {
      name: "textColor",
      type: "string",
      description: "Color del texto de cada opción",
    },
    {
      name: "font",
      type: "OpenSansLight, OpenSansRegular, OpenSansSemiBold, OpenSansBold, OpenSansBolder",
      typePlain: true,
      description: "Fuente utilizada para el texto de cada opción",
    },
    {
      name: "fontLabel",
      type: "OpenSansLight, OpenSansRegular, OpenSansSemiBold, OpenSansBold, OpenSansBolder",
      typePlain: true,
      description: "Fuente utilizada para el label principal",
    },
  ];

  const iconosProps: PropRow[] = [
    {
      name: "seeIcon",
      type: "boolean",
      defaultValue: "true",
      description: "Indica si se muestra el ícono del label principal",
    },
    {
      name: "icon",
      type: "string",
      defaultValue: '"mi:user"',
      description: "Identificador del ícono del label principal",
    },
    {
      name: "iconSize",
      type: "string ó number",
      description: "Color del ícono del label principal",
    },
    {
      name: "customIcon",
      type: "React.ReactNode",
      description:
        "Reemplaza el ícono del label principal por un elemento personalizado",
    },
  ];

  const opcionesModelProps: PropRow[] = [
    {
      name: "value",
      type: "string",
      description:
        "Valor real de la opción, el que recibe setValue al seleccionarla",
    },
    {
      name: "label",
      type: "string",
      description: "Texto mostrado junto al radio",
    },
    {
      name: "seeIcon",
      type: "string",
      description: "Indica si esta opción muestra su propio ícono",
    },
    {
      name: "icon",
      type: "string",
      description: "Identificador del ícono de esta opción",
    },
    {
      name: "iconColor",
      type: "string",
      description: "Color del ícono de esta opción",
    },
    {
      name: "customIcon",
      type: "React.ReactNode",
      description: "Clase CSS adicional aplicada al ícono de esta opción",
    },
    {
      name: "customIconClass",
      type: "string",
      description: "Clase CSS adicional aplicada al ícono de esta opción",
    },
  ];

  const personalizacionProps: PropRow[] = [
    {
      name: "customInputClass",
      type: "string",
      description: "Clase CSS adicional aplicada a cada <input type='radio'>",
    },
    {
      name: "customLabelClass",
      type: "string",
      description: "Clase CSS adicional aplicada al label de cada opción",
    },
    {
      name: "customTextClass",
      type: "string",
      description:
        "Clase CSS adicional aplicada al label principal (encabezado del grupo)",
    },
    {
      name: "customIconLabelClass",
      type: "string",
      description: "Clase CSS adicional aplicada al ícono del label principal",
    },
    {
      name: "customContainerRadiosClass",
      type: "string",
      description:
        "Clase CSS adicional aplicada al contenedor que envuelve todas las opciones",
    },
  ];

  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">InputRadio</h1>
      <p className="text">
        El componente InputRadio permite elegir una opción dentro de un grupo de
        opciones mutuamente excluyentes. Soporta orientación horizontal o
        vertical, íconos individuales por opción, y estilos completamente
        personalizables.
      </p>
      <p className="note">Nota:</p>
      <p className="text">
        Este componente no recibe una prop{" "}
        <span className="inline-code">value</span> para controlar la selección
        desde afuera, por lo que el estado visual de qué opción está marcada lo
        maneja el propio DOM. Si necesitas resetear la selección
        programáticamente, actualmente no es posible solo con{" "}
        <span className="inline-code">setValue</span>.
      </p>

      <h2 className="titleSecundary">Props</h2>

      <h3 className="subtitle">Contenido</h3>
      <DataTable
        columns={propsColumns}
        data={contenidoProps}
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

      <h3 className="subtitle">Modelo de cada opción (RadioOptionModel)</h3>
      <DataTable
        columns={propsColumns}
        data={opcionesModelProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Personalización</h3>
      <DataTable
        columns={propsColumns}
        data={personalizacionProps}
        rowKey={(r) => r.name}
      />

      {/* InputRadio básico */}
      <h2 className="titleSecundary">InputRadio</h2>
      <p className="text">
        Ejemplo de un grupo de opciones simples, sin icnonos ni personalización,
        usando
        <span className="inline-code">label</span>,
        <span className="inline-code">options</span> y
        <span className="inline-code">setValue</span>
        para capturar la opción seleccionda
      </p>
      <ComponentPreviewGal
        allowOverflow
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        const opciones = [
          { value: "yes", label: "Sí" },
          { value: "no", label: "No" },
        ];

        <InputRadioGal
          label="¿Aceptas los términos?"
          name="terminos"
          options={opciones}
          setValue={setValue}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        const opciones: RadioOptionModel[] = [
          { value: "yes", label: "Sí" },
          { value: "no", label: "No" },
        ];

        <InputRadioGal
          label="¿Aceptas los términos?"
          name="terminos"
          options={opciones}
          setValue={setValue}
        />`,
          },
        ]}
      >
        <InputRadioGal
          label="¿Aceptas los términos?"
          name="terminos"
          options={opciones}
          setValue={setRadioValue1}
        />
      </ComponentPreviewGal>

      {/* Orientación */}
      <h2 className="titleSecundary">Orientación</h2>
      <p className="text">
        La prop <span className="inline-code">HorV</span> define si las opciones
        se acomodan en fila (<span className="inline-code">"horizontal"</span>,
        valor por defecto) o en columna (
        <span className="inline-code">"vertical"</span>).
      </p>
      <ComponentPreviewGal
        allowOverflow
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <InputRadioGal label="Horizontal" name="horizontal" options={opciones} HorV="horizontal" setValue={setValue} />
        <InputRadioGal label="Vertical" name="vertical" options={opciones} HorV="vertical" setValue={setValue} />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <InputRadioGal label="Horizontal" name="horizontal" options={opciones} HorV="horizontal" setValue={setValue} />
        <InputRadioGal label="Vertical" name="vertical" options={opciones} HorV="vertical" setValue={setValue} />`,
          },
        ]}
      >
        <InputRadioGal
          label="Horizontal"
          name="horizontalDemo"
          options={opciones}
          HorV="horizontal"
          setValue={setRadioValue2}
        />
        <InputRadioGal
          label="Vertical"
          name="verticalDemo"
          options={opciones}
          HorV="vertical"
          setValue={setRadioValue2}
        />
      </ComponentPreviewGal>

      {/* Iconos por opción */}
      <h2 className="titleSecundary">Iconos por opción</h2>
      <p className="text">
        Cada opción dentro de <span className="inline-code">options</span> puede
        mostrar su propio ícono mediante
        <span className="inline-code">icon</span> activándolo con
        <span className="inline-code">seeIcon</span>. Si además quieres ajustar
        el tamaño, usa <span className="inline-code">iconSize</span>
      </p>
      <ComponentPreviewGal
        allowOverflow
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        const opcionesConIconos = [
          { value: "dog", label: "Perro", icon: "mdi:dog", seeIcon: true },
          { value: "cat", label: "Gato", icon: "mdi:cat", seeIcon: true },
          { value: "bird", label: "Ave", icon: "mdi:bird", seeIcon: true },
        ];

        <InputRadioGal
          label="Mascota favorita"
          name="mascota"
          options={opcionesConIconos}
          iconSize={22}
          setValue={setValue}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        const opcionesConIconos: RadioOptionModel[] = [
          { value: "dog", label: "Perro", icon: "mdi:dog", seeIcon: true },
          { value: "cat", label: "Gato", icon: "mdi:cat", seeIcon: true },
          { value: "bird", label: "Ave", icon: "mdi:bird", seeIcon: true },
        ];

        <InputRadioGal
          label="Mascota favorita"
          name="mascota"
          options={opcionesConIconos}
          iconSize={22}
          setValue={setValue}
        />`,
          },
        ]}
      >
        <InputRadioGal
          label="Mascota favorita"
          name="mascotaDemo"
          options={opcionesConIconos}
          iconSize={22}
          setValue={setRadioValue3}
        />
      </ComponentPreviewGal>

      {/* Apariencia */}
      <h2 className="titleSecundary">Tamaños y colores de texto</h2>
      <p className="text">
        Combinando
        <span className="inline-code">textSize</span>,
        <span className="inline-code">textColor</span>,
        <span className="inline-code">labelSize</span> y
        <span className="inline-code">labelColor</span>
        puedes ajustar independientemente el tamaño y color del texto de cada
        opción frente al del label principal
      </p>
      <ComponentPreviewGal
        allowOverflow
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <InputRadioGal
          label="Personalizado"
          name="personalizado"
          options={opciones}
          textSize="1.6em"
          textColor="#2aa198"
          labelSize="1.6em"
          labelColor="#2aa198"
          setValue={setValue}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <InputRadioGal
          label="Personalizado"
          name="personalizado"
          options={opciones}
          textSize="1.6em"
          textColor="#2aa198"
          labelSize="1.6em"
          labelColor="#2aa198"
          setValue={setValue}
        />`,
          },
        ]}
      >
        <InputRadioGal
          label="Personalizado"
          name="personalizadoDemo"
          options={opciones}
          textSize="1.6em"
          textColor="#2aa198"
          labelSize="1.6em"
          labelColor="#2aa198"
          setValue={setRadioValue4}
        />
      </ComponentPreviewGal>

      {/* Error */}
      <h2 className="titleSecundary">Mensaje de error</h2>
      <p className="text">
        La prop <span className="inline-code">errorMessage</span> muestra un
        texto de validación debajo del grupo de opciones. Ten en cuenta que:
        <ol>
          <li>1.- El componente no valida nada por si mismo</li>
          <li>2.- No detecta si el usuario ya seleccionó algo</li>
        </ol>
        El caso típico es validar al enviar un formulario: si el valor sigue
        vacío, pasas el mensaje; si ya hay una selección, pasas una cadena vacía
        para ocultarlo.
      </p>
      <ComponentPreviewGal
        allowOverflow
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <InputRadioGal
          label="¿Aceptas los términos?"
          name="terminosError"
          options={opciones}
          setValue={setValue}
          errorMessage="Debes seleccionar una opción"
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <InputRadioGal
          label="¿Aceptas los términos?"
          name="terminosError"
          options={opciones}
          setValue={setValue}
          errorMessage="Debes seleccionar una opción"
        />`,
          },
        ]}
      >
        <InputRadioGal
          label="¿Aceptas los términos?"
          name="terminosErrorDemo"
          options={opciones}
          setValue={setRadioValue5}
          errorMessage="Debes seleccionar una opción"
        />
      </ComponentPreviewGal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <a
          href="/componentsDocs/inputs/inputfile"
          style={{
            display: "block",
            padding: "1rem 1.25rem",
            border: "1px solid #d1d5db",
            borderRadius: "12px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              marginBottom: "0.5rem",
            }}
          >
            ← Anterior
          </div>
          <div
            style={{
              fontSize: "1.125rem",
              fontWeight: 600,
            }}
          >
            InputFile
          </div>
        </a>

        <a
          href="/componentsDocs/inputs/inputtext"
          style={{
            display: "block",
            padding: "1rem 1.25rem",
            border: "1px solid #d1d5db",
            borderRadius: "12px",
            textDecoration: "none",
            color: "inherit",
            textAlign: "right",
          }}
        >
          <div
            style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              marginBottom: "0.5rem",
            }}
          >
            Siguiente →
          </div>
          <div
            style={{
              fontSize: "1.125rem",
              fontWeight: 600,
            }}
          >
            InputText
          </div>
        </a>
      </div>
    </div>
  );
}
