// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  experimental: { appManifest: false },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      var1: process.env.VAR_1,
    },
    var2: process.env.VAR_2
  },
})
