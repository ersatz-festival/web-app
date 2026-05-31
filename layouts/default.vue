<template>
    <div class="min-h-screen flex flex-col">
        <header class="bg-[var(--color-bg)] border-b-2 border-[var(--color-primary)]">
            <div class="mx-auto max-w-6xl px-6 pt-10 pb-6 flex flex-col items-center text-center">
                <NuxtLink
                    to="/"
                    class="block text-[var(--color-primary)] leading-[0.85] tracking-tight text-7xl sm:text-9xl md:text-[10rem]"
                >
                    ERSATZ
                </NuxtLink>

                <p class="mt-4 text-base sm:text-lg tracking-[0.25em] text-[var(--color-primary)]">
                    du 21 au 23 août 2026
                </p>
                <p class="mt-1 text-sm sm:text-base tracking-widest text-[var(--color-ink)]">
                    St-Blaise · ferme du Clos-aux-Moines
                </p>

                <nav class="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-base sm:text-lg uppercase">
                    <NuxtLink
                        v-for="link in links"
                        :key="link.to"
                        :to="link.to"
                        class="text-[var(--color-ink)] hover:text-[var(--color-primary)]"
                        :class="{ '!text-[var(--color-primary)]': isActive(link.to) }"
                    >
                        {{ link.name }}
                    </NuxtLink>
                </nav>
            </div>
        </header>

        <main class="flex-1">
            <slot />
        </main>

        <footer class="border-t-2 border-[var(--color-primary)] py-6 sm:py-8">
            <div
                class="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 text-center sm:text-left text-base"
            >
                <div>
                    <p class="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-1">Contact</p>
                    <a
                        href="mailto:info@ersatzfestival.ch"
                        class="text-[var(--color-ink)] hover:text-[var(--color-primary)]"
                    >
                        info@ersatzfestival.ch
                    </a>
                </div>
                <a
                    href="https://www.instagram.com/ersatz.festival"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-[var(--color-ink)] hover:text-[var(--color-primary)]"
                >
                    <Instagram class="w-5 h-5 fill-current" />
                    @ersatz.festival
                </a>
                <p class="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                    © {{ new Date().getFullYear() }} Ersatz Festival
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Instagram from '~/components/icons/Instagram.vue';

const route = useRoute();

const links = [
    { name: 'Programme', to: '/' },
    { name: 'Infos', to: '/informations' },
    { name: 'Billets', to: '/billets' },
    { name: 'Historique', to: '/historique' },
];

const isActive = (path: string) => (path === '/' ? route.path === '/' : route.path.startsWith(path));
</script>
