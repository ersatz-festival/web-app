import tailwindcss from "@tailwindcss/vite";
import convertImages from './tools/convert-images';

export default defineNuxtConfig({
    ssr: false,
    app: {
        baseURL: '/web-app/',
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: [
        '~/assets/css/fonts.css',
        '~/assets/css/main.css',
    ],
    modules: ['@pinia/nuxt'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    hooks: {
        'build:before': async () => {
            await convertImages();
        },
    },
    // Ensure Vite is running inside the Docker container
    devServer: {
        host: '0.0.0.0',
        port: 3000,
    },
});
