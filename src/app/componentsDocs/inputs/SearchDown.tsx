import { useState } from "react";
import { SearchDownGal, ComponentPreviewGal } from "galliard-ui";
import type { OptionsSearchModel } from "galliard-ui";
import { DataTable } from "../../../components/table/DataTable";
import type { PropRow } from "../../../models/TableModel";
import { propsColumns } from "../../../hooks/usePropsTableColumns";
import { DocsPagination } from "../../../components/generals/DocsPagination";

const sampleOptions: OptionsSearchModel[] = [
  { valueOption: 1, text: "Manzana" },
  { valueOption: 2, text: "Plátano" },
  { valueOption: 3, text: "Naranja" },
  { valueOption: 4, text: "Fresa" },
  { valueOption: 5, text: "Uva" },
];

export default function SearchDown() {
  // const [loading, setLoading] = useState(false);

  const searchCharacter = async (text: string | null): Promise<OptionsSearchModel[]> => {
    if (!text) {
      return [];
    }
    // setLoading(true);
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(text)}`,
      );
      if (!res.ok) {
        // la API regresa 404 cuando no hay resultados
        return [];
      }
      const data = await res.json();
      const formateData: OptionsSearchModel[] = data.results
        .slice(0, 10)
        .map((c: { id: number; name: string }) => ({
          valueOption: c.id,
          text: c.name,
        }));
      return formateData;
    } catch (error) {
      return [];
    } finally {
      // setLoading(false);
    }
  };

  const [basicValue, setBasicValue] = useState<OptionsSearchModel | null>(null);

  const [apiValue, setApiValue] = useState<OptionsSearchModel | null>(null);

  const [iconValue, setIconValue] = useState<OptionsSearchModel | null>(null);

  const [horizontalValue, setHorizontalValue] =
    useState<OptionsSearchModel | null>(null);

  const [shadowValue, setShadowValue] = useState<OptionsSearchModel | null>(
    null,
  );

  const [customValue, setCustomValue] = useState<OptionsSearchModel | null>(
    null,
  );

  const [topValue, setTopValue] = useState<OptionsSearchModel | null>(null);

  const [bottomValue, setBottomValue] = useState<OptionsSearchModel | null>(
    null,
  );

  const [leftValue, setLeftValue] = useState<OptionsSearchModel | null>(null);

  const [rightValue, setRightValue] = useState<OptionsSearchModel | null>(null);

  const contentProps: PropRow[] = [
    {
      name: "label",
      type: "string",
      description: "Texto que se muestra como etiqueta del campo.",
    },
    {
      name: "value",
      type: "OptionsSearchModel | null",
      description: "Opción actualmente seleccionada.",
    },
    {
      name: "setValue",
      type: "(value: OptionsSearchModel | null) => void",
      description: "Función que actualiza la opción seleccionada.",
    },
    {
      name: "options",
      type: "OptionsSearchModel[]",
      description: "Lista de opciones disponibles para buscar y seleccionar.",
    },
    {
      name: "useForApi",
      type: "boolean",
      defaultValue: "false",
      description: (
        <>
          Si es <code>true</code>, cada tecla dispara <code>searchAction</code>{" "}
          (con debounce) en vez de filtrar internamente sobre{" "}
          <code>options</code>. Úsalo cuando la búsqueda vive en tu API.
        </>
      ),
    },
    {
      name: "searchAction",
      type: "(value: string | null) => void",
      description:
        "Función que se ejecuta al escribir cuando useForApi es true.",
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: '"Escribe para buscar"',
      description: "Texto de referencia cuando el campo está vacío.",
    },
    {
      name: "errorMessage",
      type: "string",
      description: "Mensaje de error mostrado debajo del campo.",
    },
  ];

  const appearanceProps: PropRow[] = [
    {
      name: "orientation",
      type: '"top", "bottom", "left", "right"',
      defaultValue: '"bottom"',
      description: "Define hacia dónde se despliega la lista de opciones.",
    },
    {
      name: "HorV",
      type: '"horizontal", "vertical"',
      defaultValue: '"vertical"',
      description:
        "Acomoda la etiqueta en fila o en columna respecto al campo.",
    },
    {
      name: "iconInRight",
      type: "boolean",
      defaultValue: "false",
      description: "Coloca el ícono de la etiqueta a la derecha del texto.",
    },
    {
      name: "font",
      type: "OpenSansLight, OpenSansRegular, OpenSansSemiBold, OpenSansBold, OpenSansBolder",
      typePlain: true,
      description: "Fuente utilizada en el texto del campo.",
    },
    {
      name: "fontLabel",
      type: "OpenSansLight, OpenSansRegular, OpenSansSemiBold, OpenSansBold, OpenSansBolder",
      typePlain: true,
      description: "Fuente utilizada en la etiqueta.",
    },
    {
      name: "rounded",
      type: "none, sm, md, lg, full",
      defaultValue: '"lg"',
      description: "Redondeo de las esquinas del campo.",
    },
    {
      name: "border",
      type: "boolean",
      defaultValue: "true",
      description: "Muestra u oculta el borde del campo.",
    },
    {
      name: "shadow",
      type: "boolean",
      defaultValue: "false",
      description: "Activa una sombra alrededor del campo.",
    },
    {
      name: "width",
      type: "string ó number",
      defaultValue: "250",
      description: "Ancho del campo de búsqueda.",
    },
    {
      name: "height",
      type: "string ó number",
      defaultValue: "40",
      description: "Alto del campo de búsqueda.",
    },
    {
      name: "bgColor",
      type: "string",
      description: "Color de fondo del campo.",
    },
    {
      name: "textSize",
      type: "string ó number",
      defaultValue: '"1.4em"',
      description: "Tamaño del texto dentro del campo y de las opciones.",
    },
    {
      name: "textColor",
      type: "string",
      defaultValue: '"#000"',
      description: "Color del texto dentro del campo y de las opciones.",
    },
    {
      name: "labelSize",
      type: "string ó number",
      defaultValue: '"1.4em"',
      description: "Tamaño del texto de la etiqueta.",
    },
    {
      name: "labelColor",
      type: "string",
      defaultValue: '"#000"',
      description: "Color del texto de la etiqueta.",
    },
  ];

  const iconsProps: PropRow[] = [
    {
      name: "seeIcon",
      type: "boolean",
      defaultValue: "false",
      description: "Muestra un ícono junto a la etiqueta.",
    },
    {
      name: "icon",
      type: "string",
      defaultValue: '"icon-park-outline:dot"',
      description:
        "Identificador del ícono de la etiqueta, obtenido desde YesIcon.",
    },
    {
      name: "iconSize",
      type: "string ó number",
      defaultValue: "20",
      description: "Tamaño del ícono de la etiqueta.",
    },
    {
      name: "iconsColor",
      type: "string",
      defaultValue: '"#000"',
      description:
        "Color del ícono de la etiqueta y del ícono de búsqueda del campo.",
    },
    {
      name: "iconsOptionsSize",
      type: "string ó number",
      defaultValue: "20",
      description: "Tamaño del ícono de lupa dentro del campo.",
    },
    {
      name: "customIcon",
      type: "React.ReactNode",
      description:
        "Reemplaza el ícono de la etiqueta por un elemento personalizado.",
    },
  ];

  const customizationProps: PropRow[] = [
    {
      name: "customContainerClass",
      type: "string",
      description: "Clase CSS adicional aplicada al contenedor general.",
    },
    {
      name: "customInputClass",
      type: "string",
      description: "Clase CSS adicional aplicada al campo de texto.",
    },
    {
      name: "customLabelClass",
      type: "string",
      description: "Clase CSS adicional aplicada a la etiqueta.",
    },
    {
      name: "customIconClass",
      type: "string",
      description: "Clase CSS adicional aplicada al ícono de la etiqueta.",
    },
    {
      name: "customOptionClass",
      type: "string",
      description: "Clase CSS adicional aplicada a cada opción de la lista.",
    },
  ];

  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">SearchDown</h1>

      <p className="text">
        El componente SearchDownGal es un campo de búsqueda con lista
        desplegable de opciones. Filtra internamente sobre una lista estática o
        puede delegar la búsqueda a tu propia API, y permite personalizar
        orientación, apariencia, íconos y estilos.
      </p>

      <h2 className="titleSecundary">Props</h2>

      <h3 className="subtitle">Contenido</h3>
      <DataTable
        columns={propsColumns}
        data={contentProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Apariencia</h3>
      <DataTable
        columns={propsColumns}
        data={appearanceProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Iconos</h3>
      <DataTable
        columns={propsColumns}
        data={iconsProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Personalización</h3>
      <DataTable
        columns={propsColumns}
        data={customizationProps}
        rowKey={(r) => r.name}
      />

      {/* Uso básico */}
      <h2 className="titleSecundary">Uso Básico</h2>
      <p className="text">
        Ejemplo base: filtra localmente sobre la lista de
        <span className="inline-code">options</span> que le pasas.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        const [value, setValue] = useState(null);

        <SearchDownGal
          label="Fruta"
          value={value}
          setValue={setValue}
          options={options}
          useForApi={false}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        const [value, setValue] = useState<OptionsSearchModel | null>(null);

        <SearchDownGal
          label="Fruta"
          value={value}
          setValue={setValue}
          options={options}
          useForApi={false}
        />`,
          },
        ]}
      >
        <SearchDownGal
          label="Fruta"
          value={basicValue}
          setValue={setBasicValue}
          options={sampleOptions}
          useForApi={false}
        />
      </ComponentPreviewGal>

      {/* Búsqueda con API */}
      <h2 className="titleSecundary">Búsqueda conectada a una API</h2>
      <p className="text">
        Con <span className="inline-code">useForApi</span> en{" "}
        <span className="inline-code">true</span>, el componente llama a{" "}
        <span className="inline-code">searchAction</span> con lo que el usuario
        escribe (con debounce), en vez de filtrar internamente. Este ejemplo
        busca en tiempo real contra la{" "}
        <a href="https://rickandmortyapi.com" target="_blank" rel="noreferrer">
          Rick and Morty API
        </a>
        : escribe el nombre de un personaje (ej. "rick", "morty", "summer").
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
const searchCharacter = async (text) => {
    if (!text) {
      return [];
    }
    setLoading(true);
    try {
      const res = await fetch(
    \`https://rickandmortyapi.com/api/character/?name=\${text}\`
  );
      if (!res.ok) {
        // la API regresa 404 cuando no hay resultados
        return [];
      }
      const data = await res.json();
      const formateData: OptionsSearchModel[] = data.results
        .slice(0, 10)
        .map((c: { id: number; name: string }) => ({
          valueOption: c.id,
          text: c.name,
        }));
      return formateData;
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
    }
  };

<SearchDownGal
  options={[]}
  label="Personaje"
  value={apiValue}
  setValue={setApiValue}
  useForApi={true}
  searchAction={searchCharacter}
/>`,
},
  {
            label: "TSX",
            language: "tsx",
            code: `
const searchCharacter = async (text: string | null): Promise<OptionsSearchModel[]> => {
    if (!text) {
      return [];
    }
    setLoading(true);
    try {
      const res = await fetch(
    \`https://rickandmortyapi.com/api/character/?name=\${text}\`
  );
      if (!res.ok) {
        // la API regresa 404 cuando no hay resultados
        return [];
      }
      const data = await res.json();
      const formateData: OptionsSearchModel[] = data.results
        .slice(0, 10)
        .map((c: { id: number; name: string }) => ({
          valueOption: c.id,
          text: c.name,
        }));
      return formateData;
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
    }
  };

<SearchDownGal
  options={[]}
  label="Personaje"
  value={apiValue}
  setValue={setApiValue}
  useForApi={true}
  searchAction={searchCharacter}
/>`,
          },
        ]}
      >
        <SearchDownGal
          options={[]}
          label="Personaje"
          value={apiValue}
          setValue={setApiValue}
          useForApi={true}
          searchAction={searchCharacter}
        />
      </ComponentPreviewGal>

      {/* Orientación */}
      <h2 className="titleSecundary">Orientación del despliegue</h2>
      <p className="text">
        La prop <span className="inline-code">orientation</span> define hacia
        dónde se abre la lista de opciones respecto al campo.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <SearchDownGal label="Bottom" orientation="bottom" />
        <SearchDownGal label="Top" orientation="top" />
        <SearchDownGal label="Left" orientation="left" />
        <SearchDownGal label="Right" orientation="right" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <SearchDownGal label="Bottom" orientation="bottom" />
        <SearchDownGal label="Top" orientation="top" />
        <SearchDownGal label="Left" orientation="left" />
        <SearchDownGal label="Right" orientation="right" />`,
          },
        ]}
      >
        <SearchDownGal
          label="Bottom"
          orientation="bottom"
          value={bottomValue}
          setValue={setBottomValue}
          options={sampleOptions}
          useForApi={false}
        />
        <SearchDownGal
          label="Top"
          orientation="top"
          value={topValue}
          setValue={setTopValue}
          options={sampleOptions}
          useForApi={false}
        />
        <SearchDownGal
          label="Left"
          orientation="left"
          value={leftValue}
          setValue={setLeftValue}
          options={sampleOptions}
          useForApi={false}
        />
        <SearchDownGal
          label="Right"
          orientation="right"
          value={rightValue}
          setValue={setRightValue}
          options={sampleOptions}
          useForApi={false}
        />
      </ComponentPreviewGal>

      {/* Iconos */}
      <h2 className="titleSecundary">Diseño con iconos</h2>
      <p className="text">
        Con <span className="inline-code">seeIcon</span>,
        <span className="inline-code">icon</span> e
        <span className="inline-code">iconInRight</span> puedes mostrar un ícono
        junto a la etiqueta y decidir de qué lado aparece. También puedes
        ajustar el ícono de lupa del campo con
        <span className="inline-code">iconsOptionsSize</span> y
        <span className="inline-code">iconsColor</span>.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <SearchDownGal
          label="Con icono"
          seeIcon
          icon="tabler:search"
          iconInRight
          iconsColor="#2563eb"
          iconsOptionsSize={24}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <SearchDownGal
          label="Con icono"
          seeIcon
          icon="tabler:search"
          iconInRight
          iconsColor="#2563eb"
          iconsOptionsSize={24}
        />`,
          },
        ]}
      >
        <SearchDownGal
          label="Con icono"
          seeIcon
          icon="tabler:search"
          iconInRight
          iconsColor="#2563eb"
          iconsOptionsSize={24}
          value={iconValue}
          setValue={setIconValue}
          options={sampleOptions}
          useForApi={false}
        />
      </ComponentPreviewGal>

      {/* Layout horizontal */}
      <h2 className="titleSecundary">Layout horizontal</h2>
      <p className="text">
        Con <span className="inline-code">HorV="horizontal"</span> la etiqueta
        se acomoda al lado del campo en vez de arriba.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<SearchDownGal label="Fruta" HorV="horizontal" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<SearchDownGal label="Fruta" HorV="horizontal" />`,
          },
        ]}
      >
        <SearchDownGal
          label="Fruta"
          HorV="horizontal"
          value={horizontalValue}
          setValue={setHorizontalValue}
          options={sampleOptions}
          useForApi={false}
        />
      </ComponentPreviewGal>

      {/* Bordes y sombra */}
      <h2 className="titleSecundary">Bordes y sombra</h2>
      <p className="text">
        Con <span className="inline-code">rounded</span>,
        <span className="inline-code">border</span>
        <span className="inline-code">shadow</span> puedes ajustar el redondeo,
        quitar el borde o activar una sombra sobre el campo.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <SearchDownGal
          label="Con sombra"
          rounded="full"
          border={false}
          shadow
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <SearchDownGal
          label="Con sombra"
          rounded="full"
          border={false}
          shadow
        />`,
          },
        ]}
      >
        <SearchDownGal
          label="Con sombra"
          rounded="full"
          border={false}
          shadow
          value={shadowValue}
          setValue={setShadowValue}
          options={sampleOptions}
          useForApi={false}
        />
      </ComponentPreviewGal>

      {/* Personalización */}
      <h2 className="titleSecundary">Personalización del componente</h2>
      <p className="text">
        Con <span className="inline-code">customContainerClass</span>,
        <span className="inline-code">customInputClass</span>,
        <span className="inline-code">customLabelClass</span>,
        <span className="inline-code">customIconClass</span> y
        <span className="inline-code">customOptionClass</span> puedes aplicar
        clases CSS propias a cada parte del componente.
      </p>
      <p className="note">Nota:</p>
      <p className="text">
        Si los estilos personalizados no se aplican, puede deberse a que ya
        existen estilos con mayor prioridad. Puedes usar
        <span className="inline-code">!important</span> en tu clase para
        sobreescribirlos.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <SearchDownGal
          label="Fruta"
          customContainerClass="miContenedor"
          customInputClass="miInput"
          customLabelClass="miLabel"
          customOptionClass="miOpcion"
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <SearchDownGal
          label="Fruta"
          customContainerClass="miContenedor"
          customInputClass="miInput"
          customLabelClass="miLabel"
          customOptionClass="miOpcion"
        />`,
          },
        ]}
      >
        <SearchDownGal
          label="Fruta"
          customContainerClass="miContenedor"
          customInputClass="miInput"
          customLabelClass="miLabel"
          customOptionClass="miOpcion"
          value={customValue}
          setValue={setCustomValue}
          options={sampleOptions}
          useForApi={false}
        />
      </ComponentPreviewGal>

      <DocsPagination />
    </div>
  );
}
