import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Polyfill for Node.js build environments (Netlify)
const crypto = require('crypto')

export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
    crypto: {
      getRandomValues: (arr) => crypto.randomFillSync(arr)
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
})
