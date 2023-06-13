<template>
  <div>
    <ul>
      <li v-for="address in addresses" :key="address.id">
        <button @click="handleButtonClick(address)">{{ address.place.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script src="@/js/AddressList.js"></script>