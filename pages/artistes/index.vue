<template>
    <div class="mx-auto max-w-5xl px-6 pt-8 pb-12">
        <NuxtLink
            to="/"
            class="inline-block mb-6 text-sm uppercase tracking-widest text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
        >
            ← Programme
        </NuxtLink>

        <h1 class="text-4xl sm:text-5xl uppercase text-[var(--color-primary)] leading-none">Le détail de la prog'</h1>

        <div class="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <NuxtLink v-for="entry in allArtists" :key="entry.artist.slug" :to="`/artistes/${entry.artist.slug}`" class="group block">
                <div class="overflow-hidden border-2 border-[var(--color-primary)] aspect-square">
                    <img
                        :src="`/img/artistes/thumbs/${entry.artist.slug}.jpg`"
                        :alt="entry.artist.name.replace('\n', ' ')"
                        loading="lazy"
                        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <p
                    class="mt-2 text-lg sm:text-xl uppercase leading-tight text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)]"
                >
                    {{ entry.artist.name.replace('\n', ' ') }}
                </p>
                <p class="text-sm sm:text-base text-[var(--color-ink)] leading-snug">{{ entry.artist.style }}</p>
                <p class="text-xs sm:text-sm uppercase tracking-widest text-[var(--color-muted)]">{{ entry.day.day }}</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';
import programmeData from '~/assets/data/programme2026.json';

interface Artist {
    slug: string;
    name: string;
    start: string;
    end: string;
    stage: string;
    style: string;
    photo: string;
    bio: string;
}
interface Day {
    day: string;
    date: string;
    artists: Artist[];
}

const programme = programmeData as Day[];
const allArtists = programme.flatMap((day) => day.artists.map((artist) => ({ day, artist })));

useHead({
    title: "Le détail de la prog' | Ersatz Festival 2026",
    meta: [
        {
            name: 'description',
            content: 'Tous les artistes du Ersatz Festival 2026 à St-Blaise : photos, styles et jours de passage.',
        },
        { property: 'og:title', content: "Le détail de la prog' | Ersatz Festival 2026" },
        { property: 'og:image', content: 'https://ersatzfestival.ch/ersatz2026.jpg' },
        { property: 'og:url', content: 'https://ersatzfestival.ch/artistes' },
    ],
});
</script>
