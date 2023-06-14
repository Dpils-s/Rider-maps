<template>
  <main-layout>
  </main-layout>
  <div class="address-list">
    <div v-for="address in addresses" :key="address.id" class="address-item">
      <h4>{{ address.place.name }}</h4>
      <button @click="handleButtonClick(address)">Start ride</button>
    </div>
  </div>
</template>


<script src="@/js/AddressList.js"></script>
<style>
.address-list {
  display: flex;
  flex-direction: column;
}

.address-item {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>