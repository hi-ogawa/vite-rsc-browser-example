import rsc from "@vitejs/plugin-rsc/plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import rscBrowser from "./browser-mode/plugin";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    rscBrowser(),
    rsc({
      entries: {
        rsc: "src/entry.rsc.tsx",
      },
    }),
    devtoolsJson(),
  ],
});
