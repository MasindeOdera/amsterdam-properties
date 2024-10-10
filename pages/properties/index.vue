<template>
    <div>
        <div class="container p-4">
            <h2>{{ title }}</h2>
            <h3>{{ subtitle }}</h3>
        </div>
        <div v-if="error" class="container p-4">Error: {{ error.message }}</div>
        <div v-else-if="!properties" class="container p-4">Loading...</div>
        <div v-else class="grid grid-cols-4 gap-5 p-4">
            <div v-for="property in properties" :key="property.Id">
                <PropertyCard :property="property" />
                <!-- <NuxtLink :to="`/properties/${property.Id}`">
                    <img :src="property.Image" alt="Property Image" width="200" height="150" />
                </NuxtLink>
                <h3>Addr.: {{ property.Address }}</h3>
                <p>Availablity: {{ property.Availability }}</p> -->
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

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
    img {
        margin: 10px 0;
        border: 1px solid #ccc;
    }
</style>