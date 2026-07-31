import { Outlet } from "react-router-dom";
import Navbar from "../components/generals/Navbar";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-layout__content">
        <Outlet />
      </main>
    </div>
  );
}
