import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_BASE_URL": JSON.stringify(env.REACT_APP_BASE_URL),
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": "/src",
        "@app": "/src/app",
        "@assets": "/src/assets",
        "@components": "/src/components",
        "@features": "/src/features",
        "@hooks": "/src/hooks",
        "@pages": "/src/pages",
        "@providers": "/src/providers",
        "@router": "/src/router",
        "@lib": "/src/lib",
      },
    },
  };
});
