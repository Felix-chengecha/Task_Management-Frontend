<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><h5>Task Manager</h5></a>
      
          
     <div class="dropdown">
          <p class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="margin-right: 20px;">{{ isLoggedIn ? name : 'Account' }}</p>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li v-if="isLoggedIn"><a class="dropdown-item" @click="Logout"> sign out </a></li>
            <li v-if="isLoggedOut"><a class="dropdown-item" @click="Login"> sign in</a></li>
          </ul>
    </div>

        </div>
      </nav>
</template>

<script>
export default {

  data() {
    return {
      isLoggedIn: false,
      isLoggedOut: true,

      name : ''
    }
  },

methods:{

  Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('isLoggedIn');
    this.$router.push('/login'); 
    this.isLoggedIn= false;
    this.isLoggedOut= true;
  },

  Login() {
    this.$router.push('/login'); 
  }

},

 mounted() {

  if(localStorage) {
    const username = localStorage.getItem('name')
        
      if(username) {
         this.name=username;
         this.isLoggedIn = true;
         this.isLoggedOut = false;
      }

  }
 }
        
}
</script>

<style>

</style>