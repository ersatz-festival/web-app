import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
    vite: {
        plugins: [tailwindcss()],
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { name: 'robots', content: 'index, follow' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'theme-color', content: '#ff604d' },
                {
                    name: 'google-site-verification',
                    content: 'wRbcABe2fWsfrbSGOOPp-fupnNioCRISm3HmHUPS-GM',
                },
            ],
            link: [
                { rel: 'icon', href: '/ersatz2026.ico' },
                { rel: 'canonical', href: 'https://ersatzfestival.ch' },
            ],
        },
    },
    routeRules: {
        '/': { prerender: true },
        '/billets': { prerender: true },
        '/informations': { prerender: true },
        '/historique': { prerender: true },
    },
});
