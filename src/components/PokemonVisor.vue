<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Card from './Card.vue';
import VisorCard from "../components/VisorCard.vue"

const props = defineProps<{ items: any[], nextUrl: string }>()

const pokemon = ref<{ name?: string; img?: string; sprites?: any, id?: number, types?: { slot: number; type: { name: string; url: string } }[] }>({})
const activeCardID = ref<number>(1)
const pokemons = ref<any[]>(props.items)
const nextUrl = ref<string>(props.nextUrl)

async function fetchData(url: string) {
    const response = await fetch(url).then(res => res.json()).catch(() => null)
    return response
}

function setVisor(newValue: any) {
    pokemon.value = newValue
}

function changeActiveID(id: number) {
    activeCardID.value = id

}

async function handleScroll(ev: Event) {
    const { scrollTop, clientHeight, scrollHeight } = ev.target as HTMLDivElement




    if (scrollTop + clientHeight >= scrollHeight && nextUrl.value !== null

    ) {
        const response = await fetchData(nextUrl.value)
        pokemons.value = [...pokemons.value, ...response.results]
        nextUrl.value = response.next
    }

}
onMounted(async () => {
    pokemon.value = await fetchData(props.items[0].url)
})
console.log(pokemon);

</script>

<template>
    <div class="flex w-full flex-grow gap-4 flex-col sm:flex-row relative overflow-y-auto snap-y snap-mandatory"
        @scroll="handleScroll">
        <div v-if="Object.values(pokemon).length === 0">Cargando...</div>
        <VisorCard v-else :img-src="pokemon.sprites.other.home.front_default" :name="pokemon?.name" :id="pokemon.id"
            :types="pokemon.types" />

        <div class="w-full sm:w-1/2 p-4">
            <Card :name="item.name" :url="item.url" v-for="item in pokemons" @setVisor="setVisor"
                :activeID="activeCardID" @changeActiveID="changeActiveID" />
        </div>

    </div>

</template>