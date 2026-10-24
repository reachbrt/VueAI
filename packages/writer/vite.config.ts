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
      name: 'AivueWriter',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'index.mjs' : 'index.js'
    },
    rollupOptions: {
      external: ['vue', '@aivue/core'],
      output: {
        globals: {
          vue: 'Vue',
          '@aivue/core': 'AivueCore'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'writer.css';
          return assetInfo.name || '';
        }
      }
    },
    cssCodeSplit: false
  }
});
