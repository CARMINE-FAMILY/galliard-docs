import { ButtonGal, ComponentPreviewGal } from "galliard-ui";
import { DataTable } from "../../components/DataTable";
import type { PropRow } from "../../models/TableModel";
import { propsColumns } from "../../hooks/usePropsTableColumns";

export default function Button() {
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
      type: "OpenSansLight, OpenSansRegular, OpenSansSemiBold, OpenSansBold, OpenSansBolder",
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

      <h3 className="subtitle">Sombras</h3>
      <DataTable
        columns={propsColumns}
        data={sombrasProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Personalización</h3>
      <DataTable
        columns={propsColumns}
        data={personalizacionProps}
        rowKey={(r) => r.name}
      />

      {/* Botón */}
      <h2 className="titleSecundaryButton">Botón</h2>
      <p className="text">
        Ejemplo base del componente: un botón simple con solo un{" "}
        <span className="inline-code">label</span> y una{" "}
        <span className="inline-code">action</span> a ejecutar al hacer click.
      </p>
      <ComponentPreviewGal
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
        <ButtonGal label="Button" action={() => {}} />
      </ComponentPreviewGal>

      {/* Colores */}
      <h2 className="titleSecundaryButton">Colores que hay por defecto</h2>
      <p className="text">
        El componente incluye varios temas de color predefinidos mediante la
        prop <span className="inline-code">styleType</span>. Si ninguno se
        ajusta a lo que necesitas, puedes definir un color propio con{" "}
        <span className="inline-code">bgColor</span>.
      </p>
      <ComponentPreviewGal
        customTheme={{ bg: "#9b9b9b" }}
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
        <ButtonGal label="ThemeDark" action={() => {}} />
        <ButtonGal
          label="ThemeLight"
          styleType="ThemeLight"
          action={() => {}}
        />
        <ButtonGal
          label="ThemeGreen"
          styleType="ThemeGreen"
          action={() => {}}
        />
        <ButtonGal label="ThemeRed" styleType="ThemeRed" action={() => {}} />
        <ButtonGal label="ThemeBlue" styleType="ThemeBlue" action={() => {}} />
        <ButtonGal
          label="ThemeYellow"
          styleType="ThemeYellow"
          action={() => {}}
        />
        <ButtonGal
          label="ThemePurple"
          styleType="ThemePurple"
          action={() => {}}
        />
        <ButtonGal label="ThemeGray" styleType="ThemeGray" action={() => {}} />
        <ButtonGal label="ColorDiferente" bgColor="#2aa198" action={() => {}} />
      </ComponentPreviewGal>

      {/* Tamaño del Botón */}
      <h2 className="titleSecundaryButton">Tamaño del Botón</h2>
      <p className="text">
        Con <span className="inline-code">width</span>,{" "}
        <span className="inline-code">height</span>,{" "}
        <span className="inline-code">textSize</span> y{" "}
        <span className="inline-code">padding</span> puedes ajustar las
        dimensiones del botón y el espaciado interno de su contenido.
      </p>
      <ComponentPreviewGal
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
        <ButtonGal label="TamañoNormal" action={() => {}} />
        <ButtonGal
          label="HeightyWidth"
          width="220px"
          height="55px"
          action={() => {}}
        />
        <ButtonGal label="TamañoDelTexto" textSize="18px" action={() => {}} />
        <ButtonGal label="Padding" padding="20px 35px" action={() => {}} />
      </ComponentPreviewGal>

      {/* Iconos */}
      <h2 className="titleSecundaryButton">Diseño de Iconos</h2>
      <p className="text">
        Con <span className="inline-code">icon</span>,{" "}
        <span className="inline-code">iconColor</span> e{" "}
        <span className="inline-code">iconSize</span> puedes agregar y
        personalizar un ícono dentro del botón. Con{" "}
        <span className="inline-code">seeIcon={"{false}"}</span> lo ocultas, y
        con <span className="inline-code">customIcon</span> puedes reemplazarlo
        por cualquier elemento (incluso una imagen o gif).
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal label="Descargar" icon="tabler:download" />
        <ButtonGal label="Eliminar" icon="tabler:trash" iconColor="red" />
        <ButtonGal label="Configuración" icon="tabler:settings" iconSize="26px" />
        <ButtonGal label="Sin icono" seeIcon={false} />
        //Sin texto
        <ButtonGal label="" action={() => {}} />
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
        //Sin texto
        <ButtonGal label="" action={() => {}} />
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
        <ButtonGal label="Descargar" icon="tabler:download" action={() => {}} />
        <ButtonGal
          label="Eliminar"
          icon="tabler:trash"
          iconColor="red"
          action={() => {}}
        />
        <ButtonGal
          label="Configuración"
          icon="tabler:settings"
          iconSize="26px"
          action={() => {}}
        />
        <ButtonGal label="Sin icono" seeIcon={false} action={() => {}} />
        <ButtonGal label="" action={() => {}} />

        <ButtonGal
          label="Gif"
          action={() => {}}
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
      </ComponentPreviewGal>

      {/* Posición del icono */}
      <h2 className="titleSecundaryButton">Posición del icono</h2>
      <p className="text">
        La prop <span className="inline-code">iconOn</span> define si el ícono
        se muestra a la izquierda o a la derecha del texto del botón.
      </p>
      <ComponentPreviewGal
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
        <ButtonGal label="Izquierda" iconOn="left" action={() => {}} />
        <ButtonGal label="Derecha" iconOn="right" action={() => {}} />
      </ComponentPreviewGal>

      {/* Bordes */}
      <h2 className="titleSecundaryButton">Bordes</h2>
      <p className="text">
        El nombre de cada botón indica el valor de{" "}
        <span className="inline-code">rounded</span> que se usó, mostrando los
        distintos niveles de redondeo disponibles.
      </p>
      <ComponentPreviewGal
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
        <ButtonGal label="none" rounded="none" action={() => {}} />
        <ButtonGal label="sm" rounded="sm" action={() => {}} />
        <ButtonGal label="md" rounded="md" action={() => {}} />
        <ButtonGal label="lg" rounded="lg" action={() => {}} />
        <ButtonGal label="full" rounded="full" action={() => {}} />
      </ComponentPreviewGal>

      {/* Botón con borde */}
      <h2 className="titleSecundaryButton">Botón con borde</h2>
      <p className="text">
        Con <span className="inline-code">borderedStyle</span> el botón cambia a
        una variante de solo borde (outline), manteniendo el color de cada{" "}
        <span className="inline-code">styleType</span> en el borde y el texto en
        vez de en el fondo.
      </p>
      <ComponentPreviewGal
        customTheme={{ bg: "#9b9b9b" }}
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
        <ButtonGal borderedStyle action={() => {}} />
        <ButtonGal borderedStyle styleType="ThemeBlue" action={() => {}} />
        <ButtonGal borderedStyle styleType="ThemeLight" action={() => {}} />
        <ButtonGal borderedStyle styleType="ThemeRed" action={() => {}} />
        <ButtonGal borderedStyle styleType="ThemeGreen" action={() => {}} />
        <ButtonGal borderedStyle styleType="ThemeYellow" action={() => {}} />
        <ButtonGal borderedStyle styleType="ThemeGray" action={() => {}} />
        <ButtonGal borderedStyle styleType="ThemePurple" action={() => {}} />
      </ComponentPreviewGal>

      {/* Tipografia */}
      <h2 className="titleSecundaryButton">Tipografía</h2>
      <p className="text">
        Con <span className="inline-code">font</span> y{" "}
        <span className="inline-code">textSize</span> puedes ajustar la fuente y
        el tamaño del texto del botón.
      </p>
      <ComponentPreviewGal
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
        <ButtonGal font="OpenSansRegular" action={() => {}} />
        <ButtonGal textSize="20px" action={() => {}} />
        <ButtonGal font="Georgia" textSize="18px" action={() => {}} />
      </ComponentPreviewGal>

      {/* Sombras */}
      <h2 className="titleSecundaryButton">Botón con Sombras</h2>
      <p className="text">
        Con <span className="inline-code">shadow</span> se activa una sombra
        alrededor del botón, y con{" "}
        <span className="inline-code">colorShadow</span> puedes ajustar su
        color.
      </p>
      <ComponentPreviewGal
        // customTheme={{ bg: "#E4d4ba" }}
        customTheme={{ bg: "#ffffce" }}
        // customTheme={{ bg: "#9ca3af" }}]
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal shadow action={() => {}} />
        <ButtonGal shadow colorShadow="#ffffff" action={() => {}} />
        <ButtonGal shadow colorShadow="#1fd545" action={() => {}} />
        <ButtonGal shadow colorShadow="#1d4ed8" action={() => {}} />
        <ButtonGal shadow colorShadow="#ff0000" action={() => {}} />
        <ButtonGal shadow colorShadow="#f59e0b" action={() => {}} />
        <ButtonGal shadow colorShadow="#9d50dc" action={() => {}} />
        <ButtonGal shadow colorShadow="#374151" action={() => {}} />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal shadow action={() => {}} />
        <ButtonGal shadow colorShadow="#ffffff" action={() => {}} />
        <ButtonGal shadow colorShadow="#1fd545" action={() => {}} />
        <ButtonGal shadow colorShadow="#1d4ed8" action={() => {}} />
        <ButtonGal shadow colorShadow="#ff0000" action={() => {}} />
        <ButtonGal shadow colorShadow="#f59e0b" action={() => {}} />
        <ButtonGal shadow colorShadow="#9d50dc" action={() => {}} />
        <ButtonGal shadow colorShadow="#374151" action={() => {}} />`,
          },
        ]}
      >
        <ButtonGal shadow colorShadow="#000000" action={() => {}} />
        <ButtonGal shadow colorShadow="#ffffff" action={() => {}} />
        <ButtonGal shadow colorShadow="#1fd545" action={() => {}} />
        <ButtonGal shadow colorShadow="#1d4ed8" action={() => {}} />
        <ButtonGal shadow colorShadow="#ff0000" action={() => {}} />
        <ButtonGal shadow colorShadow="#f59e0b" action={() => {}} />
        <ButtonGal shadow colorShadow="#9d50dc" action={() => {}} />
        <ButtonGal shadow colorShadow="#374151" action={() => {}} />
      </ComponentPreviewGal>

      {/* Personalización del botón */}
      <h2 className="titleSecundaryButton">Personalización del botón</h2>
      <p className="text">
        Para la personalización del boton se ocuparon las siguientes
        propiedades: <span className="inline-code">label</span>,
        <span className="inline-code">icon</span>,
        <span className="inline-code">iconOn</span>,
        <span className="inline-code">bgColor</span>,
        <span className="inline-code">txtColor</span>,
        <span className="inline-code">rounded</span>,
        <span className="inline-code">padding</span>,
        <span className="inline-code">customClassButton</span>,
        <span className="inline-code">customClassLabel</span>,
        <span className="inline-code">customClassIcon</span>.
      </p>
      <p className="note">Nota:</p>
      <p className="text">
        Si los estilos personalizados no se aplican correctamente en el botón,
        puede deberse a que existen estilos con mayor prioridad. Para
        sobreescribirlos, puedes utilizar
        <span className="inline-code">!important</span>
        una vez ya aplicada, veras que los estilos que seleccionas se habrán
        aplicado
      </p>
      <ComponentPreviewGal
        customTheme={{ bg: "#212528" }}
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
       <ButtonGal
          label="Get started"
          seeIcon={false}
          padding="1em 3em"
          customClassButton="button"
          customClassLabel="label"
          customClassIcon="icon"
          args={{title: "Ejemplo de args"}}
          action={() => {}}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal
          label="Get started"
          seeIcon={false}
          padding="1em 3em"
          customClassButton="button"
          customClassLabel="label"
          customClassIcon="icon"
          args={{title: "Ejemplo de args"}}
          action={() => {}}
        />`,
          },
        ]}
      >
        <ButtonGal
          label="Get started"
          seeIcon={false}
          padding="1em 3em"
          customClassButton="button"
          customClassLabel="label"
          customClassIcon="icon"
          args={{ title: "Ejemplo de args" }}
          action={() => {}}
        />
      </ComponentPreviewGal>
    </div>
  );
}
