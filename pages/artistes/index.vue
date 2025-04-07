<template>
    <div class="text-pink-500 bg-purple-500">
        <img src="/public/img/ersatz-cover.jpeg" alt="Ersatz" class="w-full object-cover align-top" />
        
        <LayoutTitle title="Programme" />

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                    v-for="artist in sortedArtists"
                    :key="artist.slug"
                    class="col-span-1"
                >
                    <ArtistsCard :artist="artist" />
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutCTA />
        </section>
    </div>
</template>

<script setup lang="ts">
const sortBy = [
    'name',
    'day',
];
const sort = ref(sortBy[0]);

const sortedArtists = computed(() => {
    return useArtistsStore().publicArtists.sort((a, b) => {
        // TODO: correct sort by days
        return sort.value === 'name' ? a.name.localeCompare(b.name) : a.day.localeCompare(b.day);
    });
});
</script>
