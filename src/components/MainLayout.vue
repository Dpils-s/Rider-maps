<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li><a @click="addressList()">Home</a></li>
      <li><a @click="custAddress()">Create address</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    addressList() {
      this.$router.push('/');
    },
    custAddress() {
      this.$router.push('/address-selection');
    },
  }
}
</script>

<style>
.navbar {
  background-color: #333;
  color: #fff;
  padding: 30px;
  margin: 0;
  display: flex;
  justify-content: center; /* Center horizontally */
}

.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

li {
  margin-right: 50px;
}

a {
  color: #fff;
  text-decoration: none;
}
</style>
