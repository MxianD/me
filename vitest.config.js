import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path';
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@/app': path.resolve(__dirname, './src/app')
    },
  },
  test: {
    environment: 'jsdom',
    // 其他测试配置...
  },
})