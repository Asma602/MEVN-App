<template>
  <div id="app" class="container-fluid p-0">

<!--    <app-hello-world></app-hello-world>-->
    <h1>Just a simple MEVN App with sql... </h1>
    <router-view></router-view>

<!--    <h3>Test Input component</h3>-->
<!--    <h4>{{ message }}</h4>-->
<!--    <app-input :msg="message" @msgUpdated="message = $event"></app-input>-->
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    // 'app-input': Input,
    // 'app-hello-world': HelloWorld,
  },
  data(){
    return{
      message: 'Message from parent to child'
    }
  }
}
</script>

<style>
body{
  margin:0
}

</style>
