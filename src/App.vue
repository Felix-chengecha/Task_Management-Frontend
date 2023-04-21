<template>

  


    <RouterView />  
  
<!-- <DashboardPage /> -->


  </template>
  
  
  <script>
// import DashboardPage from './components/DashboardPage.vue'
  
  export default {
    name: 'App',
    // components: {DashboardPage }
  }
  </script>
  
  <style>
  
  .d-flex{
      margin: 6px;
      display: inline;
  }
  .d-flex, a{
  padding-right:15px;
  }
  
  .d-flex, span{
  padding-right:15px;
   padding-left: 15px;
  }
  
  .active{
    font-weight: bold;
    color:darkseagreen;
    text-decoration: none;
  }
  
  .link{
    font-weight: bold;
    color:rgb(27, 47, 27);
    text-decoration: none;
  
  }
  </style>
  