<template>
    <div>
        <section class="mx-auto max-w-5xl px-6 pt-10 pb-6">
            <div class="mb-6 sm:mb-8 text-center">
                <button
                    type="button"
                    :aria-pressed="showTimes"
                    class="inline-block px-6 py-2 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] uppercase text-xs sm:text-sm tracking-widest hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] transition cursor-pointer"
                    @click="toggleTimes"
                >
                    {{ showTimes ? 'Masquer les horaires' : 'Voir les horaires' }}
                </button>
            </div>

            <div class="space-y-4 sm:space-y-6" :class="{ 'w-fit max-w-full mx-auto': showTimes }">
                <article v-for="day in programme" :key="day.day" class="text-center">
                    <p class="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--color-primary)] mb-2">
                        {{ day.day }} · {{ day.date }}
                    </p>

                    <TransitionGroup
                        v-if="day.artists.length"
                        tag="div"
                        name="prog"
                        class="prog-group text-[var(--color-primary)] uppercase leading-[0.95] tracking-tight text-3xl sm:text-5xl md:text-6xl"
                        :class="[
                            showTimes
                                ? 'flex flex-col items-start gap-y-2 max-w-full text-left'
                                : 'flex flex-wrap justify-center items-baseline gap-x-8 gap-y-1',
                            { 'prog-group--blurred': isShuffling },
                        ]"
                    >
                        <div v-for="artist in artistsFor(day)" :key="artist.name" class="flex items-baseline max-w-full">
                            <span
                                v-if="artist.start"
                                class="time-label shrink-0 overflow-hidden whitespace-nowrap tabular-nums tracking-normal text-sm sm:text-lg md:text-xl text-[var(--color-muted)]"
                                :class="{ 'time-label--visible': showTimes }"
                                :aria-hidden="!showTimes"
                                >{{ artist.start }} – {{ artist.end }}</span
                            >
                            <NuxtLink
                                :to="`/artistes/${artist.slug}`"
                                class="min-w-0 hover:text-[var(--color-primary-hover)]"
                                :class="{ 'whitespace-pre-line': showTimes }"
                                >{{ showTimes ? artist.name : artist.name.replace('\n', ' ') }}</NuxtLink
                            >
                        </div>
                    </TransitionGroup>
                    <p v-else class="italic text-[var(--color-muted)]">À dévoiler prochainement</p>
                </article>
            </div>

            <div class="mt-8 text-center">
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
import { ref, useHead } from '#imports';
import programmeData from '~/assets/data/programme2026.json';

interface Slot {
    slug: string;
    name: string;
    genre?: string;
    start?: string;
    end?: string;
}
interface Day {
    day: string;
    date: string;
    artists: Slot[];
}

const programme = programmeData as Day[];

const showTimes = ref(false);
const isShuffling = ref(false);
let shuffleTimer: ReturnType<typeof setTimeout> | undefined;

function toggleTimes() {
    showTimes.value = !showTimes.value;
    isShuffling.value = true;
    clearTimeout(shuffleTimer);
    shuffleTimer = setTimeout(() => {
        isShuffling.value = false;
    }, 700);
}

function artistsFor(day: Day): Slot[] {
    if (showTimes.value) return day.artists;
    return [...day.artists].sort((a, b) => a.name.localeCompare(b.name, 'fr'));
}

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

<style scoped>
/* Les noms « volent » vers leur nouvelle position (FLIP) */
.prog-move {
    transition: transform 1.1s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Léger flou pendant le réarrangement */
.prog-group {
    transition: filter 0.45s ease;
}

.prog-group--blurred {
    filter: blur(4px);
}

/* Les horaires se déplient en douceur */
.time-label {
    width: 15ch;
    max-width: 0;
    opacity: 0;
    transform: translateX(-0.5rem);
    transition:
        max-width 1.1s cubic-bezier(0.25, 0.8, 0.25, 1),
        opacity 0.8s ease 0.3s,
        transform 1.1s cubic-bezier(0.25, 0.8, 0.25, 1),
        margin-right 1.1s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.time-label--visible {
    max-width: 15ch;
    opacity: 1;
    transform: translateX(0);
    margin-right: 1rem;
}

@media (min-width: 640px) {
    .time-label--visible {
        margin-right: 1.5rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .prog-move,
    .time-label,
    .prog-group {
        transition: none;
    }

    .prog-group--blurred {
        filter: none;
    }
}
</style>
