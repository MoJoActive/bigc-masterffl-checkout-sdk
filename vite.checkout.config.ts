import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Checkout build: React is external
export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/bigcommerce/custom-checkout/index.tsx'),
      name: 'MasterFFLCheckout',
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@bigcommerce/checkout-sdk'],
      output: [
        {
          format: 'es',
          entryFileNames: 'bigc-masterffl-sdk.checkout.es.js',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            '@bigcommerce/checkout-sdk': 'BigCommerceCheckoutSDK',
          },
        },
        {
          format: 'umd',
          entryFileNames: 'bigc-masterffl-sdk.checkout.umd.cjs',
          name: 'MasterFFLCheckout',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            '@bigcommerce/checkout-sdk': 'BigCommerceCheckoutSDK',
          },
        },
      ],
    },
    emptyOutDir: true,
    sourcemap: true,
    target: 'esnext',
    minify: true,
    outDir: 'dist',
  },
  server: {
    port: 3000
  }
})


