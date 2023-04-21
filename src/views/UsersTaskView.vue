<template>






<body>

<TopbarPage />


<div class="container-fluid">
<div class="row">
 
 <sidebar-page />

 
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  




  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h4>Tasks</h4>
          <div class="btn-toolbar mb-2 mb-md-0">
          </div>
        </div>
  
  
       <table class="table mt-3">
    <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Due_date</th>
        <th scope="col">Start_time</th>
        <th scope="col">End_time</th>
        <th scope="col">Remarks</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>

      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr
        v-for="task, tsk in usertasks" :key="tsk" >
        <td>{{task.task }}</td>
        <td>{{task.due_date }}</td>
        <td>{{task.start_time }}</td>
        <td>{{task.end_time }}</td>
        <td>{{task.remarks }}</td>
        <td>{{task.status }}</td>


        <td>   
          <div class="dropdown">
              <i class="bi bi-three-dots-vertical"  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" @click=" getUserTask(task.id)"  data-bs-toggle="modal" data-bs-target="#exampleModal">Update</a></li>
                  <li><a class="dropdown-item" @click="deleteTask(task.id)">Delete</a></li>
                  <li><a class="dropdown-item" href="#">Add  task</a></li>

              </ul>
           </div>
        </td>
      </tr>
   
  
    </tbody>
  </table>






<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel"> Update user task </h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">


       <div v-for="item, index in usertask" :key="index">

         <form @submit.prevent="updateTask">

          <div class="form-group">
              <label for="floatingTextarea">Task</label>
            <input type="text" class="form-control" v-model="item.task" id="task">
          </div>

          <div class="form-group mt-4">
              <label for="date">Due Date</label>
            <input type="date" class="form-control" v-model="item.due_date" id="date" >
          </div>

          <div class="form-group mt-4">
              <label for="date">Start_time</label>
            <input type="date" class="form-control" v-model="item.start_time" id="starttime" >
          </div>

          <div class="form-group mt-4">
              <label for="date">End_time</label>
            <input type="date" class="form-control" v-model="item.end_time" id="endtime" >
          </div>

          <div class="form-group mt-4">
              <label for="description">Remarks</label>
              <textarea class="form-control" v-model="item.remarks" id="remarks"></textarea>
              </div>


          <div class="form-group mt-4">
              <label for="status">Status</label>
            <select v-model="item.status" class="form-select" aria-label="Default select example" id="status">
              <option v-for="option in options" :value="option.value" :key="option.value">{{ option.value }}</option>
              </select>
          </div>    
          <button type="submit" class="btn btn-primary mt-4"  style="width: 340px; margin-left: 50px;">Update</button>

      </form>
    </div>

      
    </div>
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
      name: 'UserTasksView',
    components: {TopbarPage, SidebarPage},

      data() {
        return {
          
          usertasks: [],
          usertask:[],
          token : localStorage.getItem('token'),


          formData: {
            name:'',
            description:'',
            due_date:'',
            status:'',
          },

          options: [
            { label: 'complete', value: '1' },
            { label: 'ongoing', value: '1' },
            { label: 'urgent', value: '1' }
          ],



        };
      },

      methods: {

                 //get all status
    GetAllStatus() {

axios.getstatus(this.token)
.then(response=>   {
  this.options = response.data.map(item => ({
        id: item.id,
        value: item.name
  }));
});
},


    //get one task
    getUserTask(id){ 
     axios.getusertask(id,this.token)
        .then(response=> {
           this.usertask = response.data.data;
           console.log(this.task);
        })
        .catch(error => {
          console.log(error);
        })
    },  

    //get all tasks    
      getUserTasks(){ 
        axios.getusertasks(this.token)
        .then(response=> {
           this.usertasks = response.data.data;
           console.log(this.tasks);
        })
        .catch(error => {
          console.log(error);
        })
      },

    //delete task method
    deleteuserTask(id) {
      axios.deleteusertask(id, this.token)
      .then(response => {
        console.log(response);
        // remove the deleted post from the posts array
        // this.tasks = this.tasks.filter(task => task.id !== id);
      })
      .catch(error => {
        console.log(error);
      })
     },

    //update task method
    updateuserTask() {
      console.log(this.formData); 
      axios. updateusertask(1, this.formData, this.token)
      .then(response => {
        console.log(response); 
      })
      .catch(error => {
        console.log(error);
      });
  },


}, 


      mounted() {
        //get all tasks on load
        this.getUserTasks();
        this.GetAllStatus();
        


      }
    
    }
    </script>
    
    <style>
    
    </style>