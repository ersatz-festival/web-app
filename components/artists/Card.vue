<template>
    <div class="rounded-lg shadow hover:bg-gray-50 hover:shadow-lg duration-300">
        <NuxtLink :to="`/artistes/${artist.slug}`">
            <img
                :src="artist.picture"
                :alt="artist.name"
                class="w-full rounded-lg rounded-b-none"
            />
            <div class="p-4">
                <h2 class="mb-2 text-2xl font-semibold">{{ artist.name }}</h2>
                <p>{{ artist.shortDescription }}</p>
                <span class="flex items-center mt-32 text-primary-500">
                    <IconsCalendarDays class="w-5 h-5 inline-block mr-2" />
                    {{ artist.day }}
                </span>
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
