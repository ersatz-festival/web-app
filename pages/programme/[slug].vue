<template>
    <div v-if="artist" class="pt-12 text-purple-500 bg-pink-500">

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div class="col-span-1 lg:col-span-4">
                    <img :src="artist.pictureProfile" :alt="artist.name" class="w-full lg:w-96 ld:h-96 rounded" />
                </div>
                <div class="col-span-1 lg:col-span-8">
                    <div class="flex flex-col space-y-4">

                        <LayoutTitle :title="artist.name" color="purple-500" no-margin />
                        <span v-if="artist.erste" class="text-sm align-top mr-1">Gagnant de l'Erste 2025</span>
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                            <h1 class="text-2xl text-left">
                                {{ artist.genre }}
                            </h1>
                            <p class="flex items-center text-2xl">
                                <IconsCalendarDays class="w-5 h-5 inline-block mr-2" />
                                {{ artist.day }}
                                <span v-if="artist.day === 'Vendredi'">&nbsp22 août 2025</span>
                                <span v-else-if="artist.day === 'Samedi'">&nbsp23 août 2025</span>
                                <span v-else-if="artist.day === 'Dimanche'">&nbsp24 août 2025</span>
                            </p>
                        </div>


                        <p class="text-lg lg:text-2xl text-left whitespace-pre-line">
                            {{ artist.description }}
                        </p>

                        <!-- Conteneur global des réseaux sociaux -->
                        <div class="mt-6 flex flex-col gap-2 text-xl text-purple-500">
                            <!-- Liens Instagram -->
                            <div v-for="url in artist.socialNetworks.instagram" :key="url"
                                class="flex items-center gap-2">
                                <Instagram class="w-6 h-6 inline-block fill-current" />
                                <a :href="url" target="_blank" rel="noopener noreferrer"
                                    class="underline hover:text-white">
                                    @{{ getInstagramUsername(url) }}
                                </a>
                            </div>

                            <!-- Lien Spotify -->
                            <div v-if="artist.socialNetworks?.spotify" class="flex items-center gap-2">
                                <Spotify class="w-6 h-6 inline-block fill-current" />
                                <a :href="artist.socialNetworks.spotify" target="_blank" rel="noopener noreferrer"
                                    class="underline hover:text-white">
                                    {{ artist.name }}
                                </a>
                            </div>
                        </div>

                        <div v-if="artist.clip" class="mt-6">
                            <iframe
                                :src="getYoutubeEmbedUrl(artist.clip)"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                class="w-full h-64 md:h-96 rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutCTA inverted />
        </section>
    </div>
</template>

<script setup lang="ts">
import Instagram from '~/components/icons/Instagram.vue';
import Spotify from '~/components/icons/Spotify.vue';


import { type Artist } from '~/interfaces/artist';
// import Instagram from '~/components/icons/Instagram.vue';

const artist = ref<Artist | undefined>(
    useArtistsStore().getArtistBySlug(useRoute().params.slug as string)
);

const getInstagramUsername = (url: string): string => {
    try {
        const parts = new URL(url).pathname.split('/');
        return parts.filter(Boolean).pop() || '';
    } catch {
        return '';
    }
};

const getYoutubeEmbedUrl = (url: string): string => {
  try {
    const videoIdMatch = url.match(/[\?&]v=([^&]+)/);
    const id = videoIdMatch ? videoIdMatch[1] : url.split('/').pop();
    return `https://www.youtube.com/embed/${id}`;
  } catch {
    return url;
  }
};
</script>
