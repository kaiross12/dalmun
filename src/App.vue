<template>
  <Navbar/>
  <main class="content-wrapper">
    <router-view />
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from "./components/Navbar.vue";

const route = useRoute();

onMounted(() => {

});

onUnmounted(() => {
});
</script>

<style>
</style>
