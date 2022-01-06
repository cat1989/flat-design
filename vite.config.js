import { defineConfig } from 'vite'
import { resolve } from 'path'
import { config } from 'dotenv'
import react from '@vitejs/plugin-react-refresh'
import autoprefixer from 'autoprefixer'

config()
const port = process.env.npm_config_port || process.env.PORT

export default defineConfig({
    server: {
        port,
    },
    plugins: [
        react(),
    ],
    resolve: {
        extensions: [
            ".tsx", ".ts", ".js", ".mjs",
        ],
        alias: {
            "@": resolve(__dirname, './src'),
        },
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer,
            ],
        },
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import '@cat1989/chalk/src/index.scss';
                    @import '@/assets/styles/variables.scss';
                `,
            },
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, './src/components/index.ts'),
            name: 'flat-design',
            formats: [
                'es',
            ],
            fileName: (format) => `index.js`,
        },
        rollupOptions: {
            external: [
                "react", "react-router-dom", "react-dom",
            ],
        },
    },
})
