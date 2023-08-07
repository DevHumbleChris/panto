<script setup>
import Hero from '~/components/hero/index.vue'
import ChooseUs from '~/components/choose-us/index.vue'
import BestSelling from '~/components/best-selling/index.vue'
import Experiences from '~/components/experiences/index.vue'
import Materials from '~/components/materials/index.vue'
import Testimonials from '~/components/testimonials/index.vue'
definePageMeta({
    title: 'Home'
})
</script>

<template>
    <main>
        <LazyHero />
        <LazyChooseUs />
        <LazyBestSelling />
        <LazyExperiences />
        <LazyMaterials />
        <LazyTestimonials />
    </main>
</template>