import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/data': 'http://127.0.0.1:5000',  // Change this to your Flask backend URL
    },
  },
  plugins: [react()],
})
