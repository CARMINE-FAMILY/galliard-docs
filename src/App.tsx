import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./app/MainLayout";
import LandingScreen from "./app/landingPage/LandigScreen";
import Nose from "./app/Nose";
import Final from "./app/Final";
import SecundaryLayout from "./app/landingPage/SecundaryLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Se agrega el navbar y footer, solo agregar rutas del contenido */}
        <Route element={<MainLayout />}>
          {/* Aqui van las rutas del contenido */}
          <Route element={<SecundaryLayout />}>
            <Route path="/nose" element={<Nose />} />
          </Route>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/final" element={<Final />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "./app/MainLayout";
// import LandingScreen from "./app/landingPage/LandigScreen";
// import Prueba from "./app/Prueba";
// //import {NotFound} from "./app/NotFound";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<LandingScreen />} />
//         </Route>

//          <Route path="/prueba" element={<Prueba />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
