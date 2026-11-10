import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function duplicateHtmlForSpa(): Plugin {
  return {
    name: 'duplicate-html-for-spa',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexHtmlPath = path.join(distDir, 'index.html')
      if (fs.existsSync(indexHtmlPath)) {
        const html = fs.readFileSync(indexHtmlPath, 'utf-8')

        // 1. Create dist/thank-you/index.html for static /thank-you route
        const thankYouDir = path.join(distDir, 'thank-you')
        if (!fs.existsSync(thankYouDir)) {
          fs.mkdirSync(thankYouDir, { recursive: true })
        }
        fs.writeFileSync(path.join(thankYouDir, 'index.html'), html)

        // 2. Create dist/404.html for static host fallback
        fs.writeFileSync(path.join(distDir, '404.html'), html)
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), duplicateHtmlForSpa()],
  server: {
    port: 5173,
    host: true
  }
})
