// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // Asegura que la raíz sea el directorio actual
  build: {
    outDir: 'dist'
  }
})