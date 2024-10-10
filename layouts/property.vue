<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/properties" class="font-bold">
                    <button title="Back">
                        <i class="material-icons mr-2">keyboard_backspace</i>
                    </button>
                </NuxtLink>
            </nav>
        </header>

        <!-- output the page content -->
         <div class="container mx-auto p-4">
            <slot />
         </div>

         <footer class="container mx-auto p-4 flex items-center justify-center border-t-2">
            <a href="https://www.funda.nl/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/funda-logo.png" alt="Funda Logo" class="w-10 mr-2" />
            </a>
            <p>&copy; 2024 Amsterdam Properties</p>
         </footer>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>