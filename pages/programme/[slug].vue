<template>
    <div v-if="artist" class="pt-12 text-purple-500 bg-pink-500">
        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <!-- Artist picture -->
                <div class="col-span-1 lg:col-span-4">
                    <img :src="`/img/${artist.pictureProfile}`" :alt="artist.name" class="w-full lg:w-96 ld:h-96 rounded" />
                </div>

                <!-- Artist info -->
                <div class="col-span-1 lg:col-span-8">
                    <div class="flex flex-col space-y-4">
                        <!-- Artist name -->
                        <LayoutTitle :title="artist.name" color="purple-500" no-margin />

                        <!-- L'Erste -->
                        <span v-if="artist.erste" class="text-sm align-top mr-1">Gagnant de l'Erste 2025</span>

                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                            <!-- Artis genre -->
                            <h1 class="text-2xl text-left">
                                {{ artist.genre }}
                            </h1>

                            <!-- Artist day and date -->
                            <p class="flex items-center text-2xl">
                                <IconsCalendarDays class="w-7 h-7 inline-block mr-2" />
                                <span>{{ `${artist.day} ${getDayDate(artist.day)} août 2025` }}</span>
                            </p>
                        </div>

                        <!-- Artist description -->
                        <p class="text-lg lg:text-2xl text-left whitespace-pre-line">
                            {{ artist.description }}
                        </p>

                        <!-- Social networks -->
                        <div class="mt-6 flex flex-col gap-2 text-xl text-purple-500">
                            <!-- Instagram (array) -->
                            <div v-for="url in artist.socialNetworks?.instagram" :key="url" class="flex items-center gap-2">
                                <InstagramIcon class="w-6 h-6 inline-block fill-current" />
                                <a :href="url" target="_blank" rel="noopener noreferrer" class="underline hover:text-white duration-200">
                                    @{{ getInstagramUsername(url) }}
                                </a>
                            </div>

                            <!-- Spotify -->
                            <div v-if="artist.socialNetworks?.spotify" class="flex items-center gap-2">
                                <SpotifyIcon class="w-6 h-6 inline-block fill-current" />
                                <a
                                    :href="artist.socialNetworks.spotify"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="underline hover:text-white duration-200"
                                >
                                    {{ artist.name }}
                                </a>
                            </div>
                        </div>

                        <!-- YouTube -->
                        <div v-if="artist.clip" class="mt-6">
                            <iframe
                                :src="getYoutubeEmbedUrl(artist.clip)"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                class="mt-6 w-full h-64 md:h-96 shadow-lg rounded-lg"
                            ></iframe>
                        </div>

                        <!-- SoundCloud -->
                        <div v-for="(url, idx) in artist.soundcloud" :key="idx">
                            <iframe
                                :src="getSoundcloudEmbedUrl(url)"
                                frameborder="no"
                                scrolling="no"
                                allow="autoplay"
                                class="mt-6 w-full h-24 md:h-32 shadow-lg rounded-lg"
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
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import InstagramIcon from '~/components/icons/Instagram.vue';
import SpotifyIcon from '~/components/icons/Spotify.vue';
import { type Artist } from '~/interfaces/artist';
import { useArtistsStore } from '~/stores/artists';

const artist = ref<Artist | undefined>(useArtistsStore().getArtistBySlug(useRoute().params.slug as string));

const getDayDate = (day: string) => {
    switch (day) {
        case 'Vendredi':
            return '22';
        case 'Samedi':
            return '23';
        case 'Diamche':
            return '24';
        default:
            return '';
    }
};

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

const getSoundcloudEmbedUrl = (url: string): string => {
    const encoded = encodeURIComponent(url);
    return `https://w.soundcloud.com/player/?url=${encoded}`;
};
</script>
