import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:2001,
    // tự động mở brower
    open: true,
    // cho phép truy cập từ địa chỉ IP khác
    host: true
  }
})
