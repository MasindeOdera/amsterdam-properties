<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Add Logo</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">
                        <button>
                            <i class="material-icons mr-2">home</i>
                        </button>
                    </NuxtLink></li>
                    <li><NuxtLink to="/properties">Properties</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- output the page content -->
         <div class="container mx-auto p-4">
            <slot />
         </div>

         <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <h2>Logo?</h2>
         </footer>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>