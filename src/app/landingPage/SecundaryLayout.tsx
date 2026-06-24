import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";

export const SecondaryLayout = () => {
  return (
    <div className="docs-layout">
      <Sidebar />

      <main className="docs-content">
        <Outlet />
      </main>
    </div>
  );
};