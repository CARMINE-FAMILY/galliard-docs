import { ButtonGal } from "galliard-ui";
import { ComponentPreview } from "../../components/ComponentPreview";
import { DataTable } from "../../components/DataTable";
import type { PropRow } from "../../models/TableModel";
import { useClassNameColumns } from "../../hooks/useClassNameColumns";
import type { ClassNameRow } from "../../models/TableModel";
import { propsColumns } from "../../hooks/usePropsTableColumns";

export default function Button() {
  const classNameColumns = useClassNameColumns();

  const contenidoProps: PropRow[] = [
    {
      name: "label",
      type: "string",
      defaultValue: '"Texto del Botón"',
      description: "Texto que se muestra en el botón.",
    },
    {
      name: "action",
      type: "() => void",
      defaultValue: 'alert("Botón presionado")',
      description: "Función que se ejecuta al hacer clic sobre el botón.",
    },
  ];

  const aparienciaProps: PropRow[] = [
    {
      name: "styleType",
      type: "ThemeDark, ThemeLight, ThemeGreen, ThemeRed, ThemeBlue, ThemeYellow, ThemePurple, ThemeGray",
      defaultValue: "ThemeDark",
      description: "Define el tema visual del botón.",
    },
    {
      name: "bgColor",
      type: "string",
      description: "Color de fondo personalizado.",
    },
    { name: "txtColor", type: "string", description: "Color del texto." },
    {
      name: "font",
      type: "OpenSans...",
      typePlain: true,
      description: "Fuente utilizada para el texto.",
    },
    {
      name: "textSize",
      type: "string ó number",
      description: "Tamaño del texto.",
    },
    {
      name: "width",
      type: "string ó number",
      defaultValue: "auto",
      description: "Ancho del botón.",
    },
    {
      name: "height",
      type: "string ó number",
      defaultValue: "auto",
      description: "Alto del botón.",
    },
    {
      name: "padding",
      type: "string ó number",
      description: "Espaciado interno.",
    },
    {
      name: "rounded",
      type: "none, sm, md, lg, full",
      defaultValue: "md",
      description: "Redondeo de las esquinas.",
    },
    {
      name: "borderedStyle",
      type: "boolean",
      defaultValue: "false",
      description: "Aplica un estilo con borde.",
    },
  ];

  const iconosProps: PropRow[] = [
    {
      name: "seeIcon",
      type: "boolean",
      defaultValue: "true",
      description: "Indica si se muestra el ícono en el botón.",
    },
    {
      name: "icon",
      type: "string",
      defaultValue: '"tabler:send"',
      description: "Identificador del ícono obtenido desde YesIcon.",
    },
    {
      name: "iconOn",
      type: '"left" ó "right"',
      defaultValue: '"right"',
      description: "Define la posición del ícono respecto al texto.",
    },
    {
      name: "iconSize",
      type: "string ó number",
      description: "Especifica el tamaño del ícono.",
    },
    {
      name: "iconColor",
      type: "string",
      description: "Define el color del ícono.",
    },
    {
      name: "customIcon",
      type: "React.ReactNode",
      description:
        "Reemplaza el ícono de YesIcon por un elemento personalizado.",
    },
  ];

  const sombrasProps: PropRow[] = [
    {
      name: "shadow",
      type: "boolean",
      defaultValue: "false",
      description: "Activa una sombra alrededor del botón.",
    },
    {
      name: "colorShadow",
      type: "string",
      defaultValue: "#000",
      description: "Color de la sombra aplicada al botón.",
    },
  ];

  const personalizacionProps: PropRow[] = [
    {
      name: "customClassButton",
      type: "string",
      description: "Clase CSS adicional aplicada al botón.",
    },
    {
      name: "customClassLabel",
      type: "string",
      description: "Clase CSS adicional aplicada al texto.",
    },
    {
      name: "customClassIcon",
      type: "string",
      description: "Clase CSS adicional aplicada al ícono.",
    },
    {
      name: "args",
      type: "ButtonHTMLAttributes<HTMLButtonElement>",
      description: (
        <>
          Permite agregar atributos nativos del elemento{" "}
          <code>&lt;button&gt;</code>, como <code>disabled</code>,{" "}
          <code>type</code>, <code>name</code> o <code>aria-label</code>.
        </>
      ),
    },
  ];
  return (
     <div className="container doc-content">
      <h1 className="titlePrimary">Button</h1>

      <p className="text">
        El componente ButtonGal permite ejecutar acciones mediante la
        interacción del usuario. Ofrece soporte para temas, tamaños, bordes,
        sombras, íconos y estilos personalizados, permitiendo adaptarse a
        diferentes diseños de interfaz.
      </p>

      <h2 className="titleSecundary">Props</h2>

      <h3 className="subtitle">Contenido</h3>
      <DataTable columns={propsColumns} data={contenidoProps} rowKey={(r) => r.name} />

      <h3 className="subtitle">Apariencia</h3>
      <DataTable columns={propsColumns} data={aparienciaProps} rowKey={(r) => r.name} />

      <h3 className="subtitle">Iconos</h3>
      <DataTable columns={propsColumns} data={iconosProps} rowKey={(r) => r.name} />

      <h3 className="subtitle">Sombras</h3>
      <DataTable columns={propsColumns} data={sombrasProps} rowKey={(r) => r.name} />

      <h3 className="subtitle">Personalización</h3>
      <DataTable columns={propsColumns} data={personalizacionProps} rowKey={(r) => r.name} />

      {/* Botón */}
      <h2 className="titleSecundary">Botón</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<ButtonGal label="Button" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<ButtonGal label="Button" />`,
          },
        ]}
      >
        <ButtonGal label="Button" />
      </ComponentPreview>

      {/* Colores */}
      <h2 className="titleSecundary">Colores que hay por defecto</h2>
      <p className="text">
        Estos son los colores que hay, si quieres poner otro color lo puedes
        hacer
      </p>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal label="ThemeDark"/>
        <ButtonGal label="ThemeLight" styleType="ThemeLight"/>
        <ButtonGal label="ThemeGreen" styleType="ThemeGreen"/>
        <ButtonGal label="ThemeRed" styleType="ThemeRed"/>
        <ButtonGal label="ThemeBlue" styleType="ThemeBlue"/>
        <ButtonGal label="ThemeYellow" styleType="ThemeYellow"/>
        <ButtonGal label="ThemePurple" styleType="ThemePurple"/>
        <ButtonGal label="ThemeGray" styleType="ThemeGray"/>
        <ButtonGal label="ColorDiferente" bgColor="#2aa198" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal label="ThemeDark"/>
        <ButtonGal label="ThemeLight" styleType="ThemeLight"/>
        <ButtonGal label="ThemeGreen" styleType="ThemeGreen"/>
        <ButtonGal label="ThemeRed" styleType="ThemeRed"/>
        <ButtonGal label="ThemeBlue" styleType="ThemeBlue"/>
        <ButtonGal label="ThemeYellow" styleType="ThemeYellow"/>
        <ButtonGal label="ThemePurple" styleType="ThemePurple"/>
        <ButtonGal label="ThemeGray" styleType="ThemeGray"/>
        <ButtonGal label="ColorDiferente" bgColor="#2aa198" />`,
          },
        ]}
      >
        <ButtonGal label="ThemeDark" />
        <ButtonGal label="ThemeLight" styleType="ThemeLight" />
        <ButtonGal label="ThemeGreen" styleType="ThemeGreen" />
        <ButtonGal label="ThemeRed" styleType="ThemeRed" />
        <ButtonGal label="ThemeBlue" styleType="ThemeBlue" />
        <ButtonGal label="ThemeYellow" styleType="ThemeYellow" />
        <ButtonGal label="ThemePurple" styleType="ThemePurple" />
        <ButtonGal label="ThemeGray" styleType="ThemeGray" />
        <ButtonGal label="ColorDiferente" bgColor="#2aa198" />
      </ComponentPreview>

      {/* Tamaño del Botón */}
      <h2 className="titleSecundary">Tamaño del Botón</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal label="TamañoNormal" />
        <ButtonGal label="HeightyWidth" width="220px" height="55px" />
        <ButtonGal label="TamañoDelTexto" textSize="18px" />
        <ButtonGal label="Padding" padding="20px 35px" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal label="TamañoNormal" />
        <ButtonGal label="HeightyWidth" width="220px" height="55px" />
        <ButtonGal label="TamañoDelTexto" textSize="18px" />
        <ButtonGal label="Padding" padding="20px 35px" />`,
          },
        ]}
      >
        <ButtonGal label="TamañoNormal" />
        <ButtonGal label="HeightyWidth" width="220px" height="55px" />
        <ButtonGal label="TamañoDelTexto" textSize="18px" />
        <ButtonGal label="Padding" padding="20px 35px" />
      </ComponentPreview>

      {/* Iconos */}
      <h2 className="titleSecundary">Diseño de Iconos</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal label="Descargar" icon="tabler:download" />
        <ButtonGal label="Eliminar" icon="tabler:trash" iconColor="red" />
        <ButtonGal label="Configuración" icon="tabler:settings" iconSize="26px" />
        <ButtonGal label="Sin icono" seeIcon={false} />
        <ButtonGal
          label="Gif"
          customIcon={
            <img
              src="https://c.tenor.com/ce1sLbXLif8AAAAM/la-roca.gif"
              style={{width:"5rem", height:"5rem", objectFit:"cover", borderRadius:"50%"}}
            />
          }
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal label="Descargar" icon="tabler:download" />
        <ButtonGal label="Eliminar" icon="tabler:trash" iconColor="red" />
        <ButtonGal label="Configuración" icon="tabler:settings" iconSize="26px" />
        <ButtonGal label="Sin icono" seeIcon={false} />
        <ButtonGal
          label="Gif"
          customIcon={
            <img
              src="https://c.tenor.com/ce1sLbXLif8AAAAM/la-roca.gif"
              style={{width:"5rem", height:"5rem", objectFit:"cover", borderRadius:"50%"}}
            />
          }
        />`,
          },
        ]}
      >
        <ButtonGal label="Descargar" icon="tabler:download" />
        <ButtonGal label="Eliminar" icon="tabler:trash" iconColor="red" />
        <ButtonGal
          label="Configuración"
          icon="tabler:settings"
          iconSize="26px"
        />
        <ButtonGal label="Sin icono" seeIcon={false} />
        <ButtonGal
          label="Gif"
          customIcon={
            <img
              src="https://c.tenor.com/ce1sLbXLif8AAAAM/la-roca.gif"
              style={{
                width: "5rem",
                height: "5rem",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          }
        />
      </ComponentPreview>

      {/* Posición del icono */}
      <h2 className="titleSecundary">Posición del icono</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal label="Izquierda" iconOn="left" />
        <ButtonGal label="Derecha" iconOn="right" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal label="Izquierda" iconOn="left" />
        <ButtonGal label="Derecha" iconOn="right" />`,
          },
        ]}
      >
        <ButtonGal label="Izquierda" iconOn="left" />
        <ButtonGal label="Derecha" iconOn="right" />
      </ComponentPreview>

      {/* Bordes */}
      <h2 className="titleSecundary">Bordes</h2>
      <p className="text">
        El nombre de los botones son los diferentes tamaños que son posibles
      </p>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal label="none" rounded="none" />
        <ButtonGal label="sm" rounded="sm" />
        <ButtonGal label="md" rounded="md" />
        <ButtonGal label="lg" rounded="lg" />
        <ButtonGal label="full" rounded="full" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal label="none" rounded="none" />
        <ButtonGal label="sm" rounded="sm" />
        <ButtonGal label="md" rounded="md" />
        <ButtonGal label="lg" rounded="lg" />
        <ButtonGal label="full" rounded="full" />`,
          },
        ]}
      >
        <ButtonGal label="none" rounded="none" />
        <ButtonGal label="sm" rounded="sm" />
        <ButtonGal label="md" rounded="md" />
        <ButtonGal label="lg" rounded="lg" />
        <ButtonGal label="full" rounded="full" />
      </ComponentPreview>

      {/* Botón con borde */}
      <h2 className="titleSecundary">Botón con borde</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal borderedStyle />
        <ButtonGal borderedStyle styleType="ThemeBlue" />
        <ButtonGal borderedStyle styleType="ThemeLight" />
        <ButtonGal borderedStyle styleType="ThemeRed" />
        <ButtonGal borderedStyle styleType="ThemeGreen" />
        <ButtonGal borderedStyle styleType="ThemeYellow" />
        <ButtonGal borderedStyle styleType="ThemeGray" />
        <ButtonGal borderedStyle styleType="ThemePurple" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal borderedStyle />
        <ButtonGal borderedStyle styleType="ThemeBlue" />
        <ButtonGal borderedStyle styleType="ThemeLight" />
        <ButtonGal borderedStyle styleType="ThemeRed" />
        <ButtonGal borderedStyle styleType="ThemeGreen" />
        <ButtonGal borderedStyle styleType="ThemeYellow" />
        <ButtonGal borderedStyle styleType="ThemeGray" />
        <ButtonGal borderedStyle styleType="ThemePurple" />`,
          },
        ]}
      >
        <ButtonGal borderedStyle />
        <ButtonGal borderedStyle styleType="ThemeBlue" />
        <ButtonGal borderedStyle styleType="ThemeLight" />
        <ButtonGal borderedStyle styleType="ThemeRed" />
        <ButtonGal borderedStyle styleType="ThemeGreen" />
        <ButtonGal borderedStyle styleType="ThemeYellow" />
        <ButtonGal borderedStyle styleType="ThemeGray" />
        <ButtonGal borderedStyle styleType="ThemePurple" />
      </ComponentPreview>

      {/* Tipografia */}
      <h2 className="titleSecundary">Tipografía</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal font="OpenSansRegular" />
        <ButtonGal textSize="20px" />
        <ButtonGal font="Georgia" textSize="18px" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal font="OpenSansRegular" />
        <ButtonGal textSize="20px" />
        <ButtonGal font="Georgia" textSize="18px" />`,
          },
        ]}
      >
        <ButtonGal font="OpenSansRegular" />
        <ButtonGal textSize="20px" />
        <ButtonGal font="Georgia" textSize="18px" />
      </ComponentPreview>

      {/* Sombras */}
      <h2 className="titleSecundary">Sombras</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal shadow/>
        <ButtonGal shadow colorShadow="#2563eb" />
        <ButtonGal shadow colorShadow="red" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal shadow/>
        <ButtonGal shadow colorShadow="#2563eb" />
        <ButtonGal shadow colorShadow="red" />`,
          },
        ]}
      >
        <ButtonGal shadow />
        <ButtonGal shadow colorShadow="#2563eb" />
        <ButtonGal shadow colorShadow="red" />
      </ComponentPreview>
    </div>
  );
}
