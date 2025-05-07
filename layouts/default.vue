<template>
    <header class="fixed top-0 inset-x-0 text-pink-500 bg-purple-500 shadow-md z-50">
        <div class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div class="text-lg font-bold">
                <NuxtLink to="/" class="hover:text-white duration-200"> Ersatz </NuxtLink>
            </div>

            <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden focus:outline-none" aria-label="Menu">
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path v-if="!isMenuOpen" d="M4 6h16M4 12h16M4 18h16" />
                    <path v-else d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <nav class="hidden lg:flex gap-8 items-center">
                <NuxtLink
                    v-for="link in links"
                    :key="link.name"
                    :to="link.to"
                    class="text-lg hover:text-gray-50 duration-200 relative"
                    :class="{ 'active-link': isActive(link.to) }"
                >
                    {{ link.name }}
                    <span
                        v-if="isActive(link.to)"
                        class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-pink-500"
                    ></span>
                </NuxtLink>
                <a
                    href="https://open.spotify.com/playlist/1zb6DNXLiK9UL7VqimfjMA"
                    target="_blank"
                    rel="noopener"
                    class="text-lg hover:text-gray-50 duration-200"
                >
                    La playlist Spotify
                </a>
            </nav>
        </div>

        <div v-if="isMenuOpen" class="lg:hidden px-6 pb-4 flex flex-col gap-4 bg-purple-500">
            <NuxtLink
                v-for="link in links"
                :key="link.name"
                :to="link.to"
                @click="isMenuOpen = false"
                class="text-lg hover:text-gray-50 duration-200"
            >
                {{ link.name }}
            </NuxtLink>
            <a
                href="https://open.spotify.com/playlist/1zb6DNXLiK9UL7VqimfjMA"
                target="_blank"
                rel="noopener"
                class="text-lg hover:text-gray-50 duration-200"
            >
                La playlist Spotify
            </a>
        </div>
    </header>

    <main class="pt-16">
        <NuxtPage />
    </main>

    <footer class="pt-24 pb-12 text-purple-500 bg-pink-500">
        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="inline-flex flex-col text-lg">
                <p>Contact</p>
                <a href="mailto:info@ersatzfestival.ch" class="hover:text-gray-50 duration-200"> info@ersatzfestival.ch </a>
            </div>
            <div class="flex items-center gap-2 text-xl text-purple-500">
                <Instagram class="w-6 h-6 inline-block fill-current" />
                <a
                    href="https://www.instagram.com/ersatz.festival"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline hover:text-white duration-200"
                >
                    @ersatz.festival
                </a>
            </div>
        </section>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Instagram from '~/components/icons/Instagram.vue';

const route = useRoute();
const isMenuOpen = ref(false);

const links = [
    { name: 'Programme', to: '/programme' },
    { name: 'Informations', to: '/informations' },
    { name: 'Billets', to: '/billets' },
    { name: 'Historique', to: '/historique' },
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
