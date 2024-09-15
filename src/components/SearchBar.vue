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

    <div class="dropdown w-full">
        <label class="input input-bordered flex items-center gap-2 w-full max-w-xs">
            <input type="text" class="grow" placeholder="Filter by ID or name!" v-model="value" tabindex="1" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                <path fill-rule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clip-rule="evenodd" />
            </svg>
        </label>
        <ul class="dropdown-content menu bg-base-100 rounded-box w-full max-w-xs p-2 shadow z-50">
            <li v-if="pending" class="flex items-center">
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