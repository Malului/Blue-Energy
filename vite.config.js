import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'about-us': resolve(__dirname, 'about-us.html'),
        'contact-us': resolve(__dirname, 'contact-us.html')
      }
    }
  }
})