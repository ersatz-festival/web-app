import tailwindcss from '@tailwindcss/vite';
import minifyImages from './tools/minify-images';

export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
    modules: ['@pinia/nuxt'],
    vite: {
        plugins: [tailwindcss()],
    },
    hooks: {
        'build:before': async () => {
            await minifyImages();
        },
    },
});
