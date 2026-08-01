import { useState } from "react";
import { InputTextGal, ComponentPreviewGal } from "galliard-ui";
import { DataTable } from "../../../components/table/DataTable";
import type { PropRow } from "../../../models/TableModel";
import { propsColumns } from "../../../hooks/usePropsTableColumns";
import { DocsPagination } from "../../../components/generals/DocsPagination";

export default function InputText() {
  const [value1, setValue1] = useState("");
  const [value1b, setValue1b] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");

  const [typeText, setTypeText] = useState("");
  const [typeEmail, setTypeEmail] = useState("");
  const [typePassword, setTypePassword] = useState("");
  const [typeUrl, setTypeUrl] = useState("");
  const [typeTel, setTypeTel] = useState("");
  const [typeNumber, setTypeNumber] = useState("");
  const [typeDate, setTypeDate] = useState("");
  const [typeTime, setTypeTime] = useState("");
  const [typeDatetime, setTypeDatetime] = useState("");
  const [typeSearch, setTypeSearch] = useState("");

  const contentProps: PropRow[] = [
    {
      name: "label",
      type: "string",
      description: "Texto que se muestra encima o al lado del input",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Texto guía mostrado cuando el input está vacío",
    },
    {
      name: "value",
      type: "string",
      description: "Valor actual del input",
    },
    {
      name: "setValue",
      type: "(value: string) => void",
      description: "Función que se ejecuta al escribir en el input",
    },
    {
      name: "errorMessage",
      type: "string",
      description: "Mensaje de error que se muestra debajo del input",
    },
  ];

  const behaviorProps: PropRow[] = [
    {
      name: "typeInput",
      type: "text, email, password, url, tel, number, date, time, datetime-local, search",
      typePlain: true,
      description:
        "Tipo nativo del input HTML. Con 'password' se agrega automáticamente el ícono para mostrar/ocultar el texto",
    },
    {
      name: "HorV",
      type: '"horizontal" ó "vertical"',
      description:
        "Define si el label se acomoda en fila o en columna respecto al input",
    },
    {
      name: "args",
      type: "InputHTMLAttributes<HTMLInputElement>",
      typePlain: true,
      description:
        "Props nativas adicionales que se pasan directo al <input />",
    },
  ];

  const appearanceProps: PropRow[] = [
    {
      name: "width",
      type: "string ó number",
      description: "Ancho del input",
    },
    {
      name: "height",
      type: "string ó number",
      description: "Alto del input",
    },
    {
      name: "rounded",
      type: "none ,sm , md , lg, full",
      defaultValue: "full",
      description: "Redondeo de las esquinas",
    },
    {
      name: "border",
      type: "boolean",
      defaultValue: "true",
      description: "Muestra u oculta el borde del input",
    },
    {
      name: "shadow",
      type: "boolean",
      description: "Aplica una sombra alrededor del input",
    },
    {
      name: "bgColor",
      type: "string",
      description: "Color de fondo del input",
    },
    {
      name: "textSize",
      type: "string ó number",
      description:
        "Tamaño de fuente compartido entre el label y el texto escrito dentro del input",
    },
    {
      name: "textColor",
      type: "string",
      description: "Color del texto escrito dentro del input",
    },
    {
      name: "labelColor",
      type: "string",
      description: "Color del label",
    },
    {
      name: "font",
      type: "OpenSansLight, OpenSansRegular, OpenSansSemiBold, OpenSansBold, OpenSansBolder",
      typePlain: true,
      description: "Fuente utilizada para el texto dentro del input",
    },
    {
      name: "fontLabel",
      type: "OpenSansLight, OpenSansRegular, OpenSansSemiBold, OpenSansBold, OpenSansBolder",
      typePlain: true,
      description: "Fuente utilizada para el label",
    },
  ];

  const iconsProps: PropRow[] = [
    {
      name: "seeIconLeft",
      type: "boolean",
      defaultValue: "true",
      description: "Indica si se muestra el ícono a la izquierda del input",
    },
    {
      name: "seeIconRight",
      type: "boolean",
      description: "Indica si se muestra el ícono a la derecha del input",
    },
    {
      name: "iconLeft",
      type: "string",
      defaultValue: '"mi:user"',
      description: "Identificador del ícono izquierdo",
    },
    {
      name: "iconRight",
      type: "string",
      defaultValue: '"mi:user"',
      description: "Identificador del ícono derecho",
    },
    {
      name: "iconColorL",
      type: "string",
      description: "Color del ícono izquierdo",
    },
    {
      name: "iconColorR",
      type: "string",
      description: "Color del ícono derecho",
    },
    {
      name: "iconSizeL",
      type: "string ó number",
      description: "Tamaño del ícono izquierdo",
    },
    {
      name: "iconSizeR",
      type: "string ó number",
      description: "Tamaño del ícono derecho",
    },
    {
      name: "iconColorPass",
      type: "string",
      description:
        "Color del ícono de mostrar/ocultar contraseña (solo con typeInput='password')",
    },
    {
      name: "iconSizePass",
      type: "string ó number",
      description: "Tamaño del ícono de mostrar/ocultar contraseña",
    },
    {
      name: "customIconLeft",
      type: "React.ReactNode",
      description: "Reemplaza el ícono izquierdo por un elemento personalizado",
    },
    {
      name: "customIconRight",
      type: "React.ReactNode",
      description: "Reemplaza el ícono derecho por un elemento personalizado",
    },
  ];

  const customizationProps: PropRow[] = [
    {
      name: "customContainerClass",
      type: "string",
      description: "Clase CSS adicional aplicada al contenedor del input",
    },
    {
      name: "customInputClass",
      type: "string",
      description: "Clase CSS adicional aplicada al <input> nativo",
    },
    {
      name: "customIconLClass",
      type: "string",
      description: "Clase CSS adicional aplicada al ícono izquierdo",
    },
    {
      name: "customIconRClass",
      type: "string",
      description: "Clase CSS adicional aplicada al ícono derecho",
    },
  ];

  return (
    <div className="inputText-docs docs-content">
      <h1 className="titlePrimary">InputText</h1>
      <p className="text">
        El componente InputText permite capturar texto libre, soportando
        distintos tipos nativos de input (texto, contraseña, correo, número,
        fecha, etc.), íconos a ambos lados y estilos personalizables.
      </p>
      <p className="note">Nota:</p>
      <p className="text">
        Este componente no tiene una prop{" "}
        <span className="inline-code">labelSize</span> independiente:{" "}
        <span className="inline-code">textSize</span> controla al mismo tiempo
        el tamaño de fuente del label y del texto escrito dentro del input.
      </p>

      <h2 className="titleSecundary">Props</h2>

      <h3 className="subtitle">Contenido</h3>
      <DataTable
        columns={propsColumns}
        data={contentProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Comportamiento</h3>
      <DataTable
        columns={propsColumns}
        data={behaviorProps}
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

      {/* InputText básico */}
      <h2 className="titleSecundary">InputText</h2>
      <p className="text">
        Ejemplo base del componente: un input de texto simple, usando{" "}
        <span className="inline-code">value</span> y{" "}
        <span className="inline-code">setValue</span> para capturar lo que el
        usuario escribe.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        const [value, setValue] = useState("");

        <InputTextGal
          label="Nombre"
          placeholder="Escribe tu nombre"
          value={value}
          setValue={setValue}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        const [value, setValue] = useState<string>("");

        <InputTextGal
          label="Nombre"
          placeholder="Escribe tu nombre"
          value={value}
          setValue={setValue}
        />`,
          },
        ]}
      >
        <InputTextGal
          label="Nombre"
          placeholder="Escribe tu nombre"
          value={value1}
          setValue={setValue1}
        />
      </ComponentPreviewGal>

      {/* Placeholder */}
      <h2 className="titleSecundary">Placeholder</h2>
      <p className="text">
        La prop <span className="inline-code">placeholder</span> muestra un
        texto guía dentro del input mientras está vacío, y desaparece en cuanto
        el usuario empieza a escribir.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <InputTextGal
          label="Correo"
          placeholder="ejemplo@correo.com"
          value={value}
          setValue={setValue}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <InputTextGal
          label="Correo"
          placeholder="ejemplo@correo.com"
          value={value}
          setValue={setValue}
        />`,
          },
        ]}
      >
        <InputTextGal
          label="Correo"
          placeholder="ejemplo@correo.com"
          value={value1b}
          setValue={setValue1b}
        />
      </ComponentPreviewGal>

      {/* Tipos de input */}
      <h2 className="titleSecundary">Tipos de input</h2>
      <p className="text">
        La prop <span className="inline-code">typeInput</span> acepta cualquier
        tipo nativo de <span className="inline-code">{`<input>`}</span> de HTML.
        El navegador ajusta automáticamente el teclado (en móvil), la validación
        básica y los controles nativos según el tipo elegido. Abajo se detalla
        cada uno
      </p>

      <h3 className="subtitle">¿Como se utilizan para el componente?</h3>
      <p className="text">
        Todos los tipos se definen de la misma forma: pasando el valor
        correspondiente a la prop <span className="inline-code">typeInput</span>
        . El resto de las props (<span className="inline-code">value</span>,
        <span className="inline-code">setValue</span>,
        <span className="inline-code">label</span>, íconos, colores, etc.)
        funcionan igual sin importar el tipo elegido.
      </p>

      <h3 className="subtitle">text</h3>
      <p className="text">
        Tipo por defecto. Acepta cualquier texto libre, sin ninguna validación
        ni formato especial
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
          <InputTextGal
            label="Nombre"
            typeInput="text"
            placeholder="Escribe tu nombre"
            value={value}
            setValue={setValue}
          />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
          <InputTextGal
            label="Nombre"
            typeInput="text"
            placeholder="Escribe tu nombre"
            value={value}
            setValue={setValue}
          />`,
          },
        ]}
      >
        <InputTextGal
          label="Nombre"
          typeInput="text"
          placeholder="Escribe tu nombre"
          value={typeText}
          setValue={setTypeText}
        />
      </ComponentPreviewGal>

      <h3 className="subtitle">email</h3>
      <p className="text">
        Optimizado para direcciones de correo. En móvil muestra un teclado con
        acceso rápido a <span className="inline-code">@</span> y
        <span className="inline-code">.com</span>. Con el atributo nativo
        <span className="inline-code">required</span> (viá
        <span className="inline-code">args</span>), el navegador valida el
        formato antes de enviar el formulario
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
          <InputTextGal
            label="Correo"
            typeInput="email"
            placeholder="ejemplo@correo.com"
            value={value}
            setValue={setValue}
          />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
          <InputTextGal
            label="Correo"
            typeInput="email"
            placeholder="ejemplo@correo.com"
            value={value}
            setValue={setValue}
          />`,
          },
        ]}
      >
        <InputTextGal
          label="Correo"
          typeInput="email"
          placeholder="ejemplo@correo.com"
          value={typeEmail}
          setValue={setTypeEmail}
        />
      </ComponentPreviewGal>

      <h3 className="subtitle">password</h3>
      <p className="text"></p>
      <p className="text">
        Oculta el texto escrito con puntos o asteriscos. El componente agrega
        automáticamente un ícono de ojo para mostrar u ocultar el contenido,
        personalizable con <span className="inline-code">iconColorPass</span>e
        <span className="inline-code">iconSizePass</span>.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
            <InputTextGal
              label="Contraseña"
              typeInput="password"
              placeholder="Escribe tu contraseña"
              value={value}
              setValue={setValue}
          />`,
          },
          {
            label: "TSX",
            language: "jsx",
            code: `
             <InputTextGal
              label="Contraseña"
              typeInput="password"
              placeholder="Escribe tu contraseña"
              value={value}
              setValue={setValue}
          />`,
          },
        ]}
      >
        <InputTextGal
          label="Contraseña"
          typeInput="password"
          placeholder="Escribe tu contraseña"
          value={typePassword}
          setValue={setTypePassword}
        />
      </ComponentPreviewGal>

      <h3 className="subtitle">url</h3>
      <p className="text">
        Pensado para direcciones web. Igual que
        <span className="inline-code">email</span>, el navegador puede validar
        que el valor tenga un formato de URL válido (ej. debe incluir
        <span className="inline-code">http://</span> o
        <span className="inline-code">https:</span>)
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
            <InputTextGal
              label="Sitio web"
              typeInput="url"
              placeholder="https://tusitio.com"
              value={value}
              setValue={setValue}  
          />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
            <InputTextGal
              label="Sitio web"
              typeInput="url"
              placeholder="https://tusitio.com"
              value={value}
              setValue={setValue}  
          />`,
          },
        ]}
      >
        <InputTextGal
          label="Sitio web"
          typeInput="url"
          placeholder="https://tusitio.com"
          value={typeUrl}
          setValue={setTypeUrl}
        />
      </ComponentPreviewGal>

      <h3 className="subtitle">tel (telefono)</h3>
      <p className="text">
        Pensado para números telefónicos. A diferencia de{" "}
        <span className="inline-code">number</span>, acepta símbolos comunes en
        teléfonos (<span className="inline-code">+</span>,{" "}
        <span className="inline-code">-</span>, espacios, paréntesis) y en móvil
        muestra el teclado numérico de marcado
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <InputTextGal
          label="Teléfono"
          typeInput="tel"
          placeholder="+52 222 123 4567"
          value={value}
          setValue={setValue}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <InputTextGal
          label="Teléfono"
          typeInput="tel"
          placeholder="+52 222 123 4567"
          value={value}
          setValue={setValue}
        />`,
          },
        ]}
      >
        <InputTextGal
          label="Teléfono"
          typeInput="tel"
          placeholder="+52 222 123 4567"
          value={typeTel}
          setValue={setTypeTel}
        />
      </ComponentPreviewGal>

      <h3 className="subtitle">number</h3>
      <p className="text">
        Solo acepta valores numéricos, y en la mayoría de navegadores agrega
        pequeñas flechas para incrementar o decrementar el valor. Puedes usar
        <span className="inline-code">args</span> para pasar
        <span className="inline-code">min</span>,
        <span className="inline-code">max</span> y
        <span className="inline-code">step</span> nativos.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
          <InputTextGal
            label="Edad"
            typeInput="number"
            placeholder="18"
            value={value}
            setValue={setValue}
            args={{min:0, max:120}}  
          />`,
          },
          {
            label: "JSX",
            language: "jsx",
            code: `
          <InputTextGal
            label="Edad"
            typeInput="number"
            placeholder="18"
            value={value}
            setValue={setValue}
            args={{min:0, max:120}}  
          />`,
          },
        ]}
      >
        <InputTextGal
          label="Edad"
          typeInput="number"
          placeholder="18"
          value={typeNumber}
          setValue={setTypeNumber}
          args={{ min: 0, max: 120 }}
        />
      </ComponentPreviewGal>

      <h3 className="subtitle">date</h3>
      <p className="text">
        Muestra un selector de fecha nativo del navegador (dia, mes, año), sin
        hora
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
          <InputTextGal
            label="Fecha de nacimiento"
            typeInput="date"
            value={value}
            setValue={setValue}
          />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
          <InputTextGal
            label="Fecha de nacimiento"
            typeInput="date"
            value={value}
            setValue={setValue}
          />`,
          },
        ]}
      >
        <InputTextGal
          label="Fecha de nacimiento"
          typeInput="date"
          value={typeDate}
          setValue={setTypeDate}
        />
      </ComponentPreviewGal>

      <h3 className="subtitle">time</h3>
      <p className="text">
        Muestra un selector de hora nativo (horas y minutos), sin fecha.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
          <InputTextGal
            label="Hola de la cita"
            typeInput="time"
            value={value}
            setValue={setValue}
          />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
          <InputTextGal
            label="Hola de la cita"
            typeInput="time"
            value={value}
            setValue={setValue}
          />`,
          },
        ]}
      >
        <InputTextGal
          label="Hola de la cita"
          typeInput="time"
          value={typeTime}
          setValue={setTypeTime}
        />
      </ComponentPreviewGal>

      <h3 className="subtitle">datetime-local</h3>
      <p className="text">
        Combina fecha y hora en un mismo selector, sin información de zona
        horaria.
        <p className="note">Nota:</p>
        Si no defines <span className="inline-code">width</span>, el componente
        usa <span className="inline-code">width: "auto"</span>
        automáticamente para este tipo, ya que el selector nativo suele
        necesitar más espacio del que ocuparía un input de texto normal
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
          <InputTextGal
            label="Fecha y hora del evento"
            typeInput="datetime-local"
            value={value}
            setValue={setValue}
          />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
          <InputTextGal
            label="Fecha y hora del evento"
            typeInput="datetime-local"
            value={value}
            setValue={setValue}
          />`,
          },
        ]}
      >
        <InputTextGal
          label="Fecha y hora del evento"
          typeInput="datetime-local"
          value={typeDatetime}
          setValue={setTypeDatetime}
        />
      </ComponentPreviewGal>

      <h3 className="subtitle">search</h3>
      <p className="text">
        Visualmente similar a <span className="inline-code">text</span>, pero
        algunos navegadores agregan una "x" para limpiar el campo rápidamente y
        ajustan el botón de "Enter" del teclado móvil a un ícono de búsqueda
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <InputTextGal
          label="Buscar"
          typeInput="search"
          iconLeft="tabler:search"
          placeholder="Buscar..."
          value={value}
          setValue={setValue}
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <InputTextGal
          label="Buscar"
          typeInput="search"
          iconLeft="tabler:search"
          placeholder="Buscar..."
          value={value}
          setValue={setValue}
        />`,
          },
        ]}
      >
        <InputTextGal
          label="Buscar"
          typeInput="search"
          iconLeft="tabler:search"
          placeholder="Buscar..."
          value={typeSearch}
          setValue={setTypeSearch}
        />
      </ComponentPreviewGal>

      {/* Orientación del label */}
      <h2 className="titleSecundary">Orientación del label</h2>
      <p className="text">
        La prop <span className="inline-code">HorV</span> define si el label se
        acomoda en columna (<span className="inline-code">"vertical"</span>) o
        en fila (<span className="inline-code">"horizontal"</span>) respecto al
        input.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <InputTextGal label="Vertical" HorV="vertical" value={value} setValue={setValue} />
        <InputTextGal label="Horizontal" HorV="horizontal" value={value} setValue={setValue} />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <InputTextGal label="Vertical" HorV="vertical" value={value} setValue={setValue} />
        <InputTextGal label="Horizontal" HorV="horizontal" value={value} setValue={setValue} />`,
          },
        ]}
      >
        <InputTextGal
          label="Vertical"
          HorV="vertical"
          value={value3}
          setValue={setValue3}
        />
        <InputTextGal
          label="Horizontal"
          HorV="horizontal"
          value={value3}
          setValue={setValue3}
        />
      </ComponentPreviewGal>

      {/* Iconos */}
      <h2 className="titleSecundary">Diseño de iconos</h2>
      <p className="text">
        Con <span className="inline-code">seeIconLeft</span> y
        <span className="inline-code">seeIconRight</span> controlas si se
        muestran íconos a cada lado del input, y con
        <span className="inline-code">iconLeft</span> /
        <span className="inline-code">iconRight</span> defines cuáles.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <InputTextGal label="Buscar" iconLeft="tabler:search" value={value} setValue={setValue} />
        <InputTextGal label="Sin ícono" seeIconLeft={false} value={value} setValue={setValue} />
        <InputTextGal label="Ícono derecho" seeIconLeft={false} seeIconRight iconRight="tabler:check" value={value} setValue={setValue} />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <InputTextGal label="Buscar" iconLeft="tabler:search" value={value} setValue={setValue} />
        <InputTextGal label="Sin ícono" seeIconLeft={false} value={value} setValue={setValue} />
        <InputTextGal label="Ícono derecho" seeIconLeft={false} seeIconRight iconRight="tabler:check" value={value} setValue={setValue} />`,
          },
        ]}
      >
        <InputTextGal
          label="Buscar"
          iconLeft="tabler:search"
          value={value4}
          setValue={setValue4}
        />
        <InputTextGal
          label="Sin ícono"
          seeIconLeft={false}
          value={value4}
          setValue={setValue4}
        />
        <InputTextGal
          label="Ícono derecho"
          seeIconLeft={false}
          seeIconRight
          iconRight="tabler:check"
          value={value4}
          setValue={setValue4}
        />
      </ComponentPreviewGal>

      {/* Apariencia */}
      <h2 className="titleSecundary">Tamaño y bordes</h2>
      <p className="text">
        Combinando <span className="inline-code">width</span>,
        <span className="inline-code">height</span>,
        <span className="inline-code">border</span>,
        <span className="inline-code">shadow</span> y
        <span className="inline-code">rounded</span> puedes ajustar las
        dimensiones y el borde del input.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <InputTextGal label="Ancho" width={320} value={value} setValue={setValue} />
        <InputTextGal label="Sin borde" border={false} value={value} setValue={setValue} />
        <InputTextGal label="Con sombra" shadow value={value} setValue={setValue} />
        <InputTextGal label="Redondeado" rounded="full" value={value} setValue={setValue} />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <InputTextGal label="Ancho" width={320} value={value} setValue={setValue} />
        <InputTextGal label="Sin borde" border={false} value={value} setValue={setValue} />
        <InputTextGal label="Con sombra" shadow value={value} setValue={setValue} />
        <InputTextGal label="Redondeado" rounded="full" value={value} setValue={setValue} />`,
          },
        ]}
      >
        <InputTextGal
          label="Ancho"
          width={320}
          value={value5}
          setValue={setValue5}
        />
        <InputTextGal
          label="Sin borde"
          border={false}
          value={value5}
          setValue={setValue5}
        />
        <InputTextGal
          label="Con sombra"
          shadow
          value={value5}
          setValue={setValue5}
        />
        <InputTextGal
          label="Redondeado"
          rounded="full"
          value={value5}
          setValue={setValue5}
        />
      </ComponentPreviewGal>

      {/* Error */}
      <h2 className="titleSecundary">Mensaje de error</h2>
      <p className="text">
        La prop <span className="inline-code">errorMessage</span> muestra un
        texto de validación debajo del input. Igual que en los demás
        componentes, InputText no valida nada por sí mismo — depende de ti
        decidir cuándo mostrarlo.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <InputTextGal
          label="Correo"
          value={value}
          setValue={setValue}
          errorMessage="Correo inválido"
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <InputTextGal
          label="Correo"
          value={value}
          setValue={setValue}
          errorMessage="Correo inválido"
        />`,
          },
        ]}
      >
        <InputTextGal
          label="Correo"
          value={value6}
          setValue={setValue6}
          errorMessage="Correo inválido"
        />
      </ComponentPreviewGal>

      {/* Personalización */}
      <h2 className="titleSecundary">Personalización de InputText</h2>
      <p className="text">
        Para la personalización de InputText se ocuparon las siguientes
        propiedades: <span className="inline-code">customContainerClass</span>,
        <span className="inline-code">customInputClass</span>,
        <span className="inline-code">customIconLClass</span> y
        <span className="inline-code">customIconRClass</span>.
      </p>
      <p className="note">Nota:</p>
      <p className="text">
        Si los estilos personalizados no se aplican correctamente, puede deberse
        a que existen estilos con mayor prioridad. Para sobreescribirlos, puedes
        utilizar <span className="inline-code">!important</span>; una vez
        aplicado, verás que los estilos que seleccionaste se habrán aplicado.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <InputTextGal
          label="Usuario"
          placeholder="Escribe tu usuario"
          value={value}
          setValue={setValue}
          iconLeft="tabler:user"
          customContainerClass="inputTextDemo"
          customInputClass="inputTextFieldDemo"
          customIconLClass="inputTextIconDemo"
        />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <InputTextGal
          label="Usuario"
          placeholder="Escribe tu usuario"
          value={value}
          setValue={setValue}
          iconLeft="tabler:user"
          customContainerClass="inputTextDemo"
          customInputClass="inputTextFieldDemo"
          customIconLClass="inputTextIconDemo"
        />`,
          },
        ]}
      >
        <InputTextGal
          label="Usuario"
          placeholder="Escribe tu usuario"
          value={value7}
          setValue={setValue7}
          iconLeft="tabler:user"
          customContainerClass="inputTextDemo"
          customInputClass="inputTextFieldDemo"
          customIconLClass="inputTextIconDemo"
        />
      </ComponentPreviewGal>

      <DocsPagination/>
    </div>
  );
}
