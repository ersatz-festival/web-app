<template>
  <div class="text-pink-500 bg-purple-500 container mx-auto p-6">
    <LayoutTitle title="Historique" class="mb-6" />
    <div class="flex flex-wrap justify-center gap-8">
      <div
        v-for="edition in editions"
        :key="edition.year"
        class="w-full max-w-xs"
      >
        <h2 class="text-2xl mb-1 text-center">{{ edition.year }}</h2>
        <p class="text-sm text-center text-gray-300 mb-2">{{ edition.date }}</p>
        <div class="text-sm text-pink-500 text-center">
          <template v-if="edition.artists.length">
            <template v-for="(artist, idx) in edition.artists" :key="artist">
              <span>{{ artist }}</span>
              <span v-if="idx < edition.artists.length - 1" class="mx-1">·</span>
            </template>
          </template>
          <span v-else class="italic">Artistes non renseignés</span>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup>
const editions = [
  {
    year: 2023,
    date: '25–27 août',
    artists: [
      'CLUB PLAISIR',
      'COSTARD CREVETTE',
      "DON'T KILL DUNCAN",
      'ELYSSA FLEUR',
      'ENSEMBLE DIAPHANE',
      'FLUFFY MACHINE',
      'GOLDEN MAMMI',
      'GRIMACE',
      'HYBISAE',
      'JO MAYASI',
      'LES CLAUDES',
      'LICKING RAINBOWS',
      'LOVE IN A MIST',
      'POTOCHKINE',
      'PRUNE',
      'SABBIA NELLA FIGA',
      'SAILLING ON PLUTO',
      'SILANCE',
      'SMOKY',
      'TAF TRIO',
      '13R'
    ]
  },
  {
    year: 2021,
    date: '27–29 août',
    artists: []
  },
  {
    year: 2020,
    date: '20–22 août',
    artists: []
  }
];
</script>

<style scoped>
/* Si besoin, tu peux ajuster la responsivité ou le style ici */
</style>
