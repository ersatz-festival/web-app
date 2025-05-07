import { defineStore } from 'pinia';
import type { Artist } from '~/interfaces/artist';

import artistsData from '~/assets/data/artists.json';

export const useArtistsStore = defineStore('artists', () => {
    /// STATE ///

    const artists = ref<Artist[]>([]);

    /// GETTERS ///

    const publicArtists = computed(() => {
        return artists.value.filter((artist) => artist.public);
    });

    const getArtistBySlug = (slug: string): Artist | undefined => {
        return artists.value.find((artist) => artist.slug === slug && artist.public);
    };

    /// ACTIONS ///

    const init = async () => {
        artists.value = artistsData as Artist[];
    };

    return {
        publicArtists,
        getArtistBySlug,
        init,
    };
});
