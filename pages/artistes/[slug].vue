<template>
    <div v-if="artist">
        <img :src="artist.picture" :alt="artist.name" class="w-full h-96 object-cover align-top" />
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutTitle :title="artist.name" />
            <p>
                {{ artist.shortDescription }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Artist } from '~/interfaces/artist';

const artist = ref<Artist | undefined>(
    useArtistsStore().getArtistBySlug(useRoute().params.slug as string)
);
</script>
