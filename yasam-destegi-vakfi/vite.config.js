import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Project Pages base path for GitHub Pages
  base: '/yasam-destegi-vakfi/'
})

