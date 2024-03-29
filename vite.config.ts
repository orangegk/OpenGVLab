import { defineConfig } from "vite";
import { fileURLToPath, URL } from 'node:url'
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  //解决“vite use `--host` to expose”
  // base: './',
  base: "/OpenGVLab/",
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  // resolve: {
  //   //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'
  //   alias: [
  //     {
  //       find: "@",
  //       replacement: resolve(__dirname, "src"),
  //     },
  //   ],
  // },
  build: {
    target: "esnext",
    outDir: "docs",
    assetsDir: "assets",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // chunkSizeWarningLimit: 1000,
  },

});
