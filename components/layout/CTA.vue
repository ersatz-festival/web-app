<template>
    <div class="flex justify-center items-center py-16">
        <a href="https://www.petzi.ch/fr/events/59445/" target="_blank" :class="buttonClasses">
            <div class="text-center text-xl sm:text-4xl md:text-5xl uppercase">
                {{ phrase }}
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
    inverted: {
        type: Boolean,
        default: false,
    },
});

// Possible random phrases
const phrases = [
    'Chope ton billet !',
    'Achète ton ticket !',
    'Oublie pas de prendre ton sésame !',
    'Prends ta préloc !',
    'Assure ta place !',
    'Réserve ton entrée !',
    "T'as ton billet ?",
    'Say no to fomo, get your ticket',
    'Les billets Early Bird sont là !',
];

// Random selection of a phrase when loading
const randomIndex = ref(Math.floor(Math.random() * phrases.length));
const phrase = computed(() => phrases[randomIndex.value]);

const buttonClasses = computed(() =>
    props.inverted
        ? 'inline-flex justify-center items-center px-12 py-3 ring ring-purple-500 text-pink-500 bg-purple-500 rounded-full hover:ring-4 hover:ring-purple-500 duration-500'
        : 'inline-flex justify-center items-center px-12 py-3 ring ring-pink-500 text-purple-500 bg-pink-500 rounded-full hover:ring-4 hover:ring-pink-500 duration-500'
);
</script>
