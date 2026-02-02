import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  // 👇 this is the missing piece
  build: {
    outDir: '../wwwroot/clientapp',
    emptyOutDir: true
  },

  // 👇 only matters if you run Vite inside Docker (dev mode)
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true
  }
})
