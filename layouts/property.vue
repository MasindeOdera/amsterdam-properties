<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/properties" class="font-bold">Add Logo</NuxtLink>
            </nav>
        </header>

        <!-- output the page content -->
         <div class="container">
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