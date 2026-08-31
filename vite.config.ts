import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

// Lee la versión exacta de galliard-ui instalada para mostrarla 
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
  define: {
    __GALLIARD_UI_VERSION__: JSON.stringify(galliardUiPkg.version ?? "0.0.0"),
  },
});
