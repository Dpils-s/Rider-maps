<template>
  <div class="card-container">
    <div class="panel">
      <div>
        <img class="sb-title-icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/location_pin/v5/24px.svg" alt="">
        <span class="sb-title">Address Selection</span>
      </div>
      <input type="text" placeholder="Address" id="location-input" />
      <input type="text" placeholder="City" id="locality-input" />
      <div class="half-input-container">
        <input type="text" class="half-input" placeholder="State/Province" id="administrative_area_level_1-input" />
        <input type="text" class="half-input" placeholder="Zip/Postal code" id="postal_code-input" />
      </div>
      <input type="text" placeholder="Country" id="country-input" />
      <label><b>Extra description</b></label>
      <input id="description" type="text" placeholder="Description" />
      <button class="button-cta" @click="handleSave">Save</button>
    </div>
    <div class="map" id="gmp-map"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { initMap, saveAddress } from '@/js/CustomerAddress';
import '@/css/CustomerAddress.css';

onMounted(() => {
  initMap(); // Call the initMap function when the component is mounted
});

const handleSave = async () => {
  await saveAddress();
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
