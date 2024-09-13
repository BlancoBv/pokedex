<script setup lang="ts">
import { ref, watch } from 'vue';

const value = ref<string>("")
const pokemon = ref<any>({})
const pending = ref<boolean>(false)



watch(value, async () => {
    pending.value = true
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value.value.toLowerCase()}`)
        .then(res => {
            console.log(res, "ola");

            return res.json()
        })
        .catch((_err) => null)
        .finally(() => pending.value = false)

    pokemon.value = response
})
</script>

<template>

    <div class="dropdown w-60">

        <input tabindex="0" type="text" v-model="value" class="input input-bordered w-full max-w-xs"
            placeholder="Filter by ID or name!">
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow z-50">
            <li v-if="pending">
                <span class="loading loading-spinner loading-xs"></span>
            </li>
            <li v-else-if="pokemon && value">
                <a :href="'/pokemon/' + pokemon.id">{{ pokemon.name }}</a>
            </li>
            <li v-else>
                <a>No results.</a>
            </li>
        </ul>
    </div>





</template>