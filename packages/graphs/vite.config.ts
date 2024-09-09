import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: './tests',
  server: {
    port: 8084,
    open: '/',
  },
  plugins: [{ name: 'isolation' }],
  resolve: {
    alias: {
      '@ant-design/graphs': path.resolve(__dirname, './src'),
    },
  },
});
