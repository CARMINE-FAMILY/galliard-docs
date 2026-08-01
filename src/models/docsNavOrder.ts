export interface DocsNavItem {
  href: string;
  label: string;
}

export const docsNavOrder: DocsNavItem[] = [
  { href: "/getStartDocs/docs", label: "Installation" },
  { href: "/componentsDocs/button", label: "Button" },
  { href: "/componentsDocs/inputs/checkbox", label: "CheckBox" },
  { href: "/componentsDocs/inputs/dropdown", label: "DropDown" },
  { href: "/componentsDocs/inputs/inputfile", label: "InputFile" },
  { href: "/componentsDocs/inputs/inputradio", label: "InputRadio" },
  { href: "/componentsDocs/inputs/inputtext", label: "InputText" },
  { href: "/componentsDocs/inputs/searchdown", label: "SearchDown" },
  { href: "/componentsDocs/inputs/textarea", label: "TextArea" },
  { href: "/componentsDocs/copytext", label: "CopyText" },
  { href: "/componentsDocs/codeblock", label: "CodeBlock" },
  { href: "/componentsDocs/componentpreview", label: "ComponentPreview" },
  { href: "/modalsDocs/bottomsheet", label: "BottomSheet" },
  { href: "/functionsDocs/unixactions", label: "UnixActions"},
  { href: "/functionsDocs/onclickoutside", label: "useOnClickOutside"},
  { href: "/functionsDocs/validateforms", label: "useValidateForms"},
  { href: "/functionsDocs/debouncerdoc", label: "useDebouncer"},
];

export function getDocsNavSiblings(currentHref: string) {
  const index = docsNavOrder.findIndex((item) => item.href === currentHref);
  if (index === -1) return { prev: undefined, next: undefined };

  return {
    prev: index > 0 ? docsNavOrder[index - 1] : undefined,
    next: index < docsNavOrder.length - 1 ? docsNavOrder[index + 1] : undefined,
  };
}
