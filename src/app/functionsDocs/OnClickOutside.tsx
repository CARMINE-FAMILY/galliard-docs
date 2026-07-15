import { useRef, useState } from "react";
import { useOnClickOutside, ComponentPreviewGal } from "galliard-ui";
import { DataTable } from "../../components/DataTable";
import type { PropRow } from "../../models/TableModel";
import { propsColumns } from "../../hooks/usePropsTableColumns";

// Demo controlada: un "dropdown" que se cierra al hacer clic fuera de él
const DropdownDemo = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref} className="dropdownDemo">
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

// Demo con modal: se cierra al hacer clic fuera de la caja del modal
const ModalDemo = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="modalDemo">
      <button className="modalDemo__trigger" onClick={() => setOpen(true)}>
        Abrir modal
      </button>
      {open && (
        <div className="modalDemo__overlay">
          <div ref={ref} className="modalDemo__box">
            <p>Haz clic fuera de esta caja para cerrarla.</p>
            <button onClick={() => setOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function OnClickOutside() {
  const parametrosProps: PropRow[] = [
    {
      name: "ref",
      type: "RefObject<T | null>",
      description:
        "Referencia al elemento HTML considerado como el área 'dentro'. Los clics o toques dentro de este elemento no disparan el handler.",
    },
    {
      name: "handler",
      type: "(event: MouseEvent | TouchEvent) => void",
      description:
        "Función que se ejecuta cuando se detecta un clic o toque fuera del elemento referenciado.",
    },
  ];

  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">useOnClickOutside</h1>

      <p className="text">
        El hook useOnClickOutside detecta clics (o toques, en dispositivos
        táctiles) realizados fuera de un elemento y ejecuta una función cuando
        esto ocurre. Es útil para cerrar dropdowns, modales, menús contextuales
        o cualquier elemento flotante al interactuar fuera de él.
      </p>

      <h2 className="titleSecundary">Parámetros</h2>
      <DataTable
        columns={propsColumns}
        data={parametrosProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Tipos</h3>
      <p className="text">
        El hook define internamente un alias de tipo{" "}
        <span className="inline-code">Event</span> para simplificar la firma del{" "}
        <span className="inline-code">handler</span>:
      </p>
      <p className="text">
        <span className="inline-code">
          type Event = MouseEvent | TouchEvent;
        </span>
      </p>
      <p className="text">
        Esto permite que el mismo handler reciba tanto eventos de mouse (
        <span className="inline-code">mousedown</span>) como eventos táctiles (
        <span className="inline-code">touchstart</span>), ya que el hook escucha
        ambos para soportar tanto escritorio como dispositivos móviles.
      </p>

      {/* Ejemplo básico */}
      <h2 className="titleSecundaryButton">Ejemplo básico</h2>
      <p className="text">
        Se pasa la <span className="inline-code">ref</span> del contenedor que
        quieres delimitar como "dentro", y un
        <span className="inline-code">handler</span> que se ejecuta al detectar
        un clic fuera de ese contenedor.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        const [open, setOpen] = useState(false);
        const ref = useRef(null);

        useOnClickOutside(ref, () => setOpen(false));

        return (
          <div ref={ref}>
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
        );`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        const [open, setOpen] = useState(false);
        const ref = useRef<HTMLDivElement>(null);

        useOnClickOutside(ref, () => setOpen(false));

        return (
          <div ref={ref}>
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
        );`,
          },
        ]}
      >
        <DropdownDemo />
      </ComponentPreviewGal>

      {/* Ejemplo interactivo */}
      <h2 className="titleSecundaryButton">Ejemplo interactivo</h2>
      <p className="text">
        El mismo patrón se puede usar para cerrar un modal al hacer clic fuera
        de su contenido, sin necesidad de un botón o backdrop con
        <span className="inline-code">onClick</span> adicional.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        const [open, setOpen] = useState(false);
        const ref = useRef(null);

        useOnClickOutside(ref, () => setOpen(false));

        return (
          <>
            <button onClick={() => setOpen(true)}>Abrir modal</button>
            {open && (
              <div className="overlay">
                <div ref={ref} className="modalBox">
                  <p>Haz clic fuera de esta caja para cerrarla.</p>
                  <button onClick={() => setOpen(false)}>Cerrar</button>
                </div>
              </div>
            )}
          </>
        );`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        const [open, setOpen] = useState(false);
        const ref = useRef<HTMLDivElement>(null);

        useOnClickOutside(ref, () => setOpen(false));

        return (
          <>
            <button onClick={() => setOpen(true)}>Abrir modal</button>
            {open && (
              <div className="overlay">
                <div ref={ref} className="modalBox">
                  <p>Haz clic fuera de esta caja para cerrarla.</p>
                  <button onClick={() => setOpen(false)}>Cerrar</button>
                </div>
              </div>
            )}
          </>
        );`,
          },
        ]}
      >
        <ModalDemo />
      </ComponentPreviewGal>

      {/* Comportamiento */}
      <h2 className="titleSecundaryButton">Comportamiento</h2>
      <p className="text">
        Escucha los eventos <span className="inline-code">mousedown</span> y{" "}
        <span className="inline-code">touchstart</span> a nivel de{" "}
        <span className="inline-code">document</span>, cubriendo tanto
        interacción con mouse como con dispositivos táctiles. Si{" "}
        <span className="inline-code">ref.current</span> es{" "}
        <span className="inline-code">null</span> (elemento aún no montado o ya
        desmontado), el handler no se ejecuta. Los listeners se remueven
        automáticamente al desmontar el componente o cuando cambian{" "}
        <span className="inline-code">ref</span> o{" "}
        <span className="inline-code">handler</span>.
      </p>

      <p className="note">Nota:</p>
      <p className="text">
        Ten cuidado de no crear la función{" "}
        <span className="inline-code">handler</span> de forma inline en cada
        render sin memorizarla (por ejemplo con{" "}
        <span className="inline-code">useCallback</span>), ya que al cambiar de
        referencia en cada render, el hook removerá y volverá a agregar los
        listeners constantemente.
      </p>
    </div>
  );
}
