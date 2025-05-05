<template>
    <h2 class="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
        {{ props.title }}
    </h2>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    color: {
        type: String,
        default: 'text-pink-500',
    },
});
</script>
