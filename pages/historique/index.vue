<template>
    <div class="mx-auto max-w-5xl px-6 pt-8 pb-6">
        <div class="space-y-12">
            <article v-for="edition in editions" :key="edition.year" class="text-center">
                <h2 class="text-5xl sm:text-7xl text-[var(--color-primary)] leading-none border-b-2 border-[var(--color-primary)] pb-2 mb-6">
                    {{ edition.year }}
                </h2>
                <div
                    v-if="edition.artists.length"
                    class="flex flex-wrap justify-center items-baseline gap-x-10 gap-y-1 text-[var(--color-primary)] uppercase leading-[0.95] tracking-tight text-xl sm:text-3xl"
                >
                    <span v-for="artist in edition.artists" :key="artist" class="break-words max-w-full">{{ artist.toUpperCase() }}</span>
                </div>
                <p v-else class="italic text-[var(--color-muted)]">Artistes non renseignés</p>
            </article>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';

useHead({
    title: 'Historique | Ersatz Festival',
    meta: [
        {
            name: 'description',
            content: 'Retour sur les éditions précédentes de Ersatz Festival depuis 2020.',
        },
        { property: 'og:title', content: 'Historique | Ersatz Festival' },
        { property: 'og:image', content: 'https://ersatzfestival.ch/ersatz2026.jpg' },
        { property: 'og:url', content: 'https://ersatzfestival.ch/historique' },
    ],
});

const editions = [
    {
        year: 2025,
        artists: [
            'Barbicop',
            'Batbait',
            'Coup de Coeur',
            'Dibby',
            'eggs and tiaras',
            'Ely Tina',
            'Esaïa',
            'Hantébius',
            'Isia',
            'NONANTE',
            'Orphia',
            'Pho3 b2b 13R',
            'Pug Impact',
            'REDMOON',
            'Roxo',
            'Serotonine',
            'Softlander',
            "Tomorrow's Ghost",
            'Zadkiel',
        ],
    },
    {
        year: 2023,
        artists: [
            'Club Plaisir',
            'Costard Crevette',
            "Don't Kill Duncan",
            'Elyssa Fleur',
            'Ensemble Diaphane',
            'Fluffy Machine',
            'Golden Mammi',
            'Grimace',
            'Hybisae',
            'Jo Mayasi',
            'Les Claudes',
            'Licking Rainbows',
            'Love in a Mist',
            'Potochkine',
            'Prune',
            'Sabbia nella Figa',
            'Sailling on Pluto',
            'Silance',
            'Smoky',
            'Taf Trio',
            '13R',
        ],
    },
    {
        year: 2021,
        artists: [
            'Al Toque Mestizo & Sergio Valdeos',
            'Bad Picture',
            'Bifidus.jpg & Téolefurieux & Unterschrift',
            'Colin Jean',
            'Duo Parasol',
            'Felix Rabin',
            'Fichier Important',
            'Gipsy Tonic',
            'Gofefo Konaté Band',
            'Haze',
            'Jurigoz',
            'Juste Ici',
            'Kérosène',
            'La Clinique du Dr Jedd',
            'Laura Perez',
            'Los Azulejos',
            'Namo',
            'Psycho Weazel',
            'Sabbia nella Figa',
            'Trio Epicure',
        ],
    },
    {
        year: 2020,
        artists: ['Édition privée :)'],
    },
];
</script>
