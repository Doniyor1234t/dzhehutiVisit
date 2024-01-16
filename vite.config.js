import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: { preprocessorOptions: { scss: { additionalData: "@import \"/src/scss/_var.scss\"; ", }, }, },
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
      hooks: "/src/hooks",
      layouts: "/src/layouts",
      scss: "/src/scss",
      services: "/src/services",
      store: "/src/store",
      utils: "/src/utils",
      modules: "/src/modules",
      providers: "/src/providers",
    },
  },
})
