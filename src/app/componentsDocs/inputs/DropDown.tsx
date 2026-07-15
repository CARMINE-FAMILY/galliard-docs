import { useState } from "react";
import {
  DropDownGal,
  type OptionsDropModel,
  ComponentPreviewGal,
} from "galliard-ui";
import { DataTable } from "../../../components/DataTable";
import type { PropRow } from "../../../models/TableModel";
import { propsColumns } from "../../../hooks/usePropsTableColumns";

export default function DropDown() {
  const [selected, setSelected] = useState<OptionsDropModel | null>(null);

  const opciones: OptionsDropModel[] = [
    { valueOption: "manzana", text: "Manzana" },
    { valueOption: "pera", text: "Pera" },
    { valueOption: "uva", text: "Uva" },
  ];

  const opcionesConIconos: OptionsDropModel[] = [
    { valueOption: "manzana", text: "Manzana", icon: "tabler:apple" },
    { valueOption: "pera", text: "Pera", icon: "tabler:apple" },
    { valueOption: "uva", text: "Uva", icon: "tabler:grain" },
  ];

  const opcionesMundial: OptionsDropModel[] = [
    {
      valueOption: 1,
      text: "México",
      customIcon: (
        <img src="https://tse1.mm.bing.net/th/id/OIP.R7mW1KxNk8kkbkzcYgboEQHaFh?rs=1&pid=ImgDetMain&o=7&rm=3" />
      ),
    },
    {
      valueOption: 2,
      text: "Portugal",
      customIcon: (
        <img src="https://www.bplay.bet.ar/wp-content/uploads/2022/12/istockphoto-475191977-612x612-1.jpg" />
      ),
    },
    {
      valueOption: 3,
      text: "España",
      customIcon: (
        <img src="https://i.pinimg.com/originals/be/80/0a/be800ab60086b8ad63b3b49d6c103754.jpg" />
      ),
    },
    {
      valueOption: 4,
      text: "Estados Unidos",
      customIcon: (
        <img src="https://tse1.mm.bing.net/th/id/OIP.74w6-I6p-FaHDGhFgn96twHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3" />
      ),
    },
    {
      valueOption: 5,
      text: "Bélgica",
      customIcon: (
        <img src="https://media.istockphoto.com/id/1415663118/es/vector/insignia-del-equipo-de-escudo-de-b%C3%A9lgica-para-el-torneo-de-f%C3%BAtbol.jpg?s=612x612&w=is&k=20&c=b_gdLIlfaZd251REDzZTZzM07u_lFcRZfF5fy2OU-d0=" />
      ),
    },
    {
      valueOption: 6,
      text: "Argentina",
      customIcon: (
        <img src="https://img.freepik.com/vector-premium/insignia-equipo-escudo-argentina-torneo-futbol_95164-6379.jpg?w=2000" />
      ),
    },
    {
      valueOption: 7,
      text: "Egipto",
      customIcon: (
        <img src="https://tse2.mm.bing.net/th/id/OIP.fUB0WFXL0R4yVGm7blcQngHaHa?w=996&h=996&rs=1&pid=ImgDetMain&o=7&rm=3" />
      ),
    },
    {
      valueOption: 8,
      text: "Colombia",
      customIcon: (
        <img src="https://img.freepik.com/vector-premium/insignia-equipo-futbol-escudo-colombia_95164-16196.jpg?w=2000" />
      ),
    },
  ];

  const contenidoProps: PropRow[] = [
    {
      name: "label",
      type: "string",
      description: "Texto que se muestra encima o al lado del dropdown",
    },
    {
      name: "value",
      type: "OptionsDropModel",
      description: "Opcion actualmente seleccionada",
    },
    {
      name: "setValue",
      type: "(value: OptionsDropModel) => void",
      description: "Función que se ejecuta al seleccionar una opción",
    },
    {
      name: "options",
      type: "OptionsDropModel[]",
      description: "Lista de opciones disponibles en el menú",
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Selecciona una opción",
      description: "Texto mostrado cuando no hay ninguna opción seleccionada",
    },
    {
      name: "errorMessage",
      type: "string",
      description: "Mensaje de error que se muestra debajo del dropdown",
    },
  ];

  const comportamientoProps: PropRow[] = [
    {
      name: "orientation",
      type: '"top", "bottom", "left", "right"',
      defaultValue: '"bottom"',
      description: "Define qué lado se despliega el menú de opciones",
    },
    {
      name: "HorV",
      type: '"horizontal" ó "vertical"',
      defaultValue: '"vertical"',
      description:
        "Define si el label se acomoda en fila o en columna respecto al input",
    },
    {
      name: "iconInRight",
      type: "boolean",
      defaultValue: "false",
      description:
        "Coloca el ícono del label a la derecha del texto en vez de a la izquierda.",
    },
  ];

  const aparienciaProps: PropRow[] = [
    {
      name: "width",
      type: "string ó number",
      defaultValue: "250",
      description: "Ancho del dropdown",
    },
    {
      name: "height",
      type: "string ó number",
      defaultValue: "40",
      description: "Alto del dropdown",
    },
    {
      name: "rounded",
      type: "none,sm,md,lg,full",
      defaultValue: "lg",
      description: "Redondeo de las esquinas",
    },
    {
      name: "border",
      type: "boolean",
      defaultValue: "true",
      description: "Muestra u oculta el borde del dropdown",
    },
    {
      name: "shadow",
      type: "boolean",
      defaultValue: "false",
      description: "Aplica una sombre alrededor del dropdown",
    },
    {
      name: "bgColor",
      type: "string",
      description: "Color de fondo del dropdown",
    },
    {
      name: "textSize",
      type: "string ó number",
      defaultValue: '"1.4em"',
      description: "Tamaño del texto de las opciones dentro del menú",
    },
    {
      name: "textColor",
      type: "string",
      defaultValue: '"#000"',
      description: "Color del texto de las opciones dentro del menú",
    },
    {
      name: "labelSize",
      type: "string ó number",
      defaultValue: '"1.4em"',
      description: "Tamaño del label y del texto seleccionado",
    },
    {
      name: "labelColor",
      type: "string",
      defaultValue: '"#000"',
      description: "Color del label y del texto seleccionado.",
    },
    {
      name: "font",
      type: "OpenSansLight, OpenSansRegular, OpenSansSemiBold, OpenSansBold, OpenSansBolder",
      typePlain: true,
      description: "Fuente utilizada para el texto de las opciones",
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
      defaultValue: "false",
      description: "Indica si se muestra el ícono dle label",
    },
    {
      name: "icon",
      type: "string",
      defaultValue: '"icon-park-outline:dot"',
      description: "Identificador del ícono del label, obtenido desde YesIcon.",
    },
    {
      name: "iconSize",
      type: "string ó number",
      defaultValue: "20",
      description: "Tamaño del icono del label",
    },
    {
      name: "iconsColor",
      type: "string",
      defaultValue: '"#000"',
      description:
        "Color por defecto de los íconos del dropdown y las opciones.",
    },
    {
      name: "customIcon",
      type: "React.ReactNode",
      description: "Reemplaza el ícono del label por un elemento personalizado",
    },
    {
      name: "seeOptionsIcons",
      type: "boolean",
      defaultValue: "false",
      description: "Indica si cada opción del menú muestra su propio ícono",
    },
    {
      name: "iconsOptionsSize",
      type: "string ó number",
      defaultValue: "20",
      description: "Tamaño de los íconos de las opciones del menú",
    },
  ];

  const personalizacionProps: PropRow[] = [
    {
      name: "customContainerClass",
      type: "string",
      description: "Clase CSS adicional aplixada al contenedor general",
    },
    {
      name: "customInputClass",
      type: "string",
      description: "Clase CSS adicional aplicada al input visible del dropdown",
    },
    {
      name: "customLabelClass",
      type: "string",
      description: "Clase CSS adicional aplicada al label",
    },
    {
      name: "customIconClass",
      type: "string",
      description: "Clase CSS adicional aplicada al ícono del label",
    },
    {
      name: "customOptionClass",
      type: "string",
      description: "Clase CSS adiconal aplicada a cada opción del menu",
    },
  ];

  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">DropDown</h1>
      <p className="text">
        El componente DropDown permite seleccionar una opción de una lista
        despegable. Ofrece soporte para íconos por opción, orientación del menú
        distintos tamaños y estilos personalizados, permitiendo adaptarse a
        diferentes diseños de interfaz
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

      <h3 className="subtitle">Personalización</h3>
      <DataTable
        columns={propsColumns}
        data={personalizacionProps}
        rowKey={(r) => r.name}
      />

      {/* DropDown */}
      <h2 className="titleSecundary">DropDown</h2>
      <p className="text">
        Ejemplo base del componente: una lista despegable simple donde el
        usuario elige una opción, usando
        <span className="inline-code">setValue</span>
        <span className="inline-code">options</span> para capturar la selección
      </p>
      <ComponentPreviewGal
        allowOverflow
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        const [selected, setSelected] = useState(null);
        const opciones = [
          { valueOption: "manzana", text: "Manzana" },
          { valueOption: "pera", text: "Pera" },
          { valueOption: "uva", text: "Uva" },
        ];

        <DropDownGal
          label="Fruta"
          value={selected}
          setValue={setSelected}
          options={opciones}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        const [selected, setSelected] = useState<OptionsDropModel | null>(null);
        const opciones: OptionsDropModel[] = [
          { valueOption: "manzana", text: "Manzana" },
          { valueOption: "pera", text: "Pera" },
          { valueOption: "uva", text: "Uva" },
        ];

        <DropDownGal
          label="Fruta"
          value={selected}
          setValue={setSelected}
          options={opciones}
        />`,
          },
        ]}
      >
        <DropDownGal
          label="Fruta"
          value={selected}
          setValue={setSelected}
          options={opciones}
        />
      </ComponentPreviewGal>

      {/* Orientación */}
      <h2 className="titleSecundary">Orientación del menú</h2>
      <p className="text">
        La prop <span className="inline-code">orientation</span> define hacia
        qué lado se despliega el menú de opciones respecto al input:
        <span className="inline-code">bottom</span> (por defecto),
        <span className="inline-code">top</span>,
        <span className="inline-code">left</span> o
        <span className="inline-code">right</span>.
      </p>
      <ComponentPreviewGal
        allowOverflow
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <DropDownGal label="Bottom" options={opciones} orientation="bottom" />
        <DropDownGal label="Top" options={opciones} orientation="top" />
        <DropDownGal label="Left" options={opciones} orientation="left" />
        <DropDownGal label="Right" options={opciones} orientation="right" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <DropDownGal label="Bottom" options={opciones} orientation="bottom" />
        <DropDownGal label="Top" options={opciones} orientation="top" />
        <DropDownGal label="Left" options={opciones} orientation="left" />
        <DropDownGal label="Right" options={opciones} orientation="right" />`,
          },
        ]}
      >
        <DropDownGal label="Bottom" options={opciones} orientation="bottom" />
        <DropDownGal label="Top" options={opciones} orientation="top" />
        <DropDownGal label="Left" options={opciones} orientation="left" />
        <DropDownGal label="Right" options={opciones} orientation="right" />
      </ComponentPreviewGal>

      {/* Layout horizontal / vertical */}
      <h2 className="titleSecundary">Orientación del label</h2>
      <p className="text">
        La prop <span className="inline-code">HorV</span> define si el label se
        acomoda en columna (<span className="inline-code">"vertical"</span>, por
        defecto) o en fila (<span className="inline-code">"horizontal"</span>)
        respecto al input
      </p>
      <ComponentPreviewGal
        allowOverflow
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <DropDownGal label="Vertical" options={opciones} HorV="vertical" />
        <DropDownGal label="Horizontal" options={opciones} HorV="horizontal" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <DropDownGal label="Vertical" options={opciones} HorV="vertical" />
        <DropDownGal label="Horizontal" options={opciones} HorV="horizontal" />`,
          },
        ]}
      >
        <DropDownGal label="Vertical" options={opciones} HorV="vertical" />
        <DropDownGal label="Horizontal" options={opciones} HorV="horizontal" />
      </ComponentPreviewGal>

      {/* Iconos */}
      <h2 className="titleSecundary">Diseño de Iconos</h2>
      <p className="text">
        Con <span className="inline-code">seeIcon</span> e
        <span className="inline-code">icon</span> se muestra un ícono junto al
        label principal. Para que cada opción del menú también muestre su propio
        ícono, activa <span className="inline-code">seeOptionsIcons</span> y
        agrega la propiedad <span className="inline-code">icon</span> dentro de
        cada elemento de <span className="inline-code">options</span>.
      </p>
      <ComponentPreviewGal
        allowOverflow
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        const opcionesConIconos = [
          { valueOption: "manzana", text: "Manzana", icon: "tabler:apple" },
          { valueOption: "pera", text: "Pera", icon: "tabler:apple" },
          { valueOption: "uva", text: "Uva", icon: "tabler:grain" },
        ];

        <DropDownGal
          label="Fruta"
          seeIcon
          icon="tabler:apple"
          seeOptionsIcons
          options={opcionesConIconos}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        const opcionesConIconos: OptionsDropModel[] = [
          { valueOption: "manzana", text: "Manzana", icon: "tabler:apple" },
          { valueOption: "pera", text: "Pera", icon: "tabler:apple" },
          { valueOption: "uva", text: "Uva", icon: "tabler:grain" },
        ];

        <DropDownGal
          label="Fruta"
          seeIcon
          icon="tabler:apple"
          seeOptionsIcons
          options={opcionesConIconos}
        />`,
          },
        ]}
      >
        <DropDownGal
          label="Fruta"
          seeIcon
          icon="tabler:apple"
          seeOptionsIcons
          options={opcionesConIconos}
        />
      </ComponentPreviewGal>

      {/* Tamaño y bordes */}
      <h2 className="titleSecundary">Tamaño y bordes</h2>
      <p className="text">
        Combinando <span className="inline-code">width</span>,{" "}
        <span className="inline-code">height</span>,{" "}
        <span className="inline-code">border</span>,{" "}
        <span className="inline-code">shadow</span> y{" "}
        <span className="inline-code">rounded</span> puedes ajustar las
        dimensiones y el borde del dropdown.
      </p>
      <ComponentPreviewGal
        allowOverflow
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <DropDownGal label="Ancho" options={opciones} width={320} />
        <DropDownGal label="Alto" options={opciones} height={55} />
        <DropDownGal label="Sin borde" options={opciones} border={false} />
        <DropDownGal label="Con sombra" options={opciones} shadow />
        <DropDownGal label="Redondeado" options={opciones} rounded="full" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <DropDownGal label="Ancho" options={opciones} width={320} />
        <DropDownGal label="Alto" options={opciones} height={55} />
        <DropDownGal label="Sin borde" options={opciones} border={false} />
        <DropDownGal label="Con sombra" options={opciones} shadow />
        <DropDownGal label="Redondeado" options={opciones} rounded="full" />`,
          },
        ]}
      >
        <DropDownGal label="Ancho" options={opciones} width={320} />
        <DropDownGal label="Alto" options={opciones} height={55} />
        <DropDownGal label="Sin borde" options={opciones} border={false} />
        <DropDownGal label="Con sombra" options={opciones} shadow />
        <DropDownGal label="Redondeado" options={opciones} rounded="full" />
      </ComponentPreviewGal>

      {/* Error */}
      <h2 className="titleSecundary">Mensaje de error</h2>
      <p className="text">
        La prop <span className="inline-code">errorMessage</span> muestra un
        texto de validación debajo del dropdown. Igual que en los demás
        componentes, DropDown no valida nada por sí mismo — depende de ti
        decidir cuándo mostrarlo (por ejemplo, al enviar un formulario sin
        ninguna opción seleccionada).
      </p>
      <ComponentPreviewGal
        allowOverflow
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <DropDownGal
          label="Fruta"
          options={opciones}
          errorMessage="Debes seleccionar una opción"
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <DropDownGal
          label="Fruta"
          options={opciones}
          errorMessage="Debes seleccionar una opción"
        />`,
          },
        ]}
      >
        <DropDownGal
          label="Fruta"
          options={opciones}
          errorMessage="Debes seleccionar una opción"
        />
      </ComponentPreviewGal>

      {/* Personalización del dropdown */}
      <h2 className="titleSecundaryButton">Personalización del DropDown</h2>
      <p className="text">
        Para la personalización del dropdown se ocuparon las siguientes
        propiedades: <span className="inline-code">customContainerClass</span>,
        <span className="inline-code">customInputClass</span>,
        <span className="inline-code">customLabelClass</span>,
        <span className="inline-code">customIconClass</span> y
        <span className="inline-code">customOptionClass</span>.
      </p>
      <p className="note">Nota:</p>
      <p className="text">
        Si los estilos personalizados no se aplican correctamente en el
        dropdown, puede deberse a que existen estilos con mayor prioridad. Para
        sobreescribirlos, puedes utilizar
        <span className="inline-code">!important</span>
        una vez ya aplicada, veras que los estilos que seleccionas se habrán
        aplicado
      </p>
      <ComponentPreviewGal
        allowOverflow
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <DropDownGal
          label="Equipos del Mundial"
          value={selected}
          setValue={setSelected}
          options={opcionesMundial}
          orientation="top"
          seeIcon
          seeOptionsIcons
          icon="openmoji:soccer-ball"
          customContainerClass="dropDemoContainer"
          customInputClass="inputDrop"
          customLabelClass="labelDrop"
          customIconClass="iconDrop"
          customOptionClass="optionDrop"
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
       <DropDownGal
          label="Equipos del Mundial"
          value={selected}
          setValue={setSelected}
          options={opcionesMundial}
          orientation="top"
          seeIcon
          seeOptionsIcons
          icon="openmoji:soccer-ball"
          customContainerClass="dropDemoContainer"
          customInputClass="inputDrop"
          customLabelClass="labelDrop"
          customIconClass="iconDrop"
          customOptionClass="optionDrop"
        />`,
          },
        ]}
      >
        <DropDownGal
          label="Equipos del Mundial"
          value={selected}
          setValue={setSelected}
          options={opcionesMundial}
          orientation="top"
          seeIcon
          seeOptionsIcons
          icon="openmoji:soccer-ball"
          customContainerClass="dropDemoContainer"
          customInputClass="inputDrop"
          customLabelClass="labelDrop"
          customIconClass="iconDrop"
          customOptionClass="optionDrop"
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
          href="/componentsDocs/inputs/checkbox"
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
            CheckBox
          </div>
        </a>

        <a
          href="/componentsDocs/inputs/inputfile"
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
            InputFile
          </div>
        </a>
      </div>
    </div>
  );
}
