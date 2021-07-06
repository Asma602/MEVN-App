<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <h1>Welcome to admin portal</h1>
        <table class="table table-striped">
          <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email Address</th>
          </tr>
          <tr v-for="user of users" :key="user.username">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
          </tr>
          </tbody>
        </table>
        <form>
          <input type="file" class="form-control" @change="onFileSelected">
          <button class="btn btn-outline-primary" type="submit" @click="uploadImage">Upload</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import Vue  from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import {BASE_URL} from "../global";
Vue.use(VueAxios, axios);

export default {
  data(){
    return{
      text: '',
      selectedFile: '',
      users: []
    }
  },
  methods: {
    onFileSelected(event){
      this.selectedFile = event.target.files[0];

    },
    uploadImage(event){
      event.preventDefault();
      const formData = new FormData();
      const imageBlob = this.selectedFile;
      formData.set('file', imageBlob);

      // formData.append('image', this.selectedFile, this.selectedFile.name);
      console.log(formData);
      this.axios.post('http://localhost:3000/file/upload', formData).then(res => {
        console.log(res);
      })
    }
  },
  created() {
    this.axios.get('http://localhost:3000/users//getAllUsers').then((res) => {
      // console.log("users", res.data.users);
      this.users = res.data.users;
    })
  }
}
</script>

<style scoped>

</style>
