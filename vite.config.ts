import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/node/index.ts',
      name: 'logger',
      fileName: 'logger',
      formats: ['es', 'cjs'],
    },
    minify: false,
    rolldownOptions: {
      external: [...Object.keys(pkg.dependencies)],
    },
  },
  plugins: [
    dts({
      entryRoot: './src',
      outDir: './dist/types',
    }),
  ],
});
