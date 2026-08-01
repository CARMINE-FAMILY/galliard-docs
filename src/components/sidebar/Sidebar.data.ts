// Este archivo se basa para ser tu oragnizador de rutas
// y agregar los titulos que tendra el menu

// Este sirve para:
// label: el texto que vera el usuario
// path: la ruta a la que navegara
// children: si tiene submenus, se agregan aqui, si no tiene children es un item normal
export type SidebarItemType = {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
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
    items: [{ label: "Installation", path: "/getStartDocs/docs" }],
  },
  {
    title: "Components",
    items: [
      { label: "Button", path: "/componentsDocs/button" },
      {
        label: "Inputs",
        path: "/componentsDocs/inputs",
        children: [
          { label: "CheckBox", path: "/componentsDocs/inputs/checkbox" },
          { label: "DropDown", path: "/componentsDocs/inputs/dropdown" },
          { label: "InputFile", path: "/componentsDocs/inputs/inputfile" },
          { label: "InputRadio", path: "/componentsDocs/inputs/inputradio" },
          { label: "InputText", path: "/componentsDocs/inputs/inputtext" },
          { label: "SearchDown", path: "/componentsDocs/inputs/searchdown" },
          { label: "TextArea", path: "/componentsDocs/inputs/textarea" },
        ],
      },
      { label: "CopyText", path: "/componentsDocs/copytext" },
      { label: "CodeBlock", path: "/componentsDocs/codeblock" },
      { label: "ComponentPreview", path: "/componentsDocs/componentpreview" },
    ],
  },
  {
    title: "Modals",
    items: [{ label: "BottomSheet", path: "/modalsDocs/BottomSheet" }],
  },
  {
    title: "Functions",
    items: [
      { label: "UnixActions", path: "/functionsDocs/unixactions" },
      {
        label: "Hooks",
        path: "/functionsDocs/hooksDocs",
        children: [
          { label: "OnClickOutside", path: "/functionsDocs/onclickoutside" },
          { label: "ValidateForms", path: "/functionsDocs/validateforms" },
        ],
      },
    ],
  },
];
