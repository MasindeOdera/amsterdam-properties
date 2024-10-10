<template>
    <div>
      <p class="font-bold border-b-2 mb-4 pb-2">Full Description</p>
      <!-- Add a container for the description with conditional classes -->
      <p class="mb-7 p-7 overflow-hidden" :class="{ 'line-clamp-4': !isExpanded }">
        {{ property.VolledigeOmschrijving }}
      </p>
      <!-- Toggle button to show/hide the full description -->
      <button
        @click="isExpanded = !isExpanded"
        class="text-emerald-500 hover:text-emerald-700 font-medium focus:outline-none"
      >
        {{ isExpanded ? 'Show Less' : 'Read More' }}
        <i class="material-icons align-middle">
          {{ isExpanded ? 'expand_less' : 'expand_more' }}
        </i>
      </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Define a prop to accept the property object
const { property } = defineProps(['property']);

// State to track whether the full description is shown or not
const isExpanded = ref(false);
</script>

<style scoped>
/* Tailwind line clamp utility */
.line-clamp-4 {
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
-webkit-line-clamp: 4; /* Show only the first 4 lines */
}
</style>
  