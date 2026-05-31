<template>
    <div class="mx-auto max-w-3xl px-6 pt-16 pb-6">
        <LayoutTitle title="Infos" />

        <p class="mt-8 text-xl text-[var(--color-ink)] leading-relaxed">
            Ersatz est un festival de musique et d'art de rue, fondé en 2020. En 2026, il vivra sa
            <strong>5<sup>e</sup> édition</strong> du <strong>21 au 23 août</strong>, à la ferme du Clos-aux-Moines, à
            St-Blaise.
        </p>

        <div class="mt-12 divide-y-2 divide-[var(--color-primary)] border-t-2 border-b-2 border-[var(--color-primary)]">
            <details v-for="info in informations" :key="info.title" class="group py-4">
                <summary
                    class="flex items-center justify-between cursor-pointer list-none text-2xl sm:text-3xl uppercase text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
                >
                    <span>{{ info.title }}</span>
                    <span class="text-3xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <div class="mt-3 text-base sm:text-lg text-[var(--color-ink)] leading-relaxed whitespace-pre-line">
                    <p v-if="info.html" v-html="info.html"></p>
                    <p v-else>{{ info.text }}</p>
                </div>
            </details>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';

useHead({
    title: 'Infos pratiques | Ersatz Festival 2026',
    meta: [
        {
            name: 'description',
            content:
                'Toutes les infos pratiques pour Ersatz Festival 2026 à St-Blaise : accès, horaires, transports, camping.',
        },
        { property: 'og:title', content: 'Infos pratiques | Ersatz Festival 2026' },
        { property: 'og:image', content: 'https://ersatzfestival.ch/ersatz2026.jpg' },
        { property: 'og:url', content: 'https://ersatzfestival.ch/informations' },
    ],
});

const informations = [
    {
        title: 'Emplacement',
        text: 'Le festival a lieu à la ferme du Clos-aux-Moines, à St-Blaise.',
    },
    {
        title: 'Venir en transports publics',
        text: "Les lignes R13, R16, S20 et S21 permettent de venir facilement au festival. Selon la ligne, descendre à St-Blaise ou Marin-Epagnier, puis environ 15 minutes à pied. Voir les horaires CFF pour plus de détails.",
    },
    {
        title: 'Venir en voiture',
        text: 'Parkings disponibles à St-Blaise (Bucher + Walt, eureka FORMATION, GastroNeuchâtel) - environ 10 minutes à pied du site.',
    },
    {
        title: 'Horaires',
        text: 'Vendredi 21 août : 18h00 - 03h00\nSamedi 22 août : 16h00 - 04h00\nDimanche 23 août : 15h00 - 22h00',
    },
    {
        title: 'Camping sur place',
        text: 'Il est possible de planter sa tente et de dormir sur place le vendredi et le samedi soir. Petite restauration disponible.',
    },
    {
        title: 'Charte Aretha',
        text: "Le festival s'engage à proposer un environnement safer et adhère à la charte Aretha. Une équipe de bénévoles formé·e·s - les Bienveillant·e·s - veille à ta sécurité et est à l'écoute en cas de besoin.",
    },
];
</script>
