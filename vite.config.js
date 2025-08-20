import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/n8n-chat': {
        target: 'https://bollemsimhadri.app.n8n.cloud',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/n8n-chat/,
            '/webhook/c4b58d85-6bd8-4b04-b599-c5d55308f721/chat'
          ),
      },
    },
  },
})
