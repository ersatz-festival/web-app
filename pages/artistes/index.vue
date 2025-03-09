<template>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <LayoutTitle title="Artistes" />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
                v-for="artist in useArtistsStore().publicArtists"
                :key="artist.slug"
                class="col-span-1"
            >
                <ArtistsCard :artist="artist" />
            </div>
        </div>
    </div>
</template>
