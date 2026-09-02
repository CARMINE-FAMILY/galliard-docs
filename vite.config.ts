import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, URL } from "node:url";

const projectDir = import.meta.dirname ?? fileURLToPath(new URL(".", import.meta.url));

// uso: reflejar la versión exacta de galliard-ui instalada para mostrarla 
// Al instalar/actualizar la dependencia se toma la nueva.
const galliardUiPkg = JSON.parse(
  fs.readFileSync(
    path.resolve(process.cwd(), "node_modules/galliard-ui/package.json"),
    "utf-8",
  ),
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Resuelve galliard-ui (y su alias interno '@') hacia el fuente local
  // uso: reflejar cambios al instante sin publicar a npm.
  resolve: {
    alias: {
      "galliard-ui": fileURLToPath(new URL("../galliard-ui/src", import.meta.url)),
      "@": fileURLToPath(new URL("../galliard-ui/src", import.meta.url)),
      "react": path.resolve(projectDir, "node_modules/react"),
      "react-dom": path.resolve(projectDir, "node_modules/react-dom"),
    },
  },
  define: {
    __GALLIARD_UI_VERSION__: JSON.stringify(galliardUiPkg.version ?? "0.0.0"),
  },
});
