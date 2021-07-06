<template>
  <div>
    <ul>
      <li v-for="navItem of navItems" v-bind:key="navItem.name">
        <router-link :to="navItem.link">{{ navItem.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data(){
    return{
      navItems: [
        {name: 'Home', link: '/home'},
        {name: 'Admin', link: '/home/admin'},
        {name: 'User', link: '/home/user'},
      ]
    }
  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
  display: flex;
  /*justify-content: space-evenly;*/
  background-color: #d7d7d9;
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
