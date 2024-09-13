<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref } from 'vue';
import Card from './Card.vue';

const props = defineProps<{ items: any[], nextUrl: string }>()

const pokemon = ref<{ name?: string; img?: string; sprites?: any, id?: number }>({})
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




</script>

<template>
    <div class="flex w-full flex-grow gap-4 flex-col sm:flex-row relative overflow-y-auto snap-y snap-mandatory"
        @scroll="handleScroll">
        <div v-if="Object.values(pokemon).length === 0">Cargando...</div>
        <div v-else
            class="w-full h-full sticky top-0 sm:w-1/2 flex justify-center items-center p-4 z-40 backdrop-blur-sm">
            <!--    <SearchBar /> -->
            <div
                class="border-4 border-blue-300 h-96 w-full m-2 p-2 card outline outline-yellow-300 outline-8 bg-gradient-to-b from-blue-100 to-transparent">

                <figure class="w-60 mx-auto">
                    <img :src="pokemon.sprites.other.home.front_default" class="object-contain">
                </figure>
                <div class="card-body">
                    <h2 class="card-title"> {{ pokemon.name }} </h2>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Fashion</div>
                        <div class="badge badge-outline">Products</div>
                        <a class="btn btn-primary" :href="'pokemon/' + pokemon.id">
                            See details
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 p-4">
            <Card :name="item.name" :url="item.url" v-for="item in pokemons" @setVisor="setVisor"
                :activeID="activeCardID" @changeActiveID="changeActiveID" />
        </div>

    </div>

</template>