<script setup lang="ts">
import { defineComponent, onMounted } from 'vue';



defineProps<{ src: string, alt: string }>()

</script>

<template>
    <img v-lazy="{ src, loading: 'https://global.discourse-cdn.com/inductiveautomation/original/2X/9/97d457372f6c14182b686ecfdf5d4067df5e9373.png' }"
        :alt="alt" />

</template>