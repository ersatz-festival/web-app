<template>
    <div class="text-pink-500 bg-purple-500">
        <img src="/img/ersatz-cover.png" alt="Ersatz Cover" class="w-full object-cover align-top bg-transparent" />

        <LayoutTitle title="Programme" />

        <!-- Filters section -->
        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-4">
            <div class="flex items-center space-x-2 overflow-x-auto whitespace-nowrap px-1 scrollbar-hide">
                <button
                    v-for="(btn, index) in daysFilters"
                    :key="index"
                    class="w-32 px-6 py-3 text-lg rounded-lg shadow duration-200 cursor-pointer"
                    :class="{
                        'bg-pink-500 text-white': filterDay === btn,
                        'text-purple-500 bg-gray-50 hover:bg-gray-100 hover:shadow-lg': filterDay !== btn,
                    }"
                    @click="filterDay = btn"
                >
                    {{ btn }}
                </button>
            </div>
            <div class="flex">
                <a
                    href="/ERSATZ-horaires.pdf"
                    target="_blank"
                    rel="noopener"
                    class="inline-flex items-center space-x-2 px-6 py-3 text-lg bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow hover:shadow-lg duration-200"
                >
                    <IconsCalendarDays class="w-5 h-5" />
                    <span>Voir les horaires détaillés</span>
                </a>
            </div>
        </section>

        <!-- Artists grid -->
        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="artist in sortedArtists" :key="artist.slug" class="col-span-1">
                    <ArtistsCard :artist="artist" />
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutCTA />
        </section>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';

useHead({
    title: 'Programme Ersatz Festival 2025 | Artistes et concerts du 22-24 août',
    meta: [
        {
            name: 'description',
            content:
                'Découvrez le programme complet de Ersatz Festival 2025 à St-Blaise : tous les artistes, groupes et horaires de concerts du 22 au 24 août. Festival de musique indépendante avec scène locale.',
        },
        {
            property: 'og:title',
            content: 'Programme Ersatz Festival 2025 | Artistes et concerts du 22-24 août',
        },
        {
            property: 'og:description',
            content:
                'Découvrez le programme complet de Ersatz Festival 2025 à St-Blaise : tous les artistes, groupes et horaires de concerts du 22 au 24 août. Musique indépendante et locale.',
        },
        {
            property: 'og:image',
            content: 'https://ersatzfestival.ch/img/ersatz-cover.png',
        },
        {
            property: 'og:url',
            content: 'https://ersatzfestival.ch/programme',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            name: 'keywords',
            content: 'Ersatz Festival, programme, artistes, concerts, St-Blaise, festival musique, programmation, scène locale',
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
    ],
});

import { computed, ref } from 'vue';
import { useArtistsStore } from '~/stores/artists';

const sortBy = ['name', 'day'];
const sort = ref(sortBy[0]);

const daysFilters = ['Tous', 'Vendredi', 'Samedi', 'Dimanche'];

const filterDay = ref(daysFilters[0]);

const allArtists = useArtistsStore().publicArtists;

const sortedArtists = computed(() => {
    const filtered = filterDay.value !== daysFilters[0] ? allArtists.filter((artist) => artist.day === filterDay.value) : allArtists;

    return sort.value === 'name'
        ? filtered.sort((a, b) => a.name.localeCompare(b.name))
        : filtered.sort((a, b) => a.day.localeCompare(b.day));
});
</script>
