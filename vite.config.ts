import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// `base` disesuaikan dengan nama repository GitHub Pages.
// Jika memakai custom domain (CNAME), ubah kembali menjadi '/'.
export default defineConfig({
  plugins: [react()],
  base: '/mbah-umar/',
})
