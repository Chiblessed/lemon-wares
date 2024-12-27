import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  base: process.env.NODE_ENV === 'production' ? '/lemon-wares/' : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'swarmauri': fileURLToPath(new URL('node_modules/swarmauri/main.js', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ['swarmauri'],
  },
});