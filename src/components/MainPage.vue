<script>
export default {
  methods: {
    addressList() {
      this.$router.push('/address-list');
    },
    custAddress() {
      this.$router.push('/address-selection');
    },
    helloWorld(){
      this.$router.push('/hello-world');
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
        <button @click="helloWorld()">Hello World</button>
      </li>
    </ul>
  </div>
</template>