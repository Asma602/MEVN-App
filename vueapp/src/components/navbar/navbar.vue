<template>
  <div>
    <ul>
      <li v-for="navItem of navItems" v-bind:key="navItem.name">
        <router-link :to="navItem.link">{{ navItem.name }}</router-link>
      </li>
      <li @click="logout()" class="logout-btn">
        <a >Logout</a>
      </li>
    </ul>
  </div>
</template>

<script src="../navbar/navbarScript.js"></script>
<style scoped>
a{
  text-decoration: none;
  color: white;
}
ul{
  list-style-type: none;
  display: flex;
  /*justify-content: space-evenly;*/
  background-color: #674d8f;
  margin:0;
}
li{
  padding: 20px;
  cursor: pointer;
  color: white;
  font-family: Bahnschrift,sans-serif;
  font-size: 20px;
}

</style>
<link rel="stylesheet" href="../navbar/navbar.scss">
