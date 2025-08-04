import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { randomFillSync } from 'crypto' // ✅ proper ES module import

export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
    crypto: {
      getRandomValues: (arr) => randomFillSync(arr)
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
})
