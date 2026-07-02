import { useState } from "react";
import { sidebarData } from "./Sidebar.data";
import { SidebarItem } from "./SidebarItem";
import "../../styles/components/sidebar/_sidebar.scss";
import { Icon } from "@iconify/react";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className={`sidebar-header ${collapsed ? "sidebar-header-collapsed" : ""}`}>
        {!collapsed && <h2 className="logo">Galliard Docs</h2>}
        <button className="button" onClick={() => setCollapsed(!collapsed)}>
          <Icon className="icon" icon="twemoji:hamburger" />
        </button>
      </div>

      <div className="content">
        {sidebarData.map((group) => (
          <div key={group.title} className="group">
            {!collapsed && <p className="title">{group.title}</p>}

            {group.items.map((item) => (
              <SidebarItem
                key={item.path}
                label={item.label}
                path={item.path}
                collapsed={collapsed}
              />
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};
