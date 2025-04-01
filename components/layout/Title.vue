<template>
    <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="mb-24 text-7xl font-semibold tracking-tight">
            {{ props.title }}
        </h1>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String
});
</script>
