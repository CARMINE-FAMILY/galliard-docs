import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { TableOfContents } from "../../components/toc/TableOfContents";

export const SecondaryLayout = () => {
  return (
    <div className="docs-layout">
      <Sidebar />

      <main className="docs-content doc-content">
        <Outlet />
      </main>

      <TableOfContents />
    </div>
  );
};
