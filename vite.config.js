import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/bookmyshow/",
  plugins: [react()],
  port:3000
})
