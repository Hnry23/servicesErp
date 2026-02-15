import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src',
    publicDir: 'public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                login: resolve(__dirname, 'src/login.html'),
                dashboard: resolve(__dirname, 'src/dashboard.html'),
            },
        },
    },
});
