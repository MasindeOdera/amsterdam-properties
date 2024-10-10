<template>
    <div>
        <!-- Container for titles, with text centered on smaller screens -->
        <div class="container p-4 text-center md:text-left">
            <h2 class="text-2xl font-bold mb-2 md:text-4xl">{{ title }}</h2>
            <h3 class="text-lg text-gray-500 mb-4 md:text-2xl">{{ subtitle }}</h3>
        </div>
        
        <!-- Display error or loading messages -->
        <div v-if="error" class="container p-4 text-red-500">Error: {{ error.message }}</div>
        <div v-else-if="!properties" class="container p-4">Loading...</div>

        <!-- Property Cards Grid -->
        <div v-else class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
            <div v-for="property in properties" :key="property.Id" class="flex justify-center">
                <PropertyCard :property="property" />
            </div>
        </div>
    </div>
</template>

<script setup>

const { data, error } = await useFetch('/api/properties');

// Destructure the returned data to get properties, title, and subtitle
const properties = data.value.data;
const title = data.value.title;
const subtitle = data.value.subtitle;

</script>
