import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { checker } from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        lintCommand: "eslint . --ext cjs,js,jsx,ts,tsx,html",
      },
      typescript: true,
    }),
  ],
});
