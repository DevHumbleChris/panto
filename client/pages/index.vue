<script setup>
import Hero from '~/components/hero/index.vue'
import ChooseUs from '~/components/choose-us/index.vue'
import BestSelling from '~/components/best-selling/index.vue'
import Experiences from '~/components/experiences/index.vue'
definePageMeta({
    title: 'Home'
})
</script>

<template>
    <main>
        <Hero />
        <ChooseUs />
        <BestSelling />
        <Experiences />
    </main>
</template>