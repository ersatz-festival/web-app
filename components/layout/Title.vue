<template>
    <h1 class="text-6xl sm:text-8xl md:text-9xl text-[var(--color-primary)] leading-[0.85] tracking-tight">
        {{ title }}
    </h1>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
