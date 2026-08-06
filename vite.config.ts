import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/", // Must match your GitHub repo name!
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    strictPort: true,
    allowedHosts: ["callmegrowth.com"],
  },
  build: {
    rollupOptions: {
      input: "index.html",
    },
  },
});