import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [tailwindcss(), tsconfigPaths()],
  base: '/main-website/'
});

/**
 * 
 * export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});

 */