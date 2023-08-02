<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { property: 'og:title', content: `Panto` },
    { name: 'description', content: 'Panto is a Ecommerce Site that sells furnitures, its built with Nuxt 3, Medusa and TailwindCSS.' },
    { property: 'og:description', content: 'Panto is a Ecommerce Site that sells furnitures, its built with Nuxt 3, Medusa and TailwindCSS.' },
    { property: 'og:url', content: 'https://jadoo-ke.vercel.app/' },
    { name: 'twitter:title', content: 'Panto' },
    { name: 'twitter:description', content: 'Panto is a Ecommerce Site that sells furnitures, its built with Nuxt 3, Medusa and TailwindCSS.' },
    { name: 'twitter:site', content: 'https://jadoo-ke.vercel.app/' }
  ],
  title: `Panto`,
})
</script>

<template>
  <main class="max-w-8xl font-poppins">
    <slot/>
  </main>
</template>