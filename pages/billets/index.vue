<template>
    <div class="text-pink-500 bg-purple-500">
        <LayoutTitle title="Billetterie" />

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutSubTitle title="Prix" />

            <table class="w-full text-base sm:text-xl md:text-2xl">
                <thead>
                    <tr class="border-b border-pink-500">
                        <th class="text-right py-2"></th>
                        <th class="text-right py-2">1 jour</th>
                        <th class="text-right py-2">Pass 3 jours</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(price, index) in pricesPerDay" :key="index" class="border-b border-pink-500">
                        <td class="text-left py-2">
                            {{ price.name }}
                        </td>
                        <td class="text-right py-2">CHF {{ price.dayPrice }}.-</td>
                        <td class="text-right py-2">
                            {{ price.passPrice ? 'CHF ' + price.passPrice + '.-' : '-' }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <p class="mt-4 text-xl md:text-2xl">
                Nous proposons un prix normal, et un prix de soutien — un peu plus élevé — pour les coeurs généreux qui veulent donner un
                coup de pouce à notre petit festival (et gagner notre amour éternel) !
            </p>

            <p class="mt-4 text-xl md:text-2xl">L'entrée est gratuite pour les enfants de 12 ans et moins.</p>
        </section>

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutCTA />
        </section>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';

useHead({
    title: 'Billets Ersatz Festival 2025 | Billets et Tarifs',
    meta: [
        {
            name: 'description',
            content:
                'Réservez vos billets pour le Ersatz Festival 2025 à St-Blaise. Early-bird, normal ou soutien, à partir de 15 CHF. Pass journalier ou 3 jours disponibles. Entrée gratuite -12 ans.',
        },
        {
            property: 'og:title',
            content: 'Billets Ersatz Festival 2025 | Billets et Tarifs',
        },
        {
            property: 'og:description',
            content:
                'Réservez vos billets pour le Ersatz Festival 2025 à St-Blaise. Early-bird, normal ou soutien, à partir de 15 CHF. Pass journalier ou 3 jours disponibles.',
        },
        {
            property: 'og:image',
            content: 'https://ersatzfestival.ch/img/ersatz-cover.png',
        },
        {
            property: 'og:url',
            content: 'https://ersatzfestival.ch/billets',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            name: 'keywords',
            content: 'Ersatz Festival, billetterie, tickets, billets, St-Blaise, festival musique, prix billets, réservation',
        },
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Event',
                name: 'Ersatz Festival 2025',
                startDate: '2025-08-22',
                endDate: '2025-08-24',
                location: {
                    '@type': 'Place',
                    name: 'Ferme du Clos-aux-Moines, St-Blaise',
                    address: 'St-Blaise, Neuchâtel, Suisse',
                },
                image: 'https://ersatzfestival.ch/img/ersatz-cover.png',
                offers: {
                    '@type': 'Offer',
                    price: '15-60',
                    priceCurrency: 'CHF',
                    url: 'https://ersatzfestival.ch/billets',
                },
            }),
        },
    ],
});

const pricesPerDay = [
    {
        name: 'Early-bird',
        dayPrice: 15,
        passPrice: 45,
    },
    {
        name: 'Normal',
        dayPrice: 20,
        passPrice: 50,
    },
    {
        name: 'Soutien',
        dayPrice: 30,
        passPrice: 60,
    },
    {
        name: 'Sur place',
        dayPrice: 25,
    },
    {
        name: 'Camping',
        dayPrice: 3,
    },
];
</script>
