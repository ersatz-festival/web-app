<template>
    <Transition name="popup">
        <div
            v-if="visible"
            class="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/60 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Ersatz 2026, c'est fini"
            @click="close"
        >
            <div class="popup-card relative w-full max-w-xl bg-[var(--color-bg)] px-10 py-14 sm:px-16 sm:py-20 text-center">
                <button
                    type="button"
                    class="absolute top-2 right-4 text-4xl leading-none text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition"
                    aria-label="Fermer"
                    @click="close"
                >
                    ×
                </button>

                <p class="text-4xl sm:text-6xl uppercase leading-tight text-[var(--color-primary)]">
                    Ersatz 2026<br />
                    c'est fini <br />
                    <strong>et c'était super !!</strong>
                </p>

                <p class="mt-6 text-xl sm:text-2xl text-[var(--color-ink)]">
                    Merci à tous.te.s<br />
                    <strong>Rendez-vous en août 2027</strong>
                </p>

                <p class="heart mt-4 text-5xl text-[var(--color-primary)]" aria-hidden="true">♥</p>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const STORAGE_KEY = 'ersatz-2026-closing-popup-seen';
const visible = ref(false);

const close = () => {
    visible.value = false;
    sessionStorage.setItem(STORAGE_KEY, '1');
};

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') close();
};

onMounted(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) visible.value = true;
    window.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown));
</script>

<style scoped>
.popup-card {
    border-radius: 3rem;
    box-shadow: 0 0 60px 45px var(--color-bg);
}

.popup-enter-active,
.popup-leave-active {
    transition: opacity 0.3s ease;
}

.popup-enter-active .popup-card {
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.popup-enter-from,
.popup-leave-to {
    opacity: 0;
}

.popup-enter-from .popup-card {
    transform: scale(0.85);
}

.heart {
    animation: heartbeat 1.4s ease-in-out infinite;
}

@keyframes heartbeat {
    0%,
    100% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.2);
    }
    40% {
        transform: scale(1);
    }
    60% {
        transform: scale(1.15);
    }
}
</style>
