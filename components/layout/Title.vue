<template>
    <section :class="{ 'mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8': !props.noMargin }">
        <h1
            class="text-9xl font-semibold tracking-tight"
            :class="props.color"
        >
            {{ props.title }}
        </h1>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    color: {
        type: String,
        default: 'text-pink-500',
    },
    noMargin: {
        type: Boolean,
        default: false,
    },
});
</script>
