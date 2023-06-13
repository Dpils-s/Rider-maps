<template>
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

onMounted(() => {
  initMap(); // Call the initMap function when the component is mounted
});

</script>