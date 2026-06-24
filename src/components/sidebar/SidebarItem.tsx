import { NavLink } from "react-router-dom";

type Props = {
  label: string;
  path: string;
  collapsed: boolean;
};

export const SidebarItem = ({ label, path, collapsed }: Props) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `sidebar-item ${isActive ? "active" : ""}`
      }
    >
      <span className="icon">•</span>

      {!collapsed && <span className="label">{label}</span>}
    </NavLink>
  );
};