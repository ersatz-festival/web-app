<template>
    <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 class="mb-4 text-6xl font-semibold tracking-tight">
            {{ props.title }}
        </h2>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String
});
</script>
