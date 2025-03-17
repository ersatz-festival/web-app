<template>
    <h1 class="mb-24 text-7xl font-semibold tracking-tightsm:text-7xl">
        {{ props.title }}
    </h1>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String
});
</script>
