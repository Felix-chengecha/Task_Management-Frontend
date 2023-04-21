<template>

<body>

  <TopbarPage />


<div class="container-fluid">
 <div class="row">
   


   <sidebar-page />


 

   
   
 <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    
  <div class="container mt-4">
          <div class="row">

<div class="col-md-3 mb-5">
<div class="card">
    <div class="card-header">Add status</div>
    <div v-if="submitSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
           Success! Your have added a status.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
    <div class="card-body">
      <form @submit.prevent="AddStatus">
        <div class="form-group">
            <label for="floatingTextarea">Name</label>
          <input type="text" class="form-control"  v-model="mstatus.name">
        </div>

        <button type="submit" class="btn btn-primary mt-4"  style="margin-left: 30px;">Submit</button>

   </form>
 </div>
</div>
</div>

<div class="col-md-2 mb-3">

  </div>




      <div class="col-md-6 mb-5">
        <div class="card">
          <div class="card-header">Add a new task</div>
          <div v-if="submitSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
                 Success! Your have added a new task.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           </div>
          <div class="card-body">
            <form @submit.prevent="AddTask">
              <div class="form-group">
                  <label for="floatingTextarea">Name</label>
                <input type="text" class="form-control"  v-model="post.name">
              </div>
              <div class="form-group mt-4">
                  <label for="floatingTextarea">Description</label>
                  <textarea class="form-control"  v-model="post.description"></textarea>
                  </div>
              <div class="form-group mt-4">
                  <label for="floatingTextarea">Due Date</label>
                <input type="date" class="form-control" v-model="post.due_date" >
              </div>
              <div class="form-group mt-4">
                <label for="status">Status</label>
              <select v-model="post.status_id" class="form-select" aria-label="Default select example" >
                <option v-for="option in options" :value="option.value" :key="option.value">{{ option.value }}</option>

                <!-- <option v-for="option in options" :value="option.id">{{ option.value }}</option> -->

                </select>
              </div>     
              <button type="submit" class="btn btn-primary mt-4"  style="width: 340px; margin-left: 30px;">Submit</button>
            </form>
          </div>
        </div>

</div>

          </div>
          </div>


      <div class="container mt-5"  >
    <div class="row justify-content-center">
      <div class="col-md-6">

      


      </div>
    </div>
  </div>

   </main>
 </div>
</div>
 </body>

  
</template>

<script>
import axios from '@/axios';
import TopbarPage from '@/components/TopbarPage.vue'
import SidebarPage from '@/components/SidebarPage.vue'
export default {

       name: 'HomeView',
    components: {TopbarPage, SidebarPage},

  data() {
          return {
           

            options:[],

            details:{
              id: '',
              email: '',
            },

            post: {
               name: '',
               description: '',
               due_date: '',
               status_id: '',
            },

            mstatus:{
              name:''
            },


           token : localStorage.getItem('token'),

           submitSuccess: false

          }
        },

    methods: {

      AddStatus() {
        axios.addstatus({
               status_name: this.mstatus.name,
          }, this.token)
          
          .then(response => {
            console.log(response); 
            this.submitSuccess = true;
          })
          .catch(error => {
            console.log(error);
          });

      },

      GetAllStatus() {

          axios.getstatus(this.token)
          .then(response=>   {
            this.options = response.data.map(item => ({
                  id: item.id,
                  value: item.name
            }));
          });
      },


      AddTask() {

        console.log(this.post);

        axios.addtask({
               name: this.post.name,
               description: this.post.description,
               due_date: this.post.due_date,
               status_id: this.post.status_id,
          }, this.token)
          
          .then(response => {
            console.log(response); 
            this.submitSuccess = true;
            this.$router.push('/tasks'); 
          })
          .catch(error => {
            console.log(error);
          });
      },
  
    },

    mounted() {
      this.GetAllStatus();
    }


  
}
</script>

<style scoped>

</style>