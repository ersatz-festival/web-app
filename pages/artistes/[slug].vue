<template>
    <div v-if="artist">
        <img :src="artist.pictureCover" :alt="artist.name" class="w-full h-96 object-cover align-top" />
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutTitle :title="artist.name" />
            <div class="flex flex-col space-y-32">
                <div class="flex flex-col space-y-16">
                    <p class="text-lg">
                        {{ artist.description }}
                    </p>
                    <p class="flex flex-col items-center space-y-4 mx-auto text-4xl text-primary-500">
                        <IconsCalendarDays class="w-10 h-10 inline-block" />
                        <span>{{ artist.day }}</span>
                    </p>
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <div class="col-span-2">
                        <img :src="artist.pictureProfile" :alt="artist.name" class="w-96 h-96 object-cover rounded" />
                    </div>
                    <div class="col-span-3 flex flex-col spaced-y-4">
                        <div class="flex-1">
                            <h2 class="mb-4 text-2xl font-semibold">
                                {{ artist.name }}
                            </h2>
                            <p class="mb-8">
                                {{ artist.description }}
                            </p>
                        </div>
                        <div class="flex justify-between items-center space-y-4">
                            <a
                                v-for="(socialNetwork, index) of artist.socialNetworks"
                                :key="index"
                                :href="socialNetwork"
                                target="_blank"
                            >
                                <IconsCalendarDays class="w-8 h-8 inline-block" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Artist } from '~/interfaces/artist';

const artist = ref<Artist | undefined>(
    useArtistsStore().getArtistBySlug(useRoute().params.slug as string)
);
</script>
