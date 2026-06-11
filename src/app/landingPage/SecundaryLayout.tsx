import { Outlet } from "react-router-dom";

export default function SecundaryLayout() {
  return (
    <div className="container">
        <div style={{width:50, height:50, backgroundColor:'blue'}}></div>
        <Outlet/>
    </div>
  );
}