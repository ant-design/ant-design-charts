import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  root: './examples/',
  server: {
    port: 3001,
    open: '/',
  },
});
