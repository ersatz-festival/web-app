import tailwindcss from '@tailwindcss/vite';
import minifyImages from './tools/minify-images';

export default defineNuxtConfig({
    ssr: true,
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
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { name: 'robots', content: 'index, follow' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'theme-color', content: '#c026d3' },
                { 
                    name: 'google-site-verification', 
                    content: 'wRbcABe2fWsfrbSGOOPp-fupnNioCRISm3HmHUPS-GM'
                }
            ],
            link: [
                { rel: 'icon', href: '/favicon.ico' },
                { rel: 'canonical', href: 'https://ersatzfestival.ch' }
            ]
        }
    },
    routeRules: {
        // Ajouter des règles de cache pour améliorer les performances
        '/': { prerender: true },
        '/programme': { prerender: true },
        '/billets': { prerender: true },
        '/informations': { prerender: true },
        '/historique': { prerender: true },
    }
});
