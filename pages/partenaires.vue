<template>
    <div class="text-pink-500 bg-purple-500">
        <LayoutTitle title="Partenaires" class="mb-8" />
        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <p class="text-lg text-center mb-12 max-w-2xl mx-auto">
                Ersatz Festival remercie chaleureusement ses partenaires pour leur soutien précieux. Leur engagement rend cette aventure
                possible !
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
                <div v-for="(logo, i) in logos" :key="logo" class="flex items-center justify-center">
                    <a :href="links[i]" target="_blank" rel="noopener noreferrer">
                        <img
                            :src="`/img/${logo}`"
                            :alt="logo.replace('.png', '')"
                            :class="logo === 'Facchinetti.png' ? 'max-h-26 object-contain' : 'max-h-16 object-contain'"
                        />
                    </a>
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
import LayoutTitle from '~/components/layout/Title.vue';

useHead({
    title: 'Partenaires | Ersatz Festival',
    meta: [{ name: 'description', content: 'Remerciements aux partenaires du Ersatz Festival.' }],
});

const logos = [
    'LoRo.png',
    'LATENA.png',
    'PJNE.png',
    'SUISA.png',
    'DRG.png',
    'CSP.png',
    'Facchinetti.png',
    'Raiffeisen.png',
    'Ehro.png',
    'ELLF.png',
    'R_MANTUANO.png',
    'SO.png',
];
const links = [
    'https://soutien-loro.ch/fr',
    'https://commune-latena.ch/',
    'https://www.neuchatelville.ch/participer/la-ville-et-les-jeunes/parlement-des-jeunes',
    'https://www.suisa.ch/fr/',
    'https://www.docteurgabs.ch/fr/accueil/',
    'https://csp.ch/neuchatel/',
    'https://www.facchinettisa.ch/',
    'https://www.raiffeisen.ch/neuchatel-et-vallees/fr.html',
    'https://ehro.app/',
    'https://www.ellf-technique.ch/',
    'https://mantuano.ch/',
    'https://www.instagram.com/scene__ouverte/',
];
</script>
