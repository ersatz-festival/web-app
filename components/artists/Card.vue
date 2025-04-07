<template>
    <div class="rounded-lg shadow text-purple-500 bg-gray-50 hover:bg-gray-200 hover:shadow-lg duration-300">
        <NuxtLink :to="`/artistes/${artist.slug}`">
            <img
                :src="artist.pictureCover"
                :alt="artist.name"
                class="w-full rounded-lg rounded-b-none"
            />
            <div class="p-4">
                <h3 class="mb-2 text-4xl font-semibold">{{ artist.name }}</h3>
                <div class="flex justify-between items-end">
                    <p class="text-lg">
                        {{ artist.genre }}
                    </p>
                    <p class="flex items-center mt-16 text-lg">
                        <IconsCalendarDays class="w-5 h-5 inline-block mr-2" />
                        {{ artist.day }}
                    </p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { type Artist } from '~/interfaces/artist';

defineProps<{
    artist: Artist;
}>();
</script>
