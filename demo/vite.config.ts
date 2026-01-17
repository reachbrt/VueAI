import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {}
  },
  // All packages now use npm instead of local aliases
  optimizeDeps: {
    include: ['compromise'],
    exclude: []
  },
  build: {
    // Don't externalize any dependencies to ensure everything is bundled
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
});
