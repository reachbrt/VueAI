import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    ...(!process.env.VITEST ? [dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
      outDir: 'dist'
    })] : []),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AivueStreamMarkdown',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'index.mjs' : 'index.js'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'stream-markdown.css';
          return assetInfo.name || 'asset';
        }
      }
    },
    cssCodeSplit: false
  }
});
