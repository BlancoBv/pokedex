<script setup lang="ts">
import { ref } from "vue"
const cont = ref<number>(0)

</script>

<template>

    <div class="border-2">
        <div>{{ cont }}
            <button @click="cont++"> Ola</button>
        </div>
        <div class="border-2 bg-base-100 w-96 shadow-xl">
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</template>