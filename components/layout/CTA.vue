<template>
    <div class="flex justify-center items-center py-16">
      <a
        href="https://www.petzi.ch/fr/events/59445/"
        target="_blank"
        :class="buttonClasses"
      >
        <span class="text-3xl sm:text-4xl md:text-5xl uppercase">
          {{ phrase }}
        </span>
      </a>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    inverted: {
      type: Boolean,
      default: false,
    },
  });
  
  // Tableau de phrases
  const phrases = [
    'Choppe ton billet !',
    'Prends ton ticket !',
    'Oublie pas d\'acheter ton sésame !',
    'Prends ta préloc !',
    'Choppe ta place !',
    'Réserve ton entrée !',
  ];
  
  // Sélection aléatoire d'une phrase au chargement
  const randomIndex = ref(Math.floor(Math.random() * phrases.length));
  const phrase = computed(() => phrases[randomIndex.value]);
  
  // Classes du bouton selon la prop inverted
  const buttonClasses = computed(() =>
    props.inverted
      ? 'inline-flex justify-center items-center px-12 py-3 ring ring-purple-500 text-pink-500 bg-purple-500 rounded-full hover:ring-4 hover:ring-purple-500 duration-500'
      : 'inline-flex justify-center items-center px-12 py-3 ring ring-pink-500 text-purple-500 bg-pink-500 rounded-full hover:ring-4 hover:ring-pink-500 duration-500'
  );
  </script>