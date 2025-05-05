<template>
    <div class="flex justify-center items-center py-16">
        <a
            href=""
            target="_blank"
            :class="buttonClasses"
        >
            <span class="text-xl sm:text-4xl md:text-5xl font-semibold uppercase">
                Acheter sur Petzi
            </span>
        </a>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    inverted: {
        type: Boolean,
        default: false,
    },
});

const buttonClasses = computed(() =>
    props.inverted
        ? 'inline-flex justify-center items-center px-12 py-3 ring ring-purple-500 text-pink-500 bg-purple-500 rounded-full hover:ring-4 hover:ring-purple-500 duration-500'
        : 'inline-flex justify-center items-center px-12 py-3 ring ring-pink-500 text-purple-500 bg-pink-500 rounded-full hover:ring-4 hover:ring-pink-500 duration-500'
);
</script>
