<script setup lang="ts">
import { onMounted, ref } from "vue"
import LazyImage from "./Lazy-image.vue";
import format from "../assets/format";
const props = defineProps<{ name: string; url: string, activeID: number }>()

const emit = defineEmits(["setVisor", "changeActiveID"])
const pokemon = ref<{ name?: string, id?: number, sprites?: any }>({})


onMounted(async () => {
    const response = await fetch(props.url).then(res => res.json()).catch(() => null)
    pokemon.value = response
})

const handleClick = (element: any) => {
    emit("changeActiveID", element.id)
    emit("setVisor", element)
}
</script>

<template>
    <div v-if="Object.values(pokemon).length === 0"
        class="card card-side h-28 cursor-pointer mb-4 transition-all ease-in-out duration-300 shadow-lg snap-end lg:snap-center skeleton">
    </div>
    <div v-else
        class="card card-side h-28 cursor-pointer mb-4 transition-all ease-in-out duration-300 shadow-lg snap-end lg:snap-start"
        :class="{
            'bg-orange-400 border-error border-8': props.activeID === pokemon.id,
            'bg-orange-200 hover:bg-orange-300': props.activeID !== pokemon.id
        }" @click="handleClick(pokemon)">
        <figure class="size-20 my-auto p-4 ">
            <LazyImage :src="pokemon.sprites.other.home.front_default" :alt="pokemon.name || 'pokemon'" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                {{ pokemon.name }}
            </h2>
            <p>No. {{ format.fill(pokemon.id ? pokemon.id : "") }}</p>
        </div>
    </div>
</template>