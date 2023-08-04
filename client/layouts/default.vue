<script setup>
const route = useRoute()
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { property: 'og:title', content: `Panto` },
    { name: 'description', content: 'Panto is a Ecommerce Site that sells furniture, its built with Nuxt 3, Medusa and Tailwind CSS.' },
    { property: 'og:description', content: 'Panto is a Ecommerce Site that sells furniture, its built with Nuxt 3, Medusa and Tailwind CSS.' },
    { property: 'og:url', content: 'https://panto-ke.vercel.app/' },
    { name: 'twitter:title', content: 'Panto' },
    { name: 'twitter:description', content: 'Panto is a Ecommerce Site that sells furniture, its built with Nuxt 3, Medusa and Tailwind CSS.' },
    { name: 'twitter:site', content: 'https://panto-ke.vercel.app/' }
  ],
  title: `Panto - ${route?.meta?.title}`,
})
</script>

<template>
  <main class="max-w-8xl font-lexend text-gray-700">
    <slot/>
  </main>
</template>