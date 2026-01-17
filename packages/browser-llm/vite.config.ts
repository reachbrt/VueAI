import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.vue'],
      outDir: 'dist',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AiVueBrowserLLM',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['vue', '@aivue/core', '@mlc-ai/web-llm'],
      output: {
        globals: {
          vue: 'Vue',
          '@aivue/core': 'AiVueCore',
          '@mlc-ai/web-llm': 'WebLLM'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'browser-llm.css';
          return assetInfo.name || '';
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
  },
});

