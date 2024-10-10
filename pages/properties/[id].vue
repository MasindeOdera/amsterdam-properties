<template>
    <head>
        <Title>{{ property.Adres }}</Title>
        <Meta name="description" :content="property.Cv" />
    </head>
    <div class="container mx-auto p-4">
        <div v-if="property" class="card">
            <PropertyDetails :property="property" />
            <PropertyDescription :property="property" />
        </div>
        <div v-else>
            <p>Loading property details...</p>
        </div>
    </div>
</template>

<script setup>

const { id } = useRoute().params;

const { data: property } = await useFetch(`/api/property/${id}`, {
  key: id, // Add key to ensure unique caching and matching during SSR and CSR
});


// If property id does not exist, then throw custom error
if (!property.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

definePageMeta({
    layout: 'property'
})
</script>

<style lang="scss" scoped>

</style>