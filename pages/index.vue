<template>
    <div>
        <section class="mx-auto max-w-5xl px-6 pt-10 pb-6">
            <div class="space-y-4 sm:space-y-6">
                <article v-for="day in programme" :key="day.day" class="text-center">
                    <p class="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--color-primary)] mb-2">
                        {{ day.day }} · {{ day.date }}
                    </p>

                    <div
                        v-if="day.artists.length"
                        class="flex flex-wrap justify-center items-baseline gap-x-8 gap-y-1 text-[var(--color-primary)] uppercase leading-[0.95] tracking-tight text-3xl sm:text-5xl md:text-6xl"
                    >
                        <span v-for="artist in day.artists" :key="artist.name">{{ artist.name }}</span>
                    </div>
                    <p v-else class="italic text-[var(--color-muted)]">À dévoiler prochainement</p>
                </article>
            </div>

            <div class="mt-16 text-center">
                <NuxtLink
                    to="/billets"
                    class="inline-block px-10 py-4 rounded-full bg-[var(--color-primary)] text-[var(--color-bg)] uppercase text-base sm:text-lg tracking-widest shadow-sm hover:bg-[var(--color-primary-hover)] hover:shadow-md transition"
                >
                    Réserver mon billet
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';
import programmeData from '~/assets/data/programme2026.json';

interface Slot {
    name: string;
    genre?: string;
}
interface Day {
    day: string;
    date: string;
    artists: Slot[];
}

const programme = programmeData as Day[];

useHead({
    title: 'Programme | Ersatz Festival 2026',
    meta: [
        {
            name: 'description',
            content:
                'Ersatz Festival 2026 - 5e édition du 21 au 23 août à St-Blaise. Découvrez la programmation complète du festival de musique indépendante.',
        },
        { property: 'og:title', content: 'Ersatz Festival 2026 | 5e édition' },
        {
            property: 'og:description',
            content: 'Programmation complète du festival Ersatz 2026, du 21 au 23 août à St-Blaise.',
        },
        { property: 'og:image', content: 'https://ersatzfestival.ch/ersatz2026.jpg' },
        { property: 'og:url', content: 'https://ersatzfestival.ch/' },
        { property: 'og:type', content: 'website' },
    ],
});
</script>
