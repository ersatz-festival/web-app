<template>
    <div v-if="artist" class="pt-12 text-purple-500 bg-pink-500">

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div class="col-span-1 lg:col-span-4">
                    <img
                        :src="artist.pictureProfile"
                        :alt="artist.name"
                        class="w-full lg:w-96 ld:h-96 rounded"
                    />
                </div>
                <div class="col-span-1 lg:col-span-8">
                    <div class="flex flex-col space-y-4">
                    
                        <LayoutTitle :title="artist.name" color="purple-500" no-margin />
                        <span v-if="artist.erste" class="text-sm align-top mr-1">Gagnant de l'Erste </span>
                        <div class="flex justify-between items-center">
                            <h1 class="text-2xl text-left">
                                {{ artist.genre }}
                            </h1>

                            <p class="text-2xl">
                                {{ artist.day }}
                            </p>
                        </div>


                        <p class="text-lg lg:text-2xl text-justify whitespace-pre-line">
                            {{ artist.description }}
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
        </section>

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutCTA inverted />
        </section>
    </div>
</template>

<script setup lang="ts">
import { type Artist } from '~/interfaces/artist';
// import Instagram from '~/components/icons/Instagram.vue';

const artist = ref<Artist | undefined>(
    useArtistsStore().getArtistBySlug(useRoute().params.slug as string)
);

// const getSocialIcon = (network: string) => {
//     const icons: Record<string, any> = {
//         instagram: Instagram,
//     };
//     return icons[network] || null;
// };
</script>
