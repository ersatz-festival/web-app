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
        </section>

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutCTA />
        </section>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';

useHead({
    title: 'Billets – Ersatz Festival',
    meta: [
        {
            name: 'description',
            content: 'Infos sur les billets du Ersatz Festival 2025.',
        },
        {
            property: 'og:title',
            content: 'Billets – Ersatz Festival',
        },
        {
            property: 'og:description',
            content: 'Tous les prix pour accéder au Ersatz Festival 2025 à St-Blaise..',
        },
        {
            property: 'og:image',
            content: 'https://ersatzfestival.ch/img/ersatz-cover.png',
        },
        {
            property: 'og:url',
            content: 'https://ersatzfestival.ch/billets',
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
