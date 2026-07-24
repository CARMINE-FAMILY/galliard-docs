import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./app/MainLayout";
import LandingScreen from "./app/landingPage/LandigScreen";
import { SecondaryLayout } from "./app/landingPage/SecundaryLayout";
import { Installation } from "./app/getStartedDocs/Installation";
import Button from "./app/componentsDocs/Button";
import CheckBox from "./app/componentsDocs/inputs/CheckBox";
import DropDown from "./app/componentsDocs/inputs/DropDown";
import InputFile from "./app/componentsDocs/inputs/InputFile";
import InputRadio from "./app/componentsDocs/inputs/InputRadio";
import InputText from "./app/componentsDocs/inputs/InputText";
import TextArea from "./app/componentsDocs/inputs/TextArea";
import CopyText from "./app/componentsDocs/CopyText";
import CodeBlock from "./app/componentsDocs/CodeBlock";
import ComponentPreview from "./app/componentsDocs/ComponentPreview";
import BottomSheet from "./app/modalsDocs/BottomSheet";
import UnixActions from "./app/functionsDocs/UnixActions";
import OnClickOutside from "./app/functionsDocs/OnClickOutside";
import ValidateForms from "./app/functionsDocs/ValidateForms";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { useEffect } from "react";

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <BrowserRouter>
      <Routes>
        {/* Se agrega el navbar y footer, solo agregar rutas del contenido */}
        <Route element={<MainLayout />}>
          {/* Aqui van las rutas del contenido */}
          <Route element={<SecondaryLayout />}>
            {/* Primera parte de como instalar */}
            <Route path="/getStartDocs/docs" element={<Installation />} />

            {/* Segunda parte documentacion de los componentes */}
            <Route path="/componentsDocs/button" element={<Button />} />
            <Route
              path="/componentsDocs/inputs/checkbox"
              element={<CheckBox />}
            />
            <Route
              path="/componentsDocs/inputs/dropdown"
              element={<DropDown />}
            />
            <Route
              path="/componentsDocs/inputs/inputfile"
              element={<InputFile />}
            />
            <Route
              path="/componentsDocs/inputs/inputradio"
              element={<InputRadio />}
            />
            <Route
              path="/componentsDocs/inputs/inputtext"
              element={<InputText />}
            />
            <Route
              path="/componentsDocs/inputs/textarea"
              element={<TextArea />}
            />

            <Route path="/componentsDocs/copytext" element={<CopyText />} />

            <Route path="/componentsDocs/codeblock" element={<CodeBlock />} />

            <Route
              path="/componentsDocs/componentpreview"
              element={<ComponentPreview />}
            />
            {/* Tercera parte documentacion de modals */}
            <Route path="/modalsDocs/bottomsheet" element={<BottomSheet />} />

            {/* Cuarta parte documentacion de funciones */}
            <Route
              path="/functionsDocs/unixactions"
              element={<UnixActions />}
            />
            <Route
              path="/functionsDocs/onclickoutside"
              element={<OnClickOutside />}
            />
            <Route
              path="/functionsDocs/validateforms"
              element={<ValidateForms />}
            />
          </Route>
          <Route path="/" element={<LandingScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
