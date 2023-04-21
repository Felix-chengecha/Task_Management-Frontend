<template>
    
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-info sidebar collapse">
     <div class="position-sticky pt-3">

       <ul class="nav flex-column">
         <li class="nav-item mt-3"  style="border-bottom: 1px solid grey;" >      
             <router-link to="/" exact style="text-decoration: none;"  > <p class="text-dark"> <i class="bi bi-house-fill"></i>  Home </p> </router-link>
         </li>

         <li class="nav-item mt-3" style="border-bottom: 1px solid grey;">
            <router-link  to="/tasks" exact style="text-decoration: none;"  > <h6 class="text-dark"> <i class="bi bi-bag-plus-fill"></i> Tasks </h6> </router-link>
         </li>

         <li class="nav-item mt-3" style="border-bottom: 1px solid grey;">
            <router-link  to="/usertask" exact style="text-decoration: none;" >  <h6  class="text-dark"> <i class="bi bi-bag-check-fill"></i> Users Tasks </h6> </router-link>
         </li>
     </ul>

   </div>
 </nav>

</template>

<script>
export default {
}
</script>

<style scoped>
#sidebarMenu{
  height: 100vh;
}

</style>