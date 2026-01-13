import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    base: '/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    },
    server: {
        host: true,
        port: 5173,
        watch: {
            usePolling: true,
        }
    }
})
