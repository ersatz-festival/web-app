<template>
    <header class="fixed top-0 inset-x-0 text-gray-50 bg-green-500">
        <div class="mx-auto flex max-w-7xl items-center justify-end gap-8 p-6 lg:px-8">
            <NuxtLink
                v-for="link in links"
                :key="link.name"
                :to="link.to"
                class="text-base font-semibold"
            >
                {{ link.name }}
            </NuxtLink>
        </div>
    </header>
    <main class="pt-18">
        <NuxtPage />
    </main>
    <footer class="py-24 bg-green-700">
        <div class="flex justify-center items-center">
            <p class="text-white">Footer</p>
        </div>
    </footer>
</template>

<script setup lang="ts">

const links = [
    { name: 'Artistes', to: '/artistes' },
    // { name: 'Informations', to: '/informations' },
];
</script>
