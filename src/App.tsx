import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./app/MainLayout";
import LandingScreen from "./app/landingPage/LandigScreen";
import { SecondaryLayout } from "./app/landingPage/SecundaryLayout";
import { Installation } from "./app/getStartedDocs/Installation";
import Functions from "./app/functionsDocs/Functions";
import Button from "./app/componentsDocs/Button";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Se agrega el navbar y footer, solo agregar rutas del contenido */}
        <Route element={<MainLayout />}>

          {/* Aqui van las rutas del contenido */}
          <Route element={<SecondaryLayout />}>
            <Route path="/docs" element={<Installation />} />
            <Route path="/functions" element={<Functions />} />
            <Route path="/button" element={<Button />} />
          </Route>

          <Route path="/" element={<LandingScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;