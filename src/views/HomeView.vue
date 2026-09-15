<template>
    <HeroSection/>
    <About/>
    <MessageSection/>
    <Registration/>
    <Gallery/>
    <FAQSection/>
    <Divider/>
    <Contact/>
    <Footer/>
</template>
<script setup>
    import HeroSection from '../components/HeroSection.vue';
    import About from '../components/About.vue';
    import FAQSection from '../components/FAQSection.vue';
    import Divider from '../components/Divider.vue';
    import Gallery from '../components/Gallery.vue';
    import Contact from '../components/Contact.vue';
    import Footer from '../components/Footer.vue';
    import Registration from '../components/Registration.vue';
    import MessageSection from '../components/MessageSection.vue';
</script>
<style scoped>
    html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
}
</style>