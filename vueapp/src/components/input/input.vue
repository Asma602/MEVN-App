<template>
  <div class=" ">
<!--    <h5>Input Component</h5>-->
<!--    <input type="text" v-model="message">-->
<!--    <input type="text" :value="msg" @input="updateMsg">-->
    <input type="text" class="form-control" v-model="newTask" placeholder="For example: Go to Gym">
    <div class="pt-2">
      <button class="btn btn-primary " v-on:click="addNewTask()">Add New</button>
      <p>Click on task name to edit</p>
    </div>


<!--    <p>{{ message }}</p>-->
  </div>
</template>

<script src="../input/inputScript.js"></script>
