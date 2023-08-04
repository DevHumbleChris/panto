// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon", "@pinia/nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        fontFamil: {
          lexend: ["Lexend", "sans-serif"],
        },
      },
      plugins: [
        require("tailwind-scrollbar-hide"),
        // ...
      ],
    },
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore",
    ],
  },
});
