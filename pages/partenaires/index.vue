<template>
    <div class="mx-auto max-w-4xl px-6 pt-8 pb-12">
        <h1 class="text-4xl sm:text-5xl uppercase text-[var(--color-primary)] leading-none">Merci&nbsp;!</h1>
        <p class="mt-6 text-base sm:text-lg text-[var(--color-ink)] leading-relaxed">
            Ersatz ne serait pas possible sans le soutien précieux de nos partenaires. Un grand merci à celles et ceux qui nous
            accompagnent et rendent l'aventure possible&nbsp;!
        </p>

        <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 items-center">
            <component
                :is="partner.url ? 'a' : 'div'"
                v-for="partner in partners"
                :key="partner.name"
                :href="partner.url"
                :target="partner.url ? '_blank' : undefined"
                :rel="partner.url ? 'noopener noreferrer' : undefined"
                class="flex items-center justify-center transition"
                :class="{ 'hover:opacity-70': partner.url }"
            >
                <img :src="partner.src" :alt="partner.name" class="max-h-24 w-auto object-contain" />
            </component>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useHead } from '#imports';

useHead({
    title: 'Partenaires | Ersatz Festival 2026',
    meta: [
        {
            name: 'description',
            content: 'Merci à nos partenaires qui soutiennent Ersatz Festival 2026 à St-Blaise.',
        },
        { property: 'og:title', content: 'Partenaires | Ersatz Festival 2026' },
        { property: 'og:image', content: 'https://ersatzfestival.ch/ersatz2026.jpg' },
        { property: 'og:url', content: 'https://ersatzfestival.ch/partenaires' },
    ],
});

const modules = import.meta.glob('~/assets/img/partenaires/*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    import: 'default',
}) as Record<string, string>;

const partnerUrls: Record<string, string> = {
    agculturel: 'https://www.agculturel.ch/',
    Raiffeisen: 'https://www.raiffeisen.ch/neuchatel-et-vallees/fr/qui-sommes-nous/votre-banque-locale/ce-qui-nous-differencie.html',
    DRG: 'https://www.docteurgabs.ch/fr/accueil/',
    ELLF: 'https://www.ellf-technique.ch/',
    LATENA: 'https://commune-latena.ch/',
    LoRo: 'https://www.soutien-loro.ch/fr',
    PJNE: 'https://www.neuchatelville.ch/participer/la-ville-et-les-jeunes/parlement-des-jeunes',
    SO: 'https://www.instagram.com/scene__ouverte/',
    SUISA: 'https://www.suisa.ch/fr/',
};

type Partner = { name: string; src: string; url?: string };

const basePartners: Partner[] = Object.entries(modules).map(([path, src]) => {
    const name =
        path
            .split('/')
            .pop()
            ?.replace(/\.[^.]+$/, '') ?? '';
    return { name, src, url: partnerUrls[name] };
});

const partners = ref<Partner[]>(basePartners);

onMounted(() => {
    const shuffled = [...basePartners];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    partners.value = shuffled;
});
</script>
