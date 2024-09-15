<script setup lang="ts">
import { Radar } from 'vue-chartjs';
import 'chart.js/auto';
import type { ChartData } from 'chart.js/auto';
const props = defineProps<{ data: ChartData<"radar"> }>()

</script>
<template>
    <div class="size-96">
        <Radar :data="props.data"
            :options="{ plugins: { legend: { display: false } }, responsive: true, maintainAspectRatio: false, scales: { r: { min: 0, type: 'radialLinear', ticks: { backdropColor: 'transparent' } } } }" />
    </div>

</template>