<template>
    <div class="mx-auto max-w-3xl px-6 pt-8 pb-12">
        <NuxtLink
            to="/"
            class="inline-block mb-6 text-sm uppercase tracking-widest text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
        >
            ← Programme
        </NuxtLink>

        <div :class="isPortrait ? 'md:flex md:flex-row-reverse md:items-start md:gap-8' : ''">
            <img
                ref="photoEl"
                :src="artist.photo"
                :alt="displayName"
                class="w-full h-auto border-2 border-[var(--color-primary)]"
                :class="isPortrait ? 'md:w-2/5 md:shrink-0' : ''"
                @load="measurePhoto"
            />

            <div class="min-w-0">
                <h1
                    class="mt-6 text-4xl sm:text-6xl uppercase leading-[0.95] tracking-tight text-[var(--color-primary)]"
                    :class="isPortrait ? 'md:mt-0' : ''"
                >
                    {{ displayName }}
                </h1>

                <dl class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base sm:text-lg">
                    <div>
                        <dt class="text-xs uppercase tracking-widest text-[var(--color-primary)]">Jour</dt>
                        <dd>{{ day.day }} {{ day.date }}</dd>
                    </div>
                    <div>
                        <dt class="text-xs uppercase tracking-widest text-[var(--color-primary)]">Horaire</dt>
                        <dd>{{ artist.start }} – {{ artist.end }}</dd>
                    </div>
                    <div>
                        <dt class="text-xs uppercase tracking-widest text-[var(--color-primary)]">Scène</dt>
                        <dd>{{ artist.stage }}</dd>
                    </div>
                    <div>
                        <dt class="text-xs uppercase tracking-widest text-[var(--color-primary)]">Style</dt>
                        <dd>{{ artist.style }}</dd>
                    </div>
                </dl>

                <div v-if="artist.bio" class="mt-8 text-base sm:text-lg leading-relaxed whitespace-pre-line text-[var(--color-ink)]">
                    {{ artist.bio }}
                </div>
            </div>
        </div>

        <nav
            class="mt-10 pt-6 border-t-2 border-[var(--color-primary)] flex justify-between gap-4 uppercase"
            aria-label="Navigation entre artistes"
        >
            <NuxtLink
                v-if="prev"
                :to="`/artistes/${prev.slug}`"
                class="min-w-0 text-left text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
            >
                <span class="block text-xs tracking-widest text-[var(--color-muted)]">← Précédent</span>
                <span class="block truncate text-lg sm:text-xl">{{ prev.name.replace('\n', ' ') }}</span>
            </NuxtLink>
            <span v-else></span>
            <NuxtLink
                v-if="next"
                :to="`/artistes/${next.slug}`"
                class="min-w-0 text-right text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
            >
                <span class="block text-xs tracking-widest text-[var(--color-muted)]">Suivant →</span>
                <span class="block truncate text-lg sm:text-xl">{{ next.name.replace('\n', ' ') }}</span>
            </NuxtLink>
            <span v-else></span>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { computed, createError, onMounted, ref, useHead, useRoute } from '#imports';
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
const route = useRoute();

const all = programme.flatMap((day) => day.artists.map((artist) => ({ day, artist })));
const index = all.findIndex(({ artist }) => artist.slug === route.params.slug);

if (index === -1) {
    throw createError({ statusCode: 404, statusMessage: 'Artiste introuvable', fatal: true });
}

const { day, artist } = all[index];
const prev = index > 0 ? all[index - 1].artist : null;
const next = index < all.length - 1 ? all[index + 1].artist : null;
const displayName = computed(() => artist.name.replace('\n', ' '));

const photoEl = ref<HTMLImageElement | null>(null);
const isPortrait = ref(false);

function measurePhoto() {
    const img = photoEl.value;
    if (img && img.naturalWidth > 0) {
        isPortrait.value = img.naturalHeight / img.naturalWidth > 1.2;
    }
}

// @load ne se déclenche pas si l'image est déjà en cache au montage
onMounted(measurePhoto);

useHead({
    title: `${displayName.value} | Ersatz Festival 2026`,
    meta: [
        {
            name: 'description',
            content: `${displayName.value} (${artist.style}) - ${day.day} ${day.date}, ${artist.start}, ${artist.stage}. Ersatz Festival 2026 à St-Blaise.`,
        },
        { property: 'og:title', content: `${displayName.value} | Ersatz Festival 2026` },
        { property: 'og:image', content: `https://ersatzfestival.ch${artist.photo}` },
        { property: 'og:url', content: `https://ersatzfestival.ch/artistes/${artist.slug}` },
    ],
});
</script>
