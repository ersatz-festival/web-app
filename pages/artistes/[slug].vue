<template>
    <div v-if="artist" class="bg-pink-400">
        <img src="/public/img/25SO_ersatz_concours.png" alt="Ersatz" class="w-full h-96 object-cover align-top" />

        <LayoutTitle :title="artist.name" />
        <section>
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div class="grid grid-cols-5 gap-4">
                    <div class="col-span-2">
                        <img :src="artist.pictureProfile" :alt="artist.name" class="w-96 h-96 object-cover rounded" />
                    </div>
                    <div class="col-span-3 flex flex-col spaced-y-4">
                        <div class="flex-1">
                            <h2 class="mb-4 text-3xl font-semibold">
                                {{ artist.name }}
                            </h2>
                            <p class="mb-8 text-lg">
                                {{ artist.description }}
                            </p>
                        </div>
                        <div class="flex justify-between items-end">
                            <p class="text-xl">
                                {{ artist.genre }}
                            </p>
                            <p class="flex items-center mt-16 text-primary-500 text-xl">
                                <IconsCalendarDays class="w-6 h-6 inline-block mr-2" />
                                {{ artist.day }}
                            </p>
                        </div>
                        <!--div class="flex justify-between items-center space-y-4">
                            <a
                                v-for="(url, network) in artist.socialNetworks"
                                :key="network"
                                :href="url"
                                target="_blank"
                            >
                                <component :is="getSocialIcon(network)" class="w-8 h-8 inline-block" />
                            </a>
                        </div-->
                    </div>
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutCTA />
        </section>
    </div>
</template>

<script setup lang="ts">
import { type Artist } from '~/interfaces/artist';
import Instagram from '~/components/icons/Instagram.vue';

const artist = ref<Artist | undefined>(
    useArtistsStore().getArtistBySlug(useRoute().params.slug as string)
);

const getSocialIcon = (network: string) => {
    const icons: Record<string, any> = {
        instagram: Instagram,
    };
    return icons[network] || null;
};
</script>
