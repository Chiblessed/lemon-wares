import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Add alias for 'swarmauri' to make sure Vite resolves it correctly
      'swarmauri': fileURLToPath(new URL('node_modules/swarmauri/main.js', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ['swarmauri'],
  },
})
