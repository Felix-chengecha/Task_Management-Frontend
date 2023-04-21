<template>

<TopbarPage />

 <div class="container mt-5"  >
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Sign in</div>
        <div class="card-body">

          <form @submit.prevent="Login">
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" v-model="postdata.email" placeholder="Enter email">
            </div>
            <div class="form-group mt-4">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" v-model="postdata.password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary mt-4"  style="width: 340px; margin-left: 30px;">Login</button>

            <p>   <router-link to="/register">   create an account </router-link></p>
          </form>

          
        </div>
      </div>
    </div>
  </div>
</div>


  </template>
  
  <script>
import axios from '@/axios';
import TopbarPage from '@/components/TopbarPage.vue'

export default {
    name: 'LoginView',
    components: {TopbarPage },

    data(){
      return {
        postdata: {
               email:'',
               password: '',
      }

    }
  },

  methods: {

    Login() {

console.log(this.postdata);

axios.ulogin({
       email: this.postdata.email,
       password: this.postdata.password,   
  })
  
  .then(response => {
    const token = response.token;
    const name = response.user.name;
    const user_id = response.user.id;

    localStorage.setItem('token', token);
    localStorage.setItem('user_id', user_id);
    localStorage.setItem('name', name);
    localStorage.setItem('isLoggedIn', true);
    // console.log(name); 
    this.$router.push('/'); 
  })
  .catch(error => {
    console.log(error);
  });
},
  }
}
  </script>
  
  <style>
  
  </style>