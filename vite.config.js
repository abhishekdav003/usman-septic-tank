import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: '/usman-septic-tank/',
  css: {
    devSourcemap: false,
  },
  server: {
    open: true,
    hmr: {
      overlay: false,
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // ❌ Rollup options remove karein - yeh necessary nahi hai
  }
})