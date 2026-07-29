<template>
    <div class="mx-auto max-w-3xl px-6 pt-8 pb-6">
        <p class="text-xl text-[var(--color-ink)] leading-relaxed">
            Ersatz revient pour sa <strong>5<sup>e</sup> édition</strong> ! La formule reste la même : trois jours de musique et de fête,
            du <strong>21 au 23 août 2026</strong>. Des groupes, des chanteur·euse·s et des DJs - du coin et d'un peu plus loin - à
            (re)découvrir à St-Blaise, dans un cadre champêtre aux abords de la ferme du Clos-aux-Moines. Deux scènes, un bar, des food
            trucks et bien plus encore !
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
    title: 'Infos | Ersatz Festival 2026',
    meta: [
        {
            name: 'description',
            content: 'Toutes les infos pratiques pour Ersatz Festival 2026 à St-Blaise : accès, horaires, transports, camping.',
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
        text: 'Les lignes R13, R16, S20 et S21 permettent de venir facilement au festival. Selon la ligne, descendre à St-Blaise ou Marin-Epagnier, puis environ 15 minutes à pied. Voir les horaires CFF pour plus de détails.',
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
        title: 'Accès PMR',
        html: 'Le festival est entièrement accessible. Le sol est fait de gazon et de gravier. Une toilette PMR est à disposition sur le site. Les parkings pour le public sont situés à 500m, mais nous pouvons volontiers vous accueillir à côté de l\'entrée du festival. Pour toute demande, contacte <a href="mailto:info@ersatzfestival.ch" class="underline hover:text-[var(--color-primary)] transition">info@ersatzfestival.ch</a>.',
    },
    {
        title: 'Charte Aretha',
        text: "Le festival s'engage à proposer un environnement safer et adhère à la charte Aretha. Une équipe de bénévoles formé·e·s - les Bienveillant·e·s - veille à ta sécurité et est à l'écoute en cas de besoin.",
    },
    {
        title: 'Devenir bénévole',
        html: 'Envie de vivre le festival de l\'intérieur ? Rejoins l\'équipe de bénévoles ! Montage, démontage, décoration, billetterie, cuisine... il y en a pour tous les goûts. Inscris-toi via <a href="https://app.ersatzfestival.ch/benevolat/inscription/" target="_blank" rel="noopener" class="underline hover:text-[var(--color-primary)] transition">le formulaire d\'inscription</a>.',
    },
    {
        title: 'AG Culturel',
        html: 'Ersatz est partenaire de l\'<a href="https://www.agculturel.ch/" target="_blank" rel="noopener" class="underline hover:text-[var(--color-primary)] transition">AG Culturel</a>&nbsp;! Si tu as moins de 26 ans et que tu possèdes un AG Culturel, l\'entrée au festival est gratuite. Pour en profiter, réserve ta place à l\'avance par e-mail à <a href="mailto:info@ersatzfestival.ch?subject=R%C3%A9servation%20AG%20Culturel" class="underline hover:text-[var(--color-primary)] transition">info@ersatzfestival.ch</a> en indiquant ton nom et le ou les jours souhaités.',
    },
];
</script>
