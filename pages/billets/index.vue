<template>
    <div class="mx-auto max-w-3xl px-6 pt-8 pb-6">
        <div>
            <div
                class="grid grid-cols-3 sm:grid-cols-[2fr_1fr_1fr] gap-4 py-4 border-b-2 border-[var(--color-primary)] text-base sm:text-lg uppercase tracking-wider text-[var(--color-primary)]"
            >
                <div></div>
                <div class="text-right sm:text-left">1 jour</div>
                <div class="text-right">3 jours</div>
            </div>
            <div
                v-for="price in pricesPerDay"
                :key="price.name"
                class="grid grid-cols-3 sm:grid-cols-[2fr_1fr_1fr] gap-4 py-4 border-b-2 border-[var(--color-primary)] items-baseline last:border-b-0"
            >
                <div :class="{ 'line-through opacity-60': price.soldOut }">
                    <span class="text-base sm:text-lg uppercase text-[var(--color-primary)]">{{ price.name }}</span>
                    <span v-if="price.soldOut" class="ml-2 text-xs uppercase tracking-wider text-[var(--color-muted)]">Sold out</span>
                </div>
                <div class="text-right sm:text-left text-base sm:text-lg text-[var(--color-ink)] uppercase tracking-wider">
                    <span :class="{ 'line-through opacity-60': price.soldOut }">
                        {{ typeof price.dayPrice === 'number' ? `CHF ${price.dayPrice}.-` : price.dayPrice }}
                    </span>
                </div>
                <div class="text-right text-base sm:text-lg text-[var(--color-ink)] uppercase tracking-wider">
                    <span :class="{ 'line-through opacity-60': price.soldOut }">
                        {{ price.passPrice ? `CHF ${price.passPrice}.-` : '-' }}
                    </span>
                </div>
            </div>
        </div>

        <p class="mt-6 text-base sm:text-lg text-[var(--color-ink)]">
            Prix normal et prix de soutien - un peu plus élevé - pour les coeurs généreux qui veulent donner un coup de pouce au festival. <3
        </p>
        <p class="mt-2 text-base sm:text-lg text-[var(--color-ink)]">Entrée gratuite pour les enfants de 12 ans et moins.</p>

        <div class="mt-12 text-center">
            <a
                href="https://www.petzi.ch/fr/events/61295-ersatz-festival-ersatz-2026/"
                target="_blank"
                rel="noopener"
                class="inline-block px-10 py-4 rounded-full bg-[var(--color-primary)] text-[var(--color-bg)] uppercase text-base sm:text-lg tracking-widest shadow-sm hover:bg-[var(--color-primary-hover)] hover:shadow-md transition"
            >
                Acheter un billet
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';

useHead({
    title: 'Billets | Ersatz Festival 2026',
    meta: [
        {
            name: 'description',
            content:
                'Réservez vos billets pour le Ersatz Festival 2026 à St-Blaise. Pass journalier ou 3 jours. Entrée gratuite -12 ans.',
        },
        { property: 'og:title', content: 'Billets Ersatz Festival 2026' },
        { property: 'og:image', content: 'https://ersatzfestival.ch/ersatz2026.jpg' },
        { property: 'og:url', content: 'https://ersatzfestival.ch/billets' },
    ],
});

const pricesPerDay = [
    { name: 'Early-bird', dayPrice: 15, passPrice: 45 },
    { name: 'Normal', dayPrice: 20, passPrice: 50 },
    { name: 'Soutien', dayPrice: 30, passPrice: 60 },
    { name: 'Sur place', dayPrice: 25, passPrice: null },
    { name: 'Camping', dayPrice: 'Prix libre', passPrice: null },
] as { name: string; dayPrice: number | string; passPrice: number | null; soldOut?: boolean }[];
</script>
