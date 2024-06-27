import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    // 改用 ip 方式開啟 dev 網址（方變 imgur api 測試）
    host: '127.0.0.1',
  },
  proxyTable: {
    // proxy all requests starting with /api to jsonplaceholder (將api請求轉發到mock server)
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  base: '/2023-summer-sideProject-shuttle/',
});
