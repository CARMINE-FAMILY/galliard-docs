import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./app/MainLayout";
import LandingScreen from "./app/landingPage/LandigScreen";
import {SecondaryLayout} from "./app/landingPage/SecundaryLayout";
import { Installation } from "./app/getStartedDocs/Installation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Se agrega el navbar y footer, solo agregar rutas del contenido */}
        <Route element={<MainLayout />}>
          {/* Aqui van las rutas del contenido */}
          <Route element={<SecondaryLayout />}>
            <Route path="/docs" element={<Installation />} />
          </Route>
          <Route path="/" element={<LandingScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;