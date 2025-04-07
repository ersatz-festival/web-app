<template>
    <div class="text-pink-500 bg-purple-500">

        <LayoutTitle title="Information" />

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <section class="py-8 border-t border-pink-500">
                <div class="flex items-center space-x-4">
                    <IconsMinus class="w-12 h-12 text-pink-500" />
                    <LayoutSubTitle title="Ersatz Festival" />
                </div>

                <div class="mt-4 grid grid-cols-12 gap-4">
                    <p class="col-span-12 sm:col-span-6 text-xl">
                        Le festival de musique alternative et indépendante de la région de St-Blaise.
                    </p>
                </div>
            </section>

            <section
                v-for="(info, index) in informations"
                :key="index"
                class="flex items-center space-x-4"
                :class="{
                    'border-b border-pink-500': index === informations.length - 1,
                    'border-t border-pink-500': true
                }"
            >
                <IconsPlus class="w-12 h-12 text-pink-500" />
                <h3 class="py-4 text-5xl font-semibold tracking-tight">
                    {{ info.title }}
                </h3>
            </section>
        </section>

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutCTA />
        </section>
    </div>
</template>

<script setup lang="ts">
const informations = [
    {
        title: 'Accès',
        text: '',
    },
    {
        title: 'Transport',
        text: '',
    },
    {
        title: 'Charte Aretha',
        text: '',
    },
    {
        title: 'L\'Erste',
        text: '',
    },
];
</script>
