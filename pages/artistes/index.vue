<script setup lang="ts">
import { ref, computed } from 'vue';
import { useArtistsStore } from '~/stores/artists';

const sortBy = ['name', 'day'];
const sort = ref(sortBy[0]);

const filterDay = ref<string | null>(null);

const allArtists = useArtistsStore().publicArtists;

const sortedArtists = computed(() => {
    let filtered = filterDay.value
        ? allArtists.filter(artist => artist.day === filterDay.value)
        : allArtists;

    return sort.value === 'name'
        ? filtered.sort((a, b) => a.name.localeCompare(b.name))
        : filtered.sort((a, b) => a.day.localeCompare(b.day));
});
</script>

<template>
    <div class="text-pink-500 bg-purple-500">
        <img
            src="/public/img/ersatz-cover-processed.png"
            alt="Ersatz"
            class="w-full object-cover align-top bg-transparent"
        />

        <LayoutTitle title="Programme" />

        <!-- Boutons de filtre (style tuile) -->
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="flex flex-wrap gap-4">
                <button
                class="rounded-lg shadow duration-300 px-6 py-3 text-lg font-semibold transition-colors"
                :class="{
                    'bg-pink-500 text-white': !filterDay,
                    'text-purple-500 bg-gray-50 hover:bg-gray-200 hover:shadow-lg': filterDay
                }"
                @click="filterDay = null"
                >
                Tous
                </button>
                <button
                class="rounded-lg shadow duration-300 px-6 py-3 text-lg font-semibold transition-colors"
                :class="{
                    'bg-pink-500 text-white': filterDay === 'Vendredi',
                    'text-purple-500 bg-gray-50 hover:bg-gray-200 hover:shadow-lg': filterDay !== 'Vendredi'
                }"
                @click="filterDay = 'Vendredi'"
                >
                Vendredi
                </button>
                <button
                class="rounded-lg shadow duration-300 px-6 py-3 text-lg font-semibold transition-colors"
                :class="{
                    'bg-pink-500 text-white': filterDay === 'Samedi',
                    'text-purple-500 bg-gray-50 hover:bg-gray-200 hover:shadow-lg': filterDay !== 'Samedi'
                }"
                @click="filterDay = 'Samedi'"
                >
                Samedi
                </button>
                <button
                class="rounded-lg shadow duration-300 px-6 py-3 text-lg font-semibold transition-colors"
                :class="{
                    'bg-pink-500 text-white': filterDay === 'Dimanche',
                    'text-purple-500 bg-gray-50 hover:bg-gray-200 hover:shadow-lg': filterDay !== 'Dimanche'
                }"
                @click="filterDay = 'Dimanche'"
                >
                Dimanche
                </button>
            </div>
            </div>


        <!-- Grille des artistes -->
        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                    v-for="artist in sortedArtists"
                    :key="artist.slug"
                    class="col-span-1"
                >
                    <ArtistsCard :artist="artist" />
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutCTA />
        </section>
    </div>
</template>
