import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, URL } from "node:url";

// uso: reflejar la versión exacta de galliard-ui instalada para mostrarla 
// Al instalar/actualizar la dependencia se toma la nueva.
const galliardUiPkg = JSON.parse(
  fs.readFileSync(
    path.resolve(process.cwd(), "node_modules/galliard-ui/package.json"),
    "utf-8",
  ),
);

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // 'serve' corresponde al comando de desarrollo (npm run dev)
  const isDev = command === "serve";

  return {
    plugins: [react()],
    // Resuelve galliard-ui hacia el código fuente local SOLAMENTE en desarrollo
    resolve: {
      alias: {
        ...(isDev
          ? {
              "galliard-ui": fileURLToPath(new URL("../galliard-ui/src", import.meta.url)),
              "@": fileURLToPath(new URL("../galliard-ui/src", import.meta.url)),
            }
          : {}),
      },
    },
    define: {
      __GALLIARD_UI_VERSION__: JSON.stringify(galliardUiPkg.version ?? "0.0.0"),
    },
  };
});
