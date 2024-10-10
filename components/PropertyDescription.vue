<template>
    <div>
        <p class="font-bold border-b-2 mb-4 pb-2">Full Description</p>
        <p class="mb-7 p-7">{{ property.VolledigeOmschrijving}}</p>
    </div>
</template>

<script setup>
const { property } = defineProps(['property']);
</script>

<style scoped>

</style>