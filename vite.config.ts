import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,   // 想要的端口
    host: true    // 如需局域网访问
  }
});