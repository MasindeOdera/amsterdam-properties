<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <ul class="flex gap-4 ml-2">
                    <li><NuxtLink to="/">
                        <button title="Home">
                            <i class="material-icons mr-2">home</i>
                        </button>
                    </NuxtLink></li>
                    <li><NuxtLink to="/properties">
                        <button title="Properties">
                            <i class="material-icons mr-2">real_estate_agent</i>
                        </button>
                    </NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- output the page content -->
         <div class="container mx-auto p-4">
            <slot />
         </div>

         <footer class="container mx-auto p-4 flex items-center justify-center border-t-2">
            <a href="https://www.funda.nl/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/funda-logo.png" alt="Funda Logo" class="w-10 mr-6" />
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