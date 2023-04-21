<template>

  <TopbarPage />
  
   <div class="container mt-5"  >
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Create an account</div>
          <div class="card-body">
  
            <form @submit.prevent="Register">
              <div class="form-group">
                <label for="email">Full name</label>
                <input type="name" class="form-control" id="name" v-model="postdata.name" placeholder="Enter your full name">
              </div>
              <div class="form-group mt-4">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" v-model="postdata.email" placeholder="Enter email">
              </div>
              <div class="form-group mt-4">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="postdata.password" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary mt-4"  style="width: 340px; margin-left: 50px;">Register</button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
    </template>
    
    <script >
  
 
  import TopbarPage from '@/components/TopbarPage.vue'
import axios from '@/axios';

  
  export default {
      name: 'RegisterView',
      components: {TopbarPage},

      data() {
        return {

          postdata: {
               name:'',
               email:'',
               password: '',
      }
          
        }
      },

      methods: {

Register() {

console.log(this.postdata);

axios.register({
    name: this.postdata.name,
   email: this.postdata.email,
   password: this.postdata.password,   
})

.then(response => {
const token = response.token;
const name = response.user.name;

localStorage.setItem('token', token);
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