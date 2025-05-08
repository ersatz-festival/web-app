<template>
    <div class="text-pink-500 bg-purple-500">
        <img src="/img/ersatz-cover.png" alt="Ersatz Cover" class="w-full object-cover align-top bg-transparent" />

        <LayoutTitle title="Programme" />

        <!-- Filters section -->
        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-4">
            <div class="flex items-center space-x-2">
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
  title: 'Programme – Ersatz Festival',
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
