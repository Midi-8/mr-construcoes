import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    outDir: '.',
    emptyOutDir: false,
    sourcemap: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/germany-map/main.tsx'),
      output: {
        format: 'iife',
        name: 'MRGermanyMap',
        entryFileNames: 'js/germany-map.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/germany-map.css';
          }
          return 'assets/[name][extname]';
        }
      }
    }
  }
});
