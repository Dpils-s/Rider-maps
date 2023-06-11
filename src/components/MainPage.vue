<script>
export default {
  methods: {
    addressList() {
      this.$router.push('/address-list');
    },
    custAddress() {
      this.$router.push('/address-selection');
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <li>
        <button @click="addressList()">Address List</button>
        <button @click="custAddress()">Address selection</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>