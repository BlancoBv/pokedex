<script setup lang="ts">
import { defineComponent, onMounted } from 'vue';



defineProps<{ src: string, alt: string }>()

</script>

<template>
    <img v-lazy="{ src, loading: 'https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif' }" :alt="alt"
        class="object-contain w-full h-full drop-shadow" />

</template>