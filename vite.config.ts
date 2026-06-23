import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: (content: string, filepath: string) => {
  //         if (filepath.endsWith("main.scss") || filepath.endsWith("vars.scss"))
  //           return content;
  //         return `@use "${path.resolve(__dirname, "src/styles/generals/vars").replace(/\\/g, "/")}" as *;\n${content}`;
  //       },
  //     },
  //   },
  // },
});
