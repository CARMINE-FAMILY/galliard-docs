import { useState } from "react";
import { InputFileGal, ComponentPreviewGal } from "galliard-ui";
import { DataTable } from "../../../components/DataTable";
import type { PropRow } from "../../../models/TableModel";
import {
  fileCatalogColumns,
  propsColumns,
} from "../../../hooks/usePropsTableColumns";

export default function InputFile() {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);
  const [file4, setFile4] = useState<File | null>(null);
  const [file5, setFile5] = useState<File | null>(null);
  const [file6, setFile6] = useState<File | null>(null);
  const [file7, setFile7] = useState<File | null>(null);
  const [file8, setFile8] = useState<File | null>(null);
  const [file9, setFile9] = useState<File | null>(null);

  const contenidoProps: PropRow[] = [
    {
      name: "label",
      type: "string",
      defaultValue: '"Click o arrastra un archivo"',
      description: "Texto mostrado dentro del área de carga",
    },
    {
      name: "setSelectedFileE",
      type: "(file: File | null) => void",
      description:
        "Función que se ejecuta al seleecionar o cancelar un archivo",
    },
    {
      name: "errorMessage",
      type: "string",
      description: "Mensaje de error externo que se muestra debajo del input",
    },
    {
      name: "textButtonCancel",
      type: "string",
      defaultValue: '"Cancelar"',
      description: "Texto del botón para quitar el archivo ya seleccionado",
    },
  ];

  const comportamientoProps: PropRow[] = [
    {
      name: "acceptFiles",
      type: "string",
      defaultValue: '"*"',
      description:
        "Tamaño máximo permitido en MB. Si el archivo lo excede, se rechaza y se muestra un error",
    },
    {
      name: "maxMBSize",
      type: "number",
      description:
        "Tamaño máximo permitido en MB. Si el archivo lo excede, se rechaza y se muestra un error",
    },
    {
      name: "args",
      type: "InputHTMLAttributes<HTMLInputElement>",
      typePlain: true,
      description:
        "Props nativas adicionales que se pasan directo al <input type='file' />",
    },
  ];

  const aparienciaProps: PropRow[] = [
    {
      name: "widht",
      type: "string ó number",
      description: "Ancho del contenedor",
    },
    {
      name: "height",
      type: "string ó number",
      description: "Alto del contenedor de carga",
    },
    {
      name: "rounded",
      type: "none,sm,ms,lg,full",
      defaultValue: "md",
      description: "Redondeo",
    },
    {
      name: "shadow",
      type: "boolean",
      defaultValue: "true",
      description: "Aplica una sombra alrededor del contenedor",
    },
    {
      name: "bgColor",
      type: "string",
      description:
        "Color de fondo del contenedor (y color de acento al arrastrar un archivo)",
    },
    {
      name: "bgColorHover",
      type: "string",
      description: "Color de fondo al pasar el mouse por encima",
    },
    {
      name: "labelSize",
      type: "string ó number",
      description: "Tamaño del texto del label",
    },
    {
      name: "labelColor",
      type: "string",
      description: "Color del texto del label",
    },
    {
      name: "font",
      type: "OpenSansLight, OpenSansRegular, OpenSansSemiBold, OpenSansBold, OpenSansBolder",
      typePlain: true,
      description:
        "Fuente utilizada para el texto del label y del nombre de archivo",
    },
  ];

  const iconosProps: PropRow[] = [
    {
      name: "seeIcon",
      type: "boolean",
      defaultValue: "true",
      description: "Indica si se muestra el ícono dentro del componente",
    },
    {
      name: "icon",
      type: "string",
      defaultValue: '"mingcute:upload-3-fill"',
      description:
        "Identificador del ícono mostrado antes de sleccionar un archivo",
    },
    {
      name: "iconSize",
      type: "string ó number",
      defaultValue: "30",
      description: "Tamaño del ícono",
    },
    {
      name: "iconColor",
      type: "string",
      defaultValue: '"#fff"',
      description: "Color del ícono cuando no se está arrastrando un archivo",
    },
  ];

  const personalizacionProps: PropRow[] = [
    {
      name: "customFileClass",
      type: "string",
      description:
        "Clase CSS adicional aplicada al contenedor cuando no hay archivo seleccionado",
    },
    {
      name: "customSelectedClass",
      type: "string",
      description:
        "Clase CSS adicional aplicada al contenedor cuando ya hay un archivo seleccionado",
    },
    {
      name: "customLabelClass",
      type: "string",
      description: "Clase CSS adicional aplicada al texto del label",
    },
    {
      name: "CustomIcon",
      type: "React.ReactNode",
      description:
        "Reemplaza el ícono por defecto por un elemento personalizado",
    },
    {
      name: "customIconClass",
      type: "string",
      description: "Clase CSS adicional aplicada al ícono",
    },
  ];

  const fileCatalogRow = [
    {
      category: "images",
      types: "common, png, jpg, svg, webp, avif, ico, tiff, bmp, heic",
    },
    {
      category: "docs",
      types:
        "pdf, word, excel powerpoint, odt, ods, txt, rtf, csv, markdown, epub",
    },
    {
      category: "archives",
      types: "zip, rar, savanZ, tar, gz, iso",
    },
    {
      category: "media",
      types: "audio, video, mp3, wav, ogg, mp4, webm, mov, avi",
    },
    {
      category: "fonts",
      types: "woff, woff2, ttf, otf, eot",
    },
    {
      category: "code",
      types:
        "html, css, js, ts, xml, python, java, csharp, cpp, c, php, sql, sh, yaml",
    },
  ];

  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">InputFile</h1>
      <p className="text">
        El componente InputFile permite seleccionar un archivo mediante click o
        arrastrando y soltando (drag & drop). Ofrece validación de tamaño
        máximo, restricción de tipos de archivo y estilos completamente
        personalizables
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

      <h3 className="subtitle">Catálogo de tipos de archivos</h3>
      <p className="text">
        La prop <span className="inline-code">acceptFiles</span> puede recibir
        una categoría completa como string (ej.
        <span className="inline-code">"images"</span>), un objeto para elegir
        tipos específicos dentro de una categoría (ej.
        <span className="inline-code">{`{ images: ["png", "jpg"] }`}</span>), un
        arreglo combinando varias opciones, o
        <span className="inline-code">"*"</span>
        para aceptar cualquier archivo
      </p>

      <DataTable
        columns={fileCatalogColumns}
        data={fileCatalogRow}
        rowKey={(r) => r.category}
      />

      <h3 className="subtitle">Personalización</h3>
      <DataTable
        columns={propsColumns}
        data={personalizacionProps}
        rowKey={(r) => r.name}
      />

      {/* InputFile básico */}
      <h2 className="titleSecundary">InputFile</h2>
      <p className="text">
        Ejemplo base del componente: un área de carga simple donde el usuario
        puede seleccionar un archivo haciendo click o arrastrándolo, usando
        <span className="inline-code">selectedFileE</span> y
        <span className="inline-code">setSelectedFileE</span> para capturar el
        archivo elegido
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
            const[file, setFile] = useState(null);

            <InputFileGal
              selectedFileE={file}
              setSelectedFileE={setFile}
            />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
            const [file, setFile] = useState<File | null>(null);

            <InputFileGal
              selectedFileE={file}
              setSelectedFileE={setFile}
            />`,
          },
        ]}
      >
        <InputFileGal selectedFileE={file1} setSelectedFileE={setFile1} />
      </ComponentPreviewGal>

      {/* Tipos de archivo aceptados */}
      <h2 className="titleSecundary">Tipos de archivo aceptados</h2>
      <p className="text">
        La prop <span className="inline-code">acceptFiles</span> restringe qué
        archivos puede seleccionar el usuario, tanto desde el explorador de
        archivos como al arrastrar y soltar
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
            <InputFileGal
              label="Solo imágenes"
              acceptFiles="images"
              selectedFileE={file}
              setSelectedFileE={setFile}
            />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
            <InputFileGal
              label="Solo imágenes"
              acceptFiles="images"
              selectedFileE={file}
              setSelectedFileE={setFile}
            />`,
          },
        ]}
      >
        <InputFileGal
          label="Solo imágenes"
          acceptFiles="images"
          selectedFileE={file2}
          setSelectedFileE={setFile2}
        />
      </ComponentPreviewGal>

      {/* Tamaño máximo */}
      <h2 className="titleSecundary">Límite de tamaño</h2>
      <p className="text">
        Con <span className="inline-code">maxMBSize</span> se rechaza
        automáticamente cualquier archivo que exceda el límite indicado (en MB),
        mostrando un mensaje de error
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
            <InputFileGal
              label="Máximo 2 MB"
              maxMBSize={2}
              selectedFileE={file}
              setSelectedFileE={setFile}
            />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
            <InputFileGal
              label="Máximo 2 MB"
              maxMBSize={2}
              selectedFileE={file}
              setSelectedFileE={setFile}
            />`,
          },
        ]}
      >
        <InputFileGal
          label="Máximo 2 MB"
          maxMBSize={2}
          selectedFileE={file3}
          setSelectedFileE={setFile3}
        />
      </ComponentPreviewGal>

      {/* Apariencia */}
      <h2 className="titleSecundary">Tamaño y bordes</h2>
      <p className="text">
        Combinando <span className="inline-code">width</span>
        <span className="inline-code">height</span>
        <span className="inline-code">shadow</span>
        <span className="inline-code">rounded</span> puedes ajustar las
        dimensiones y el borde del área de carga
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
            <InputFileGal label="Ancho" width={320} selectedFileE={file} setSelectedFileE={setFile} />
            <InputFileGal label="Alto"  height={60} selectedFileE={file} setSelectedFileE={setFile} />
            <InputFileGal label="Sin sombra" shadow={false} selectedFileE={file} setSelectedFileE={setFile} />
            <InputFileGal label="Redondeado" rounded="full" selectedFileE={file} setSelectedFileE={setFile} />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
            <InputFileGal label="Ancho" width={320} selectedFileE={file} setSelectedFileE={setFile} />
            <InputFileGal label="Alto"  height={60} selectedFileE={file} setSelectedFileE={setFile} />
            <InputFileGal label="Sin sombra" shadow={false} selectedFileE={file} setSelectedFileE={setFile} />
            <InputFileGal label="Redondeado" rounded="full" selectedFileE={file} setSelectedFileE={setFile} />`,
          },
        ]}
      >
        <InputFileGal
          label="Ancho"
          width={320}
          selectedFileE={file4}
          setSelectedFileE={setFile4}
        />
        <InputFileGal
          label="Alto"
          height={60}
          selectedFileE={file4}
          setSelectedFileE={setFile4}
        />
        <InputFileGal
          label="Sin sombra"
          shadow={false}
          selectedFileE={file4}
          setSelectedFileE={setFile4}
        />
        <InputFileGal
          label="Redondeado"
          rounded="full"
          selectedFileE={file4}
          setSelectedFileE={setFile4}
        />
      </ComponentPreviewGal>

      {/* Colores */}
      <h2 className="titleSecundary">Colores</h2>
      <p className="text">
        Con <span className="inline-code">bgColor</span> y
        <span className="inline-code">bgColorHover</span> puedes cambiar el
        color de fondo del área de carga en su estado normal y al pasar el mouse
        por encima
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
            <InputFileGal 
            label="Personalizado" 
            bgColor="#2aa198"
            bgColorHover="#238b83" 
            selectedFileE={file} 
            setSelectedFileE={setFile}
            />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
            <InputFileGal 
            label="Personalizado" 
            bgColor="#2aa198"
            bgColorHover="#238b83" 
            selectedFileE={file}
            setSelectedFileE={setFile}
            />`,
          },
        ]}
      >
        <InputFileGal
          label="Personzalizado"
          bgColor="#2aa198"
          bgColorHover="#238b83"
          selectedFileE={file5}
          setSelectedFileE={setFile5}
        />
      </ComponentPreviewGal>

      {/* Cambio de Iconos */}
      <h2 className="titleSecundary">Cambio de iconos</h2>
      <p className="text">
        Con <span className="inline-code">icon</span>,
        <span className="inline-code">iconColor</span> e
        <span className="inline-code">iconSize</span> puedes reemplazar el icono
        por defecto y ajustar su color y tamaño
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
            <InputFileGal 
            label="Subir documento"
            icon="tabler:file-upload"
            iconColor="#fff"
            iconSize={24}
            selectedFileE={file} 
            setSelectedFileE={setFile}
            />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
            <InputFileGal 
            label="Subir documento"
            icon="tabler:file-upload"
            iconColor="#fff"
            iconSize={24}
            selectedFileE={file} 
            setSelectedFileE={setFile}
            />`,
          },
        ]}
      >
        <InputFileGal
          label="Subir documento"
          icon="tabler:file-upload"
          iconColor="#fff"
          iconSize={24}
          selectedFileE={file6}
          setSelectedFileE={setFile6}
        />
      </ComponentPreviewGal>

      {/* Error */}
      <h2 className="titleSecundary">Mensaje de error</h2>
      <p className="text">
        La prop <span className="inline-code">errorMessage</span> muestra un
        texto de validación debajo del área de carga.Igual que en otros
        componentes, InputFile no valida nada por sí mismo, la lógica de cuándo
        mostrar el mensaje depende de ti
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
            <InputFileGal 
            selectedFileE={file} 
            setSelectedFileE={setFile}
            errorMessage="Debes seleccionar un archivo"
            />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
            <InputFileGal 
            selectedFileE={file} 
            setSelectedFileE={setFile}
            errorMessage="Debes seleccionar un archivo"
            />`,
          },
        ]}
      >
        <InputFileGal
          selectedFileE={file7}
          setSelectedFileE={setFile7}
          errorMessage="Debes seleccionar un archivo"
        />
      </ComponentPreviewGal>

      {/* Personalización*/}
      <h2 className="titleSecundary">Personalización de InputFile</h2>
      <p className="text">
        Para la Personalización del InputFile se ocuparon las siguientes
        propiedades:
        <span className="inline-code">customFIleClass</span>,
        <span className="inline-code">customSelectedClass</span>,
        <span className="inline-code">customLabelClass</span>,
        <span className="inline-code">customIconClass</span>
      </p>
      <p className="note">Nota:</p>
      <p className="text">
        Si los estilos personzalizados no se aplican correctamente, puede
        deberse a que exiten estilos con mayor prioridad. Para sobreescribir,
        puedes utilizar <span className="inline-code">!important</span> una vez
        ya aplicada, verás que los estilos que seleccionas se habrán aplicado.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
            <InputFileGal
            label="Subir archivo"
            selectedFileE={file}
            setSelectedFileE={setFile}
            customFIleClass="fileDropDemo"
            customSelectedClass="fileSelectedDemo"
            customLabelClass="fileLabelDemo"
            customIconClass="fileIconDemo"
            />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
            <InputFileGal
            label="Subir archivo"
            selectedFileE={file}
            setSelectedFileE={setFile}
            customFIleClass="fileDropDemo"
            customSelectedClass="fileSelectedDemo"
            customLabelClass="fileLabelDemo"
            customIconClass="fileIconDemo"
            />`,
          },
        ]}
      >
        <InputFileGal
          label="Subir archivo"
          selectedFileE={file8}
          setSelectedFileE={setFile8}
          customFIleClass="fileDropDemo"
          customSelectedClass="fileSelectedDemo"
          customLabelClass="fileLabelDemo"
          customIconClass="fileIconDemo"
        />
      </ComponentPreviewGal>

      {/* Diseño circular personalizado */}
      <h2 className="titleSecundary">Ejemplo: botón circular de subida</h2>
      <p className="text">
        Combinando <span className="inline-code">width</span>,
        <span className="inline-code">height</span>,
        <span className="inline-code">icon</span> e
        <span className="inline-code">iconSize</span> junto con las clases
        custom, es posible transformar por completo la apariencia del
        componente.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <InputFileGal
          label=""
          icon="fa:arrow-up"
          iconSize={100}
          shadow={false}
          selectedFileE={file}
          setSelectedFileE={setFile}
          customFIleClass="circleUploadDemo"
          customIconClass="circleUploadIcon"
          customLabelClass="circleUploadLabel"
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <InputFileGal
          label=""
          icon="fa:arrow-up"
          iconSize={100}
          shadow={false}
          selectedFileE={file}
          setSelectedFileE={setFile}
          customFIleClass="circleUploadDemo"
          customIconClass="circleUploadIcon"
          customLabelClass="circleUploadLabel"
        />`,
          },
        ]}
      >
        <InputFileGal
          label="Subir archivo"
          icon="fa:arrow-up"
          iconSize={100}
          shadow={false}
          selectedFileE={file9}
          setSelectedFileE={setFile9}
          customFIleClass="circleUploadDemo"
          customIconClass="circleUploadIcon"
          customLabelClass="circleUploadLabel"
          args={{ title: "Subir archivo" }}
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
          href="/componentsDocs/inputs/dropdown"
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
            DropDown
          </div>
        </a>

        <a
          href="/componentsDocs/inputs/inputradio"
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
            InputRadio
          </div>
        </a>
      </div>
    </div>
  );
}
