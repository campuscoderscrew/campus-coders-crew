import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/main-website/",
  plugins: [tailwindcss(), tsconfigPaths()],
});

/**
 * 
 * export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});

 */