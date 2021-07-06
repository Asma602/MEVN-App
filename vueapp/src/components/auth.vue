<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center p-5">
        <div class="form-container mt-5">
          <div class="form-group">
            <h3>{{ loginView ? 'Log in': 'Sign up' }}</h3>
          </div>
          <form @submit="submitForm($event)" >
            <div class="form-group" v-if="!loginView">
              <label>Username</label>
              <input type="text" placeholder="Username" class="form-control" v-model="user.username"
              required>

            </div>
            <div class="form-group" >
              <label>Email Address</label>
              <input type="email" placeholder="Email Address" class="form-control" v-model="user.email"
              required>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" class="form-control" v-model="user.password"
              required>
            </div>
            <div class="form-group">
              <button class="btn btn-primary w-100" type="submit">{{ loginView ? 'Log in': 'Sign up' }}</button>
              <span>
                  {{loginView ? 'Don\'t have an account?': 'Already have an account?'}}
                 <a class="login-link" @click="switchView()">{{ !loginView ? 'Log in': 'Sign up' }}</a>
              </span>
            </div>
          </form>
          <div class="errors-log form-group" v-if="errors.length">
            <span v-for="error of errors" :key="error"
            class="text-danger small">
              {{error}}
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>



<script>
import Vue  from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  data(){
    return{
      loginView: false,
      errors: [],
      user:{
        username: null,
        email: null,
        password: null
      }

    }
  },
  methods:{
    switchView(){
      this.loginView = !this.loginView;
    },

    submitForm(event){
      this.errors = [];
      event.preventDefault();
      if(this.user.username === '' ||
        this.user.email === '' ||
        this.user.password === ''){
        this.errors.push('All fields are required');
      }
      if(this.user.password.length < 8 && !this.loginView){
        this.errors.push('Password must be 8 characters long');
      }
      if(this.errors.length === 0){
        if(!this.loginView){
          this.axios.post('http://localhost:3000/signup', {user: this.user}).then(
              (res) => {
                if(res.data.status === false){
                  this.errors.push('User already exists!');
                }
                else{
                  this.user = {
                    username: null,
                    password: null,
                    email: null
                  }
                  this.loginView = true;
                }
              }
          )
        }
        else{
          this.axios.post('http://localhost:3000/login', {user: this.user}).then(
              (res) => {
                console.log(res);

                if(res.data.status === false){
                  this.errors.push('User doesn\'t exists!');
                }
                else{
                  localStorage.setItem('user', JSON.stringify(res.data.user));
                  this.$router.push('/home/user');
                }
              }
          )
        }

      }

    }
  },
  created() {
    if(JSON.parse(localStorage.getItem('user')) !== null){
      this.$router.push('/home/user');
    }
  }
}
</script>

<style scoped>
.form-container{
  border: 1px solid #eeeeee;
  border-radius: 2px;
  padding: 3rem;
}
.form-group{
  padding: 5px 20px;
}
.login-link{
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}
</style>
