<template>
    <div class="card text-center transform transition-all duration-300 hover:shadow-lg hover:scale-105 w-64 h-64 mx-auto">
        <NuxtLink :to="`/properties/${property.Id}`">
            <img :src="property.Image" alt="Property Image" class="thumb rounded-lg shadow-md w-full h-32 object-cover" />
        </NuxtLink>
        <p class="font-bold text-gray-500 mt-4 truncate w-full">{{ property.Address }}</p>
        <NuxtLink :to="`/properties/${property.Id}`">
            <button class="btn flex items-center justify-center mx-auto my-4 px-4 py-2 text-white rounded hover:bg-blue-600">
                <i class="material-icons mr-2">visibility</i><span>View Property</span>
            </button>
        </NuxtLink>
    </div>
</template>

<script setup>
const { property } = defineProps(['property']);
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 100%;
    object-fit: cover;
    margin: 0 auto;
}
</style>