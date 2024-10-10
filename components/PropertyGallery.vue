<template>
    <div class="gallery-container mt-6">
      <p class="font-bold border-b-2 mb-4 pb-2">Gallery</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-8">
        <div
          v-for="(photo, index) in limitedPhotos"
          :key="index"
          class="relative"
        >
          <img
            :src="photo"
            :alt="`Property Photo ${index + 1}`"
            class="rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
            @click="viewFullImage(photo)"
          />
        </div>
      </div>
      <!-- Show more/less button -->
      <button
        @click="showAll = !showAll"
        class="mt-4 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-700 transition"
      >
        {{ showAll ? 'Show Less' : 'Show More' }}
      </button>
  
      <!-- Modal for full-screen image view -->
      <div v-if="showModal" class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div class="relative">
          <button @click="closeModal" class="absolute top-2 right-2 bg-white rounded-full p-1">
            <i class="material-icons flex">close</i>
          </button>
          <img :src="selectedImage" class="max-h-screen rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Props to accept the property object
const { property } = defineProps(['property']);

// State to control whether to show all images or limited images
const showAll = ref(false);

// Number of images to show initially
const initialCount = 8;

// Computed property to determine which photos to display
const limitedPhotos = computed(() => {
return showAll.value ? property['Media-Foto'] : property['Media-Foto'].slice(0, initialCount);
});

// State and methods for modal
const showModal = ref(false);
const selectedImage = ref('');

// Function to view a full image in a modal
const viewFullImage = (photo) => {
// Replace '_klein.jpg' with '_groot.jpg' to display a larger image
const largePhoto = photo.replace('_klein.jpg', '_groot.jpg');
selectedImage.value = largePhoto;
showModal.value = true;
};

// Function to close the modal
const closeModal = () => {
showModal.value = false;
};
</script>

<style scoped>
/* Styles for the modal */
.modal {
z-index: 50;
}
</style>
  