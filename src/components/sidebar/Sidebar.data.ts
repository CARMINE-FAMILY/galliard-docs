export type SidebarItemType = {
  label: string;
  path: string;
};

export type SidebarGroupType = {
  title: string;
  icon: string;
  items: SidebarItemType[];
};

export const sidebarData: SidebarGroupType[] = [
  {
    title: "Getting Started",
    icon: "📚",
    items: [
      { label: "Home", path: "/" },
      { label: "Installation", path: "/docs" },
    ],
  },
  {
    title: "Components",
    icon: "🧩",
    items: [
      { label: "Buttons", path: "/buttons" },
      { label: "Inputs", path: "/inputs" },
    ],
  },
];