// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "@pinia/nuxt",
    "nuxt-medusa",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        fontFamily: {
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
  medusa: {
    baseUrl: process.env.MEDUSA_URL, // Or use .env with `MEDUSA_URL`
    server: true,
    apiKey: process.env.MEDUSA_PANTO_APIKKEY,
  },
});
