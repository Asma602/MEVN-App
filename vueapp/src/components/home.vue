<template>
  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>


    <!--    <h1>Hey, this is your dashboard</h1>-->
  </div>
<!--  <app-navbar></app-navbar>-->
</template>

<script>
import Vue  from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import navbar from "./navbar";
Vue.use(VueAxios, axios);

export default {
  baseUrl: "http://localhost:3000/",
  name: "home",
  components:{
    'app-navbar': navbar
  },
  created() {
    // this.axios.post(`http://localhost:3000/signup`, {username: 'asma', password: '1234'})
    // .then((res) => {
    //   console.log(res);
    // });
  }
}
</script>

<style scoped>

</style>
