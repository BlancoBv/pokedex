<script setup lang="ts">
import { onMounted, ref, inject } from "vue"
const props = defineProps<{ name: string; url: string, activeID: number }>()

const emit = defineEmits(["setVisor", "changeActiveID"])
const pokemon = ref<{ name?: string, id?: number, sprites?: any }>({})


onMounted(async () => {
    const response = await fetch(props.url).then(res => res.json()).catch(() => null)
    pokemon.value = response
})

const handleClick = (ev: MouseEvent, element: any) => {
    emit("changeActiveID", element.id)
    emit("setVisor", element)
}
const afterStyle = "after:content-['adasdsa'] after:text-error"

</script>

<template>
    <p v-if="Object.values(pokemon).length === 0">Cargando...</p>
    <div v-else
        class="card card-side h-28 cursor-pointer mb-4 rounded-e-none rounded-full transition-all ease-in-out duration-300 shadow-lg snap-end lg:snap-center"
        :class="{
            'bg-orange-400 border-error border-8': props.activeID === pokemon.id,
            'bg-orange-200': props.activeID !== pokemon.id
        }" @click="handleClick($event, pokemon)">
        <figure class="w-20">
            <img :src="pokemon.sprites.other.home.front_default" :alt="pokemon.name" class="object-cover">
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                {{ pokemon.name }}
            </h2>
            <p>N {{ pokemon.id }}</p>
        </div>
    </div>
</template>