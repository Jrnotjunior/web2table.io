import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Hostinger serves this site from the domain root, unlike GitHub Pages' repository subpath.
  base: '/',
  plugins: [react()],
})
