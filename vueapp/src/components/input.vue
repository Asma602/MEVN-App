<template>
  <div class="red-border p-3">
    <h5>Input Component</h5>
<!--    <input type="text" v-model="message">-->
<!--    <input type="text" :value="msg" @input="updateMsg">-->
    <input type="text" class="form-control" v-model="newTask">
    <div class="pt-2">
      <button class="btn btn-primary " v-on:click="addNewTask()">Add New</button>
      <p>Click on task name to edit</p>
    </div>


<!--    <p>{{ message }}</p>-->
  </div>
</template>

<script>
export default {
  props: [
    'msg' // this comes from parent - using as an input property
  ],
  data() {
    return {
      newTask: '',
      name: "input.vue",
      message: ''  // this goes to parent - using as an output property
    }
  },
  methods: {
    updateMsg(event){
      this.message = event.target.value;
      this.$emit('msgUpdated', this.message)     // emitting event to parent
    },
    addNewTask(){
      this.$root.$emit('addTask', this.newTask);  // emitting event using event bus (used for siblings)
      this.newTask = '';
    }
  }
}
</script>

<style scoped>
  .red-border{
    border: 1px solid red;
  }
</style>
