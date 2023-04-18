import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  // The below rollup option is to change entry point
  // build: {
  //   rollupOptions: {
  //     input: "src/m.js"
  //   }
  // },
  plugins: [svelte()],
});
