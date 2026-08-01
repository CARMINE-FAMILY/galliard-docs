import { useCallback, useRef, useState } from "react";
import {
  useOnClickOutside,
  ComponentPreviewGal,
  CodeBlockGal,
} from "galliard-ui";
import { DataTable } from "../../../components/table/DataTable";
import type { PropRow } from "../../../models/TableModel";
import { propsColumns } from "../../../hooks/usePropsTableColumns";
import { DocsPagination } from "../../../components/generals/DocsPagination";

/* -------------------------------------------------------------------------- */
/*                                    DEMOS                                   */
/* -------------------------------------------------------------------------- */

const DropdownDemo = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback(() => {
    setOpen(false);
  }, []);

  useOnClickOutside(dropdownRef, handleOutsideClick);

  return (
    <div ref={dropdownRef} className="dropdownDemo">
      <button
        className="dropdownDemo__trigger"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "Cerrar menú" : "Abrir menú"}
      </button>

      {open && (
        <ul className="dropdownDemo__menu">
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
        </ul>
      )}
    </div>
  );
};

const ModalDemo = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback(() => {
    setOpen(false);
  }, []);

  useOnClickOutside(modalRef, handleOutsideClick);

  return (
    <div className="modalDemo">
      <button className="modalDemo__trigger" onClick={() => setOpen(true)}>
        Abrir modal
      </button>

      {open && (
        <div className="modalDemo__overlay">
          <div ref={modalRef} className="modalDemo__box">
            <p>Haz clic fuera de esta caja para cerrarla.</p>
            <button onClick={() => setOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              DOCUMENTACIÓN                                 */
/* -------------------------------------------------------------------------- */

export default function OnClickOutside() {
  const settingsProps: PropRow[] = [
    {
      name: "ref",
      type: "RefObject<T | null>",
      description:
        "Referencia al elemento HTML que será considerado como el área interna. Mientras la interacción ocurra dentro de este elemento, el handler no será ejecutado.",
    },
    {
      name: "handler",
      type: "(event: MouseEvent | TouchEvent) => void",
      description:
        "Función que se ejecuta cuando se detecta un clic o toque fuera del elemento referenciado.",
    },
  ];

  return (
    <div className="onClick-docs docs-content">
      <h1 className="titlePrimary">useOnClickOutside</h1>

      <p className="text">
        <span className="inline-code">useOnClickOutside</span> permite detectar
        cuándo el usuario hace clic o toca fuera de un elemento específico del
        DOM. Para ello recibe una referencia (
        <span className="inline-code">ref</span>) al elemento que se desea
        monitorear y una función (<span className="inline-code">handler</span>)
        que se ejecutará únicamente cuando la interacción ocurra fuera de dicho
        elemento.
      </p>
      <p className="text">
        Este comportamiento es especialmente útil para cerrar menús
        desplegables, modales, popovers, tooltips o cualquier componente
        flotante sin tener que implementar manualmente la lógica de detección.
      </p>

      {/* Importación */}
      <h2 className="titleSecundary">Importación</h2>
      <p className="text">
        Importa el hook desde la librería para poder utilizarlo dentro de
        cualquier componente funcional.
      </p>
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `
import { useOnClickOutside } from "galliard-ui";
      `,
          },
        ]}
      />

      {/* Funcionalidad */}
      <h2 className="titleSecundary">¿Cómo funciona?</h2>
      <p className="text">
        El hook registra internamente los eventos{" "}
        <span className="inline-code">mousedown</span> y{" "}
        <span className="inline-code">touchstart</span> sobre el documento. Cada
        vez que el usuario interactúa, compara el elemento donde ocurrió el
        evento con la referencia proporcionada.
      </p>
      <p className="text">
        Si la interacción ocurrió dentro del elemento referenciado, no realiza
        ninguna acción. Si ocurrió fuera de él, ejecuta la función enviada
        mediante <span className="inline-code">handler</span>.
      </p>

      {/* Parámetros */}
      <h2 className="titleSecundary">Parámetros</h2>
      <p className="text">
        El hook recibe dos parámetros: una referencia al elemento que será
        considerado como el área interna y una función que se ejecutará cuando
        el usuario haga clic o toque fuera de dicho elemento.
      </p>
      <DataTable
        columns={propsColumns}
        data={settingsProps}
        rowKey={(r) => r.name}
      />

      {/* Tipos */}
      <h3 className="subtitle">Tipos</h3>
      <p className="text">
        El hook define internamente un alias de tipo{" "}
        <span className="inline-code">Event</span>, el cual agrupa los dos tipos
        de eventos que puede recibir el{" "}
        <span className="inline-code">handler</span>.
      </p>
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `
type Event = MouseEvent | TouchEvent;
      `,
          },
        ]}
      />
      <p className="text">
        Gracias a este alias, el mismo{" "}
        <span className="inline-code">handler</span> puede responder tanto a
        eventos del mouse (<span className="inline-code">mousedown</span>) como
        a eventos táctiles (<span className="inline-code">touchstart</span>), ya
        que el hook escucha ambos para soportar tanto escritorio como
        dispositivos móviles.
      </p>

      {/* Ejemplo interactivo: Dropdown */}
      <h2 className="titleSecundary">Ejemplo interactivo</h2>
      <p className="text">
        Uno de los usos más comunes de este hook es cerrar automáticamente un
        menú desplegable cuando el usuario hace clic fuera de él. Mientras la
        interacción ocurra dentro del elemento referenciado, el menú permanecerá
        abierto.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
const [open, setOpen] = useState(false);
const dropdownRef = useRef(null);

const handleOutsideClick = useCallback(() => {
  setOpen(false);
}, []);

useOnClickOutside(dropdownRef, handleOutsideClick);

return (
  <div ref={dropdownRef}>
    <button onClick={() => setOpen((prev) => !prev)}>
      {open ? "Cerrar menú" : "Abrir menú"}
    </button>

    {open && (
      <ul>
        <li>Opción 1</li>
        <li>Opción 2</li>
        <li>Opción 3</li>
      </ul>
    )}
  </div>
);
      `,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
const [open, setOpen] = useState(false);
const dropdownRef = useRef<HTMLDivElement>(null);

const handleOutsideClick = useCallback(() => {
  setOpen(false);
}, []);

useOnClickOutside(dropdownRef, handleOutsideClick);

return (
  <div ref={dropdownRef}>
    <button onClick={() => setOpen((prev) => !prev)}>
      {open ? "Cerrar menú" : "Abrir menú"}
    </button>

    {open && (
      <ul>
        <li>Opción 1</li>
        <li>Opción 2</li>
        <li>Opción 3</li>
      </ul>
    )}
  </div>
);
      `,
          },
        ]}
      >
        <DropdownDemo />
      </ComponentPreviewGal>

      {/* Ejemplo práctico: Modal */}
      <h2 className="titleSecundary">Ejemplo práctico: Modal</h2>
      <p className="text">
        Otro caso de uso frecuente consiste en cerrar un modal cuando el usuario
        hace clic fuera de su contenido, sin necesidad de implementar lógica
        adicional sobre el fondo (<span className="inline-code">overlay</span>).
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
const [open, setOpen] = useState(false);
const modalRef = useRef(null);

const handleOutsideClick = useCallback(() => {
  setOpen(false);
}, []);

useOnClickOutside(modalRef, handleOutsideClick);

return (
  <>
    <button onClick={() => setOpen(true)}>Abrir modal</button>

    {open && (
      <div className="overlay">
        <div ref={modalRef} className="modalBox">
          <p>Haz clic fuera de esta caja para cerrarla.</p>
        </div>
      </div>
    )}
  </>
);
      `,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
const [open, setOpen] = useState(false);
const modalRef = useRef<HTMLDivElement>(null);

const handleOutsideClick = useCallback(() => {
  setOpen(false);
}, []);

useOnClickOutside(modalRef, handleOutsideClick);

return (
  <>
    <button onClick={() => setOpen(true)}>Abrir modal</button>

    {open && (
      <div className="overlay">
        <div ref={modalRef} className="modalBox">
          <p>Haz clic fuera de esta caja para cerrarla.</p>
        </div>
      </div>
    )}
  </>
);
      `,
          },
        ]}
      >
        <ModalDemo />
      </ComponentPreviewGal>

      {/* Comportamiento */}
      <h2 className="titleSecundary">Comportamiento</h2>
      <p className="text">
        El hook agrega los listeners al montar el componente y los remueve
        automáticamente al desmontarlo, evitando fugas de memoria. No es
        necesario limpiar manualmente los eventos ni gestionar el ciclo de vida
        del <span className="inline-code">ref</span> o{" "}
        <span className="inline-code">handler</span>.
      </p>
      <p className="note">Nota:</p>
      <p className="text">
        Ten cuidado de no crear la función{" "}
        <span className="inline-code">handler</span> de forma inline dentro del
        render sin memorizarla (por ejemplo con{" "}
        <span className="inline-code">useCallback</span>). Si se pasa una nueva
        referencia en cada render, el hook removerá y volverá a agregar los
        listeners constantemente.
      </p>

      <DocsPagination />
    </div>
  );
}
