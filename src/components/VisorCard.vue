<script setup lang="ts">
import LazyImage from './Lazy-image.vue';

defineProps<{ imgSrc: string; name: string | undefined; id: number | undefined; types: { slot: number; type: { name: string; url: string } }[] | undefined }>()
</script>
<template>
    <div class="w-full h-full sticky top-0 sm:w-1/2 flex justify-center items-center p-4 z-40 backdrop-blur-sm">
        <div
            class="border-4 border-blue-300 h-96 w-full m-2 p-2 card outline outline-yellow-300 outline-8 bg-gradient-to-b from-blue-100 to-transparent">

            <figure class=" size-40 lg:size-52 mx-auto">
                <LazyImage :src="imgSrc" alt="pokemon" />
            </figure>
            <div class="card-body">
                <h2 class="card-title"> {{ name }} </h2>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline" v-for="type in types">{{ type.type.name }}</div>
                    <a class="btn btn-primary" :href="'pokemon/' + id">
                        See details
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>