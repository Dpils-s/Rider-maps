<template>
  <main-layout>
  </main-layout>
<div>
  <label id="description"></label><br>
  <label id="time"></label>
  <div id="map"></div>
</div>
</template>

<script setup>

import { onMounted } from 'vue';
import { initMap } from '@/js/RiderRoute';
import '@/css/RiderRouteCSS.css';
import MainLayout from "@/components/MainLayout.vue";

onMounted(() => {
  initMap(); // Call the initMap function when the component is mounted
});

</script>