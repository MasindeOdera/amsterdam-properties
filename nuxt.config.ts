// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Amsterdam Properties',
      meta: [
        { name: 'description', content: 'A list of Amsterdam Properties' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  runtimeConfig: {
    // Private runtime config (only available on the server)
    fundaApiKey: process.env.FUNDA_API_KEY,
    fundaBaseUrl: process.env.FUNDA_BASE_URL,

    // Public runtime config (available on both client and server)
    public: {
      // Add variables that need to be accessible on the client
      publicFundaApiKey: process.env.NUXT_PUBLIC_FUNDA_API_KEY, // If a separate public API key was needed, doesn't exist, here to show scalability
      publicFundaBaseUrl: process.env.NUXT_PUBLIC_FUNDA_BASE_URL, // If the base URL was public, it would be here, also doesn't exist.
    }
  }
})
