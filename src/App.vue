<template>
 
<Navbar/>
<Hero />
<Subhero />
<Pricing />
<Review />
<Contact />
<Footer />
</template>

<script setup>
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Pricing from './components/Pricing.vue';
import Review from './components/Review.vue';
import Subhero from './components/Subhero.vue';


</script>

<style  scoped>
body{
    scroll-behavior: smooth;
    overflow-x: hidden;
}

</style>