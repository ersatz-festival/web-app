import { useArtistsStore } from '~/stores/artists';

export default defineNuxtPlugin(() => {
    const artistsStore = useArtistsStore();
    artistsStore.init();
});
