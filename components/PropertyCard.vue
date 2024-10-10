<template>
    <div class="card text-center transform transition-all duration-300 hover:shadow-lg hover:scale-105">
        <NuxtLink :to="`/properties/${property.Id}`">
            <img :src="property.Image" alt="Property Image" class="thumb rounded-lg shadow-md" />
        </NuxtLink>
        <p class="font-bold text-gray-500 m-4 truncate">{{ property.Address }}</p>
        <NuxtLink :to="`/properties/${property.Id}`">
            <button class="btn flex items-center justify-center mx-auto my-4 inline-block px-4 py-2"><i class="material-icons mr-2">visibility</i><span>View Property</span></button>
        </NuxtLink>
    </div>
</template>

<script setup>
const { property } = defineProps(['property']);
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>