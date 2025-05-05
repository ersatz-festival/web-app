<template>
    <div class="text-pink-500 bg-purple-500">

        <LayoutTitle title="Billeterie" />

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

            <LayoutSubTitle title="Prix" />

            <table class="w-full text-base sm:text-xl md:text-2xl">
                <thead>
                    <tr class="border-b border-pink-500">
                        <th class="text-right py-2"></th>
                        <th class="text-right py-2">Adulte (&gt;16)</th>
                        <th class="text-right py-2">Enfant (&lt;16)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(price, index) in pricesPerDay"
                        :key="index"
                        class="border-b border-pink-500"
                    >
                        <td class="text-left py-2">
                            {{ price.name }}
                        </td>
                        <td class="text-right py-2">
                            {{ price.adultPrice }}.- chf
                        </td>
                        <td class="text-right py-2">
                            {{ price.childPrice }}.- chf
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutCTA />
        </section>
    </div>
</template>

<script setup lang="ts">
const pricesPerDay = [
    {
        name: 'Les trois jours',
        adultPrice: 50,
        childPrice: 10,
    },
    {
        name: 'Vendredi',
        adultPrice: 20,
        childPrice: 5,
    },
    {
        name: 'Samedi',
        adultPrice: 20,
        childPrice: 5,
    },
    {
        name: 'Dimanche',
        adultPrice: 20,
        childPrice: 5,
    },
];
</script>
