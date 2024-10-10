<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-7">
            <img :src="property.HoofdFoto" alt="Property Image" class="rounded-lg shadow-md" v-if="property.HoofdFoto"/>
        </div>
        <div class="p-7">
            <h1 class="text-4xl font-bold mb-4">{{ property.Adres || 'No Address Available' }}</h1>
            <p class="text-lg">Type: {{ cleanString(property.SoortWoning) || 'N/A' }}</p>
            <p class="text-lg">Price: €{{ property.Koopprijs || 'N/A' }}</p>
            <p class="text-lg">Living area: {{ property.Woonoppervlakte || 'N/A' }} m²</p>
            <p class="text-lg">Rooms: {{ property.AantalKamers || 'N/A' }}</p>
            <p class="text-lg">Construction year: {{ property.Bouwjaar || 'N/A' }}</p>
            <p class="text-lg">Offered since: {{ property.AangebodenSindsTekst || 'N/A' }}</p>
            <p class="text-lg">CV: {{ property.Cv || 'N/A' }}</p>
            <p class="text-lg">Location: {{ property.Ligging || 'N/A' }}</p>
            <p class="text-lg">Makelaar: {{ property.Makelaar || 'N/A' }}</p>
            <div v-if="property.MakelaarTelefoon" class="flex items-center mt-4">
                <button class="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    <a :href="`tel:${property.MakelaarTelefoon}`" class="flex items-center text-white no-underline">
                        <i class="material-icons mr-2">call</i>
                        <span>Call Makelaar</span>
                    </a>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { cleanString } from '~/utils/utils';

const { property } = defineProps(['property']);
</script>

<style scoped>
img {
    max-width: 400px;
}
</style>