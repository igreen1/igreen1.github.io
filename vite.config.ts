import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the root of iangreen.dev (custom domain via public/CNAME)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
