import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Script Manager build: React is bundled
export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' })],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/bigcommerce/standalone/index.tsx'),
      name: 'MasterFFLStandalone',
    },
    rollupOptions: {
      // Do not externalize react for this build, bundle it
      external: [],
      output: [
        {
          format: 'umd',
          entryFileNames: 'bigc-masterffl-sdk.standalone.js',
          name: 'MasterFFLStandalone',
        },
      ],
    },
    emptyOutDir: false, // keep checkout artifacts when building both
    sourcemap: true,
    target: 'esnext',
    minify: false,
    outDir: 'dist',
  },
  server: {
    port: 3001
  }
})


