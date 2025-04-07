import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    ssr: false,
    app: {
        baseURL: '/web-app/',
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: [
        '~/assets/css/main.css',
        '~/assets/css/fonts.css',
    ],
    modules: ['@pinia/nuxt'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    // Ensure Vite is running inside the Docker container
    devServer: {
        host: '0.0.0.0',
        port: 3000,
    },
});
