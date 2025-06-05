<template>
    <div class="text-pink-500 bg-purple-500">
        <LayoutTitle title="Informations" />

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <section class="py-8 border-t border-pink-500">
                <div class="flex items-center space-x-4">
                    <IconsMinus class="w-12 h-12 text-pink-500" />
                    <LayoutSubTitle title="Ersatz Festival" />
                </div>

                <div class="mt-4 grid grid-cols-6 gap-4">
                    <p class="col-span-6 sm:col-span-6 text-xl md:text-2xl">
                        Ersatz est un festival biannuel de musique et d’art de rue, fondé en 2020. En 2025, il vivra sa quatrième édition
                        du <strong>22 au 24 août</strong>.
                    </p>
                </div>
            </section>

            <section
                v-for="(info, index) in informations"
                :key="index"
                :class="{
                    'border-b border-pink-500': index === informations.length - 1,
                    'border-t border-pink-500': true,
                }"
            >
                <Disclosure v-slot="{ open }">
                    <DisclosureButton class="flex items-center space-x-4 w-full cursor-pointer group hover:text-gray-50 duration-200">
                        <component
                            :is="open ? IconsMinus : IconsPlus"
                            class="w-10 h-10 md:w-12 md:h-12 text-pink-500 group-hover:text-gray-50 duration-200"
                        />
                        <h3 class="py-4 text-4xl md:text-5xl tracking-tight">
                            {{ info.title }}
                        </h3>
                    </DisclosureButton>
                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-out"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <DisclosurePanel>
                            <p class="pb-2 text-xl md:text-2xl whitespace-pre-line">
                                {{ info.text }}
                            </p>
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
            </section>
        </section>

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutCTA />
        </section>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';

useHead({
    title: 'Informations Pratiques Ersatz Festival 2025 | Accès, Horaires, Camping',
    meta: [
        {
            name: 'description',
            content:
                'Toutes les informations pratiques pour préparer votre venue à Ersatz Festival 2025 à St-Blaise : accès, horaires, transports, camping, restauration et bénévolat.',
        },
        {
            property: 'og:title',
            content: 'Informations Pratiques Ersatz Festival 2025 | Accès, Horaires, Camping',
        },
        {
            property: 'og:description',
            content:
                "Préparez votre venue à Ersatz Festival 2025 à St-Blaise : horaires d'ouverture, accès transports publics, options de camping et possibilités de bénévolat.",
        },
        {
            property: 'og:image',
            content: 'https://ersatzfestival.ch/img/ersatz-cover.png',
        },
        {
            property: 'og:url',
            content: 'https://ersatzfestival.ch/informations',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            name: 'keywords',
            content: 'Ersatz Festival, informations pratiques, accès, horaires, camping, transport, St-Blaise, bénévolat',
        },
    ],
});

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import IconsPlus from '~/components/icons/Plus.vue';
import IconsMinus from '~/components/icons/Minus.vue';

const informations = [
    {
        title: 'Emplacement',
        text: 'Le festival a lieu à la ferme du Clos-aux-Moines, à St-Blaise.',
    },
    {
        title: "Venir en transports publics (c'est mieux !!)",
        text: 'Les lignes R13, R16, S20 et S21 permettent de venir facilement en transport au festival. Selon les lignes, il est nécéssaire de descendre à St-Blaise ou à Marin-Epagnier, puis de marcher une quinzaine de minutes. \nSe référer aux informations des CFF pour plus de détail.',
    },
    {
        title: "Venir en voiture (c'est moins bien !!)",
        text: 'Des informations seront annoncées prochainement concernant les parkings à disposition du public.',
    },
    {
        title: 'Horaires',
        text: 'Le festival commence le vendredi 22 août à 18h et se termine le dimanche 24 août à 22h30.\nVendredi : 18h - 02h30\nSamedi : 16h30 - 03h30\nDimanche : 15h30 - 22h30',
    },
    {
        title: 'Dormir sur place',
        text: 'Nouveau en 2025 : Il sera possible de planter sa tente et de dormir sur place le vendredi et le samedi soir. \nUne petite restauration sera également disponible.',
    },
    {
        title: 'Charte Aretha',
        text: "Le festival s'engage depuis toujours à proposer un environnement safer, et adhère à la charte Aretha.\nSur place, une équipe de bénévoles spécialement formé.e.s, appelé.e.s les « Bienveillant.e.s », veille à ta sécurité, et est là pour t'écouter et t'aider en cas de besoin. N'hésite pas à les solliciter !",
    },
    {
        title: 'Devenir bénévole',
        text: 'Merci pour ton implication !! Nous communiquerons bientôt les informations pour devenir bénévole au festival.',
    },
];
</script>
