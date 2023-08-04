<script setup>
import Hero from '~/components/hero/index.vue'
import ChooseUs from '~/components/choose-us/index.vue'
import BestSelling from '~/components/best-selling/index.vue'
definePageMeta({
    title: 'Home'
})
</script>

<template>
    <section>
        <Hero />
        <ChooseUs />
        <BestSelling />
    </section>
</template>