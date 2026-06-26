// Este archivo se basa para ser tu oragnizador de rutas
// y agregar los titulos que tendra el menu 

// Este sirve para:
// label: el texto que vera el usuario
// path: la ruta a la que navegara
export type SidebarItemType = {
  label: string;
  path: string;
};

// Este sirve para:
// title: El nombre de la sección
// items: Es un arreglo de los elementos de acuerdo al navbar
export type SidebarGroupType = {
  title: string;
  items: SidebarItemType[];
};

// Funcion con el array de como ira estructurado el menú
// Si quisieras agregar un nuevo elemneto asegurate de agregarlo
// al navbar y a tu app.tsx para que funcione
export const sidebarData: SidebarGroupType[] = [
  {
    title: "Get Started",
    items: [
      { label: "Installation", path: "/docs" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Button", path: "/button" },
      { label: "Inputs", path: "/components/inputs" },
    ],
  },
  {
    title: "Functions",
    items: [{ label: "Overview", path: "/functions" }],
  },
];