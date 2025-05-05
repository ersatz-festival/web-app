<template>
    <div class="text-pink-500 bg-purple-500">
        
        <LayoutTitle title="Information" />
        
        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <section class="py-8 border-t border-pink-500">
                <div class="flex items-center space-x-4">
                    <IconsMinus class="w-12 h-12 text-pink-500" />
                    <LayoutSubTitle title="Ersatz Festival" />
                </div>
                
                <div class="mt-4 grid grid-cols-12 gap-4">
                    <p class="col-span-12 sm:col-span-6 text-lg sm:text-xl md:text-2xl">
                        Le festival de musique alternative et indépendante de la région de St-Blaise.
                    </p>
                </div>
            </section>
            
            <section
                v-for="(info, index) in informations"
                :key="index"
                :class="{
                    'border-b border-pink-500': index === informations.length - 1,
                    'border-t border-pink-500': true
                }"
            >
                <Disclosure v-slot="{ open }">
                    <DisclosureButton class="flex items-center space-x-4 w-full cursor-pointer group hover:text-gray-50 duration-200">
                        <component
                            :is="open ? IconsMinus : IconsPlus"
                            class="w-10 h-10 md:w-12 md:h-12 text-pink-500 group-hover:text-gray-50 duration-200"
                        />
                        <h3 class="py-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                            {{ info.title }}
                        </h3>
                    </DisclosureButton>
                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-out"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <DisclosurePanel>
                            <p class="pb-2 text-lg sm:text-xl md:text-2xl">
                                {{ info.text }}
                            </p>
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
            </section>
        </section>
        
        <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <LayoutCTA />
        </section>
    </div>
</template>

<script setup lang="ts">
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue';
import IconsPlus from '@/components/icons/Plus.vue';
import IconsMinus from '@/components/icons/Minus.vue';

const informations = [
{
    title: 'Accès',
    text: 'Le festival de musique alternative et indépendante de la région de St-Blaise.',
},
{
    title: 'Transport',
    text: 'Le festival de musique alternative et indépendante de la région de St-Blaise.',
},
{
    title: 'Charte Aretha',
    text: 'Le festival de musique alternative et indépendante de la région de St-Blaise.',
},
{
    title: 'L\'Erste',
    text: 'Le festival de musique alternative et indépendante de la région de St-Blaise.',
},
];
</script>
