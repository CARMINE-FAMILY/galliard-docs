import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

type SidebarChild = {
  label: string;
  path: string;
};

type Props = {
  label: string;
  path: string;
  collapsed: boolean;
  children?: SidebarChild[]; // opcional, solo los items con sub-secciones lo usan
};

/**
 * Item del sidebar. Si no tiene `children` se comporta como un link normal.
 * Si tiene `children`, se convierte en un acordeón: el padre deja de navegar
 * y solo hace toggle, mostrando los sub-items debajo.
 */
export const SidebarItem = ({ label, path, collapsed, children }: Props) => {
  const location = useLocation();
  const hasChildren = !!children?.length;

  // Si la ruta actual es de uno de los hijos, el acordeón debe iniciar abierto
  const isChildActive =
    children?.some((child) => location.pathname === child.path) ?? false;

  const [open, setOpen] = useState(isChildActive);

  // Nunca se muestra abierto si el sidebar está colapsado (no hay espacio)
  const isOpen = !collapsed && (open || isChildActive);

  // Caso simple: sidebar colapsado o item sin hijos -> link normal
  if (collapsed || !hasChildren) {
    return (
      <NavLink
        to={path}
        title={collapsed ? label : undefined} // tooltip solo cuando está colapsado
        className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
      >
        <span className="icon">•</span>
        {!collapsed && <span className="label">{label}</span>}
      </NavLink>
    );
  }

  // Caso con hijos: el padre es un botón (toggle), no un NavLink
  return (
    <div className="sidebar-item-group">
      <button
        type="button"
        // sidebar-item = estilos base (padding, colores, etc)
        // sidebar-item-toggle = comportamiento propio del botón acordeón
        className={`sidebar-item sidebar-item-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="icon">•</span>
        <span className="label">{label}</span>
        <span className="chevron">▾</span>
      </button>

      {/* data-open controla la animación grid-template-rows en el SCSS */}
      <div className="sidebar-children" data-open={isOpen}>
        {/* wrapper necesario: el truco de animación con grid-template-rows
            requiere un solo hijo directo, si no los NavLink se encimaban */}
        <div className="sidebar-children-inner">
          {children!.map((child) => (
            <NavLink
              key={child.path}
              to={child.path}
              className={({ isActive }) =>
                `sidebar-child ${isActive ? "active" : ""}`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
