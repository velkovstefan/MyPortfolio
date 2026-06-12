import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/MyPortfolio/",
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // exposes on 0.0.0.0
    port: 5173,
  },
  optimizeDeps: {
    include: ["@heroui/react", "framer-motion"],
  },
  resolve: {
    alias: {
      "@heroui/react": "@heroui/react",
      // "@": path.resolve(__dirname, "."),
    },
  },
});