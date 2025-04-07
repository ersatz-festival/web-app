<template>
    <header class="fixed top-0 inset-x-0 text-pink-500 bg-purple-500 shadow-md">
        <div class="mx-auto flex max-w-7xl items-center justify-end gap-8 p-6 lg:px-8">
            <NuxtLink
                v-for="link in links"
                :key="link.name"
                :to="link.to"
                class="text-lg font-semibold hover:text-gray-50 duration-200 relative"
                :class="{ 'active-link': isActive(link.to) }"
            >
                {{ link.name }}
                <span
                    v-if="isActive(link.to)"
                    class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-pink-500"
                ></span>
            </NuxtLink>
        </div>
    </header>
    <main class="pt-18">
        <NuxtPage />
    </main>
    <footer class="pt-24 pb-12 text-purple-500 bg-pink-500">
        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="inline-flex flex-col text-lg">
                <p>
                    Contact
                </p>
                <a
                    href="mailto:info@ersatzfestival.ch"
                    class="hover:text-gray-50 duration-200"
                >
                    info@ersatzfestival.ch
                </a>
                <a
                    href="tel:+41121221212"
                    class="hover:text-gray-50 duration-200"
                >
                    +41 (0) 12 122 12 12
                </a>
            </div>
        </section>
    </footer>
</template>

<script setup lang="ts">
const route = useRoute();

const links = [
    { name: 'Programme', to: '/artistes' },
    { name: 'Information', to: '/information' },
    { name: 'Billets', to: '/billets' },
];

const isActive = (path: string) => route.path.includes(path);
</script>

<style scoped>
.active-link {
    position: relative;
}
.active-link span {
    display: block;
}
</style>
