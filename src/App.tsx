import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./app/MainLayout";
import LandingScreen from "./app/landingPage/LandigScreen";
import { SecondaryLayout } from "./app/landingPage/SecundaryLayout";
import { Installation } from "./app/getStartedDocs/Installation";
import Functions from "./app/functionsDocs/Functions";
import Button from "./app/componentsDocs/Button";
import CheckBox from "./app/componentsDocs/inputs/CheckBox";
import DropDown from "./app/componentsDocs/inputs/DropDown";
import InputFile from "./app/componentsDocs/inputs/InputFile";
import InputRadio from "./app/componentsDocs/inputs/InputRadio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Se agrega el navbar y footer, solo agregar rutas del contenido */}
        <Route element={<MainLayout />}>
          {/* Aqui van las rutas del contenido */}
          <Route element={<SecondaryLayout />}>
            <Route path="/getStartDocs/docs" element={<Installation />} />
            <Route path="/componentsDocs/button" element={<Button />} />
            <Route path="/componentsDocs/inputs/checkbox" element={<CheckBox />} />
            <Route path="/componentsDocs/inputs/dropdown" element={<DropDown />} />
            <Route path="/componentsDocs/inputs/inputfile" element={<InputFile />} />
            <Route path="/componentsDocs/inputs/inputradio" element={<InputRadio />} />

            <Route path="/functions" element={<Functions />} />
          </Route>

          <Route path="/" element={<LandingScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
