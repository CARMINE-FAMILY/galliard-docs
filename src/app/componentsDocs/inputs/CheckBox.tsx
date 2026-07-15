import { useState } from "react";
import { CheckBoxGal, ComponentPreviewGal } from "galliard-ui";
import { DataTable } from "../../../components/DataTable";
import type { PropRow } from "../../../models/TableModel";
import { propsColumns } from "../../../hooks/usePropsTableColumns";

type CheckKey =
  | "base"
  | "iconoBase"
  | "iconoColor"
  | "iconoGrande"
  | "sinIcono"
  | "enlace"
  | "error"
  | "tipografia1"
  | "tipografia2"
  | "tipografia3"
  | "custom";

export default function CheckBox() {
  const [checks, setChecks] = useState<Record<CheckKey, boolean>>({
    base: false,
    iconoBase: false,
    iconoColor: false,
    iconoGrande: false,
    sinIcono: false,
    enlace: false,
    error: false,
    tipografia1: false,
    tipografia2: false,
    tipografia3: false,
    custom: false,
  });

  const setCheck = (key: CheckKey) => (value: boolean) =>
    setChecks((prev) => ({ ...prev, [key]: value }));

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
    {
      name: "errorMessage",
      type: "string",
      description: "Mensaje de error que se muestra debajo del checkbox",
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
      type: "OpenSansLight, OpenSansRegular, OpenSansSemiBold, OpenSansBold, OpenSansBolder",
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
      description: "Identificador del icono obtenido desde YesIcon",
    },
    {
      name: "iconSize",
      type: "string ó number",
      description: "Tamaño del icono",
    },
    {
      name: "iconColor",
      type: "string",
      description: "Color del ícono",
    },
    {
      name: "customIcon",
      type: "React.ReactNode",
      description: "Reemplaza el ícono de YesIcon por un ejemplo personalizado",
    },
  ];

  const enlaceProps: PropRow[] = [
    {
      name: "useLinkable",
      type: "boolean",
      description:
        "Convierte el label en un enlace (por ejemplo, para 'Acepto los terminos y condiciones')",
    },
    {
      name: "link",
      type: "string",
      description:
        "URL a la que apunta el label cuando useLinkable está activo",
    },
  ];

  const personalizacionProps: PropRow[] = [
    {
      name: "customInputClass",
      type: "string",
      description: "Clase CSS adicional aplicada al input",
    },
    {
      name: "customLabelClass",
      type: "string",
      description: "Clase CSS adicional aplicada al label",
    },
    {
      name: "customIconClass",
      type: "string",
      description: "Clase CSS adicional aplicada al icono",
    },
    {
      name: "args",
      type: "InputHTMLAttributes<HTMLInputElement>",
      description: (
        <>
          Permite agregar atributos nativos del elemento
          <code>&lt;input&gt;</code>, como <code>disabled</code>,
          <code>name</code> o <code>aria-label</code>
        </>
      ),
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
      <DataTable
        columns={propsColumns}
        data={contenidoProps}
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

      <h3 className="subtitle">Enlaces</h3>
      <DataTable
        columns={propsColumns}
        data={enlaceProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Personalización</h3>
      <DataTable
        columns={propsColumns}
        data={personalizacionProps}
        rowKey={(r) => r.name}
      />

      {/* CheckBox */}
      <h2 className="titleSecundaryButton">CheckBox</h2>
      <p className="text">
        Ejemplo base del componente: un checkbox simple, usando{" "}
        <span className="inline-code">value</span> y{" "}
        <span className="inline-code">setValue</span> para controlar si está
        marcado o no.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <CheckBoxGal
          label="Acepto"
          value={checked}
          setValue={setChecked}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <CheckBoxGal
          label="Acepto"
          value={checked}
          setValue={setChecked}
        />`,
          },
        ]}
      >
        <CheckBoxGal
          label="Acepto"
          value={checks.base}
          setValue={setCheck("base")}
        />
      </ComponentPreviewGal>

      {/* Iconos */}
      <h2 className="titleSecundaryButton">Diseño de Iconos</h2>
      <p className="text">
        Con <span className="inline-code">seeIcon</span> se muestra u oculta el
        ícono dentro del checkbox marcado. Usa{" "}
        <span className="inline-code">icon</span> para cambiar el ícono por
        defecto, y <span className="inline-code">iconColor</span> /{" "}
        <span className="inline-code">iconSize</span> para ajustar su color y
        tamaño.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <CheckBoxGal label="Con icono" seeIcon icon="tabler:check" />
        <CheckBoxGal label="Icono a color" seeIcon icon="tabler:check" iconColor="#2aa198" />
        <CheckBoxGal label="Icono grande" seeIcon icon="tabler:check" iconSize="26px" />
        <CheckBoxGal label="Sin icono" seeIcon={false} />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <CheckBoxGal label="Con icono" seeIcon icon="tabler:check" />
        <CheckBoxGal label="Icono a color" seeIcon icon="tabler:check" iconColor="#2aa198" />
        <CheckBoxGal label="Icono grande" seeIcon icon="tabler:check" iconSize="26px" />
        <CheckBoxGal label="Sin icono" seeIcon={false} />`,
          },
        ]}
      >
        <CheckBoxGal
          label="Con icono"
          value={checks.iconoBase}
          setValue={setCheck("iconoBase")}
          seeIcon
          icon="tabler:check"
        />
        <CheckBoxGal
          label="Icono a color"
          value={checks.iconoColor}
          setValue={setCheck("iconoColor")}
          seeIcon
          icon="tabler:check"
          iconColor="#2aa198"
        />
        <CheckBoxGal
          label="Icono grande"
          value={checks.iconoGrande}
          setValue={setCheck("iconoGrande")}
          seeIcon
          icon="tabler:check"
          iconSize="26px"
        />
        <CheckBoxGal
          label="Sin icono"
          value={checks.sinIcono}
          setValue={setCheck("sinIcono")}
          seeIcon={false}
        />
      </ComponentPreviewGal>

      {/* Enlace */}
      <h2 className="titleSecundaryButton">Label como enlace</h2>
      <p className="text">
        Útil para casos como "Acepto los términos y condiciones", donde el texto
        debe funcionar como link en vez de solo describir el checkbox. Se activa
        con <span className="inline-code">useLinkable</span> y{" "}
        <span className="inline-code">link</span>.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <CheckBoxGal
          label="Acepto los términos y condiciones"
          useLinkable
          link="tu link"
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <CheckBoxGal
          label="Acepto los términos y condiciones"
          useLinkable
          link="tu link"
        />`,
          },
        ]}
      >
        <CheckBoxGal
          label="Acepto los términos y condiciones"
          value={checks.enlace}
          setValue={setCheck("enlace")}
          useLinkable
          link="https://www.bing.com/ck/a?!&&p=327161dec17d8c3f1ca84cfdcebb3609d1760c9661e912b6fd047a3907295bedJmltdHM9MTc4MzAzNjgwMA&ptn=3&ver=2&hsh=4&fclid=25f0258f-2714-62ae-2ce3-32c026b56397&psq=yesicon+app&u=a1aHR0cHM6Ly95ZXNpY29uLmFwcC8"
        />
      </ComponentPreviewGal>

      {/* Error */}
      <h2 className="titleSecundaryButton">Mensaje de error</h2>
      <p className="text">
        La prop <span className="inline-code">errorMessage</span> muestra un
        texto de validación debajo del checkbox. Igual que en los demás
        componentes, CheckBox no valida nada por sí mismo — depende de ti
        decidir cuándo mostrarlo.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <CheckBoxGal
          label="Acepto"
          errorMessage="Debes aceptar para continuar"
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <CheckBoxGal
          label="Acepto"
          errorMessage="Debes aceptar para continuar"
        />`,
          },
        ]}
      >
        <CheckBoxGal
          label="Acepto"
          value={checks.error}
          setValue={setCheck("error")}
          textSize={25}
          errorMessage="Acepta para continuar"
        />
      </ComponentPreviewGal>

      {/* Tipografía */}
      <h2 className="titleSecundaryButton">Tipografía</h2>
      <p className="text">
        Con <span className="inline-code">font</span> y{" "}
        <span className="inline-code">textSize</span> puedes ajustar la fuente y
        el tamaño del texto del label.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <CheckBoxGal label="OpenSansRegular" font="OpenSansRegular" />
        <CheckBoxGal label="TextoGrande" textSize="20px" />
        <CheckBoxGal label="Georgia" font="Georgia" textSize="18px" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <CheckBoxGal label="OpenSansRegular" font="OpenSansRegular" />
        <CheckBoxGal label="TextoGrande" textSize="20px" />
        <CheckBoxGal label="Georgia" font="Georgia" textSize="18px" />`,
          },
        ]}
      >
        <CheckBoxGal
          label="OpenSansRegular"
          value={checks.tipografia1}
          setValue={setCheck("tipografia1")}
          font="OpenSansRegular"
        />
        <CheckBoxGal
          label="TextoGrande"
          value={checks.tipografia2}
          setValue={setCheck("tipografia2")}
          textSize="20px"
        />
        <CheckBoxGal
          label="Georgia"
          value={checks.tipografia3}
          setValue={setCheck("tipografia3")}
          font="Georgia"
          textSize="18px"
        />
      </ComponentPreviewGal>

      {/* Personalización del checkbox */}
      <h2 className="titleSecundaryButton">Personalización del checkbox</h2>
      <p className="text">
        Para la personalización del checkbox se ocuparon las siguientes
        propiedades: <span className="inline-code">label</span>,
        <span className="inline-code">icon</span>,
        <span className="inline-code">iconColor</span>,
        <span className="inline-code">textColor</span>,
        <span className="inline-code">customInputClass</span>,
        <span className="inline-code">customLabelClass</span> y
        <span className="inline-code">customIconClass</span>.
      </p>
      <p className="note">Nota:</p>
      <p className="text">
        Si los estilos personalizados no se aplican correctamente en el
        checkbox, puede deberse a que existen estilos con mayor prioridad. Para
        sobreescribirlos, puedes utilizar
        <span className="inline-code">!important</span>
        una vez ya aplicado, verás que los estilos que seleccionas se habrán
        aplicado
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <CheckBoxGal
          label="Acepto los términos"
          value={checked}
          setValue={setChecked}
          seeIcon
          icon="tabler:check"
          iconColor="#2aa198"
          textColor="#000000"
          customInputClass="input"
          customLabelClass="label"
          customIconClass="icon"
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <CheckBoxGal
          label="Acepto los términos"
          value={checked}
          setValue={setChecked}
          seeIcon
          icon="tabler:check"
          iconColor="#2aa198"
          textColor="#000000"
          customInputClass="input"
          customLabelClass="label"
          customIconClass="icon"
        />`,
          },
        ]}
      >
        <CheckBoxGal
          label="Acepto los términos"
          value={checks.custom}
          setValue={setCheck("custom")}
          seeIcon
          icon="tabler:check"
          iconColor="#2aa198"
          textColor="#000000"
          customInputClass="input"
          customLabelClass="label"
          customIconClass="icon"
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
          href="/componentsDocs/button"
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
            Button
          </div>
        </a>

        <a
          href="/componentsDocs/inputs/dropdown"
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
            DropDown
          </div>
        </a>
      </div>
    </div>
  );
}
