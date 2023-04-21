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
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Due_Date</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr
          v-for="task, tsk in tasks" :key="tsk" >
          <td>{{task.name}}</td>
          <td>{{task.description}}</td>
          <td>{{task.due_date }}</td>
          <td>{{task.status }}</td>

          <td>   
            <div class="dropdown">
                <i class="bi bi-three-dots-vertical"  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" @click="getTask(task.id)"  data-bs-toggle="modal" data-bs-target="#exampleModal">Update</a></li>
                    <li><a class="dropdown-item" @click="deleteTask(task.id)">Delete</a></li>
                    <li><a class="dropdown-item" @click="getTask(task.id)" data-bs-toggle="modal" data-bs-target="#Addusertask">Add to your task</a></li>

                </ul>
             </div>
          </td>
        </tr>
     
    
      </tbody>
    </table>






<!-- Modal to update task-->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Update user details </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">



           <form @submit.prevent="updateTask">
            <!-- <div v-for="item, index in task" :key="index"> -->

            <div class="form-group">
                <label for="floatingTextarea">Name</label>
              <input type="text" class="form-control" v-model="name" id="name">
            </div>

            <div class="form-group mt-4">
                <label for="description">Description</label>
                <textarea class="form-control" v-model="description" id="description"></textarea>
                </div>

            <div class="form-group mt-4">
                <label for="date">Due Date</label>
              <input type="date" class="form-control" v-model="due_date" id="date" >
            </div>

            <div class="form-group mt-4">
                <label for="status">Status</label>
              <select v-model="status" class="form-select" aria-label="Default select example" id="status" >
                <option v-for="option in options" :value="option.value" :key="option.value">{{ option.value }}</option>
                </select>
            </div>    
            <button type="submit" class="btn btn-primary mt-4"  style="width: 340px; margin-left: 50px;">Update</button>
          <!-- </div> -->

        </form>
        
      </div>
    </div>
  </div>
</div>









<!-- Button trigger modal -->
<div class="modal fade" id="Addusertask" tabindex="-1" aria-labelledby="Addusertask" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Take this task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
         <form @submit.prevent="Taketask">
        
          <p>-{{ name }}</p>

            <input type="hidden" class="form-control" v-model="id" id="date" >
            <input type="hidden" class="form-control" v-model="status_id" id="date" >
            <input type="hidden" class="form-control" v-model="due_date" id="date" >


          <div class="form-group mt-4">
              <label for="date">Start_time</label>
            <input type="date" class="form-control" v-model="start_time"  id="starttime" >
          </div>

          <div class="form-group mt-4">
              <label for="date">End_time</label>
            <input type="date" class="form-control" v-model="end_time" id="endtime" >
          </div>

          <div class="form-group mt-4">
              <label for="description">Remarks</label>
              <textarea class="form-control" v-model="remarks" id="remarks"></textarea>
              </div>

          <button type="submit" class="btn btn-primary mt-4"  style="width: 340px; margin-left: 50px;">Update</button>
      </form>
    

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
        name: 'TasksView',
    components: {TopbarPage, SidebarPage},

        data() {
          return {
            
            tasks: [],

              id:'',
              due_date:'',
              status_id:'',
              name:'',
              description:'',
              status:'',

              start_time:'',
              end_time:'',
              remarks:'',



            options:[],


             token : localStorage.getItem('token')


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
      getTask(id){ 
       axios.gettask(id,this.token)
          .then(response=> {
             this.task = response.data.data;

             this.id = response.data[0].id;
             this.status_id = response.data[0].status_id;
             this.due_date = response.data[0].due_date;  
             this.name = response.data[0].name;   
             this.description = response.data[0].description; 
             this.status = response.data[0].status;   
             
             

          



          })
          .catch(error => {
            console.log(error);
          })
      },  

      //get all tasks    
        getTasks(){ 
          axios.gettasks(this.token)
          .then(response=> {
             this.tasks = response.data;
             console.log(response);
          })
          .catch(error => {
            console.log(error);
          })
        },

      //delete task method
      deleteTask(id) {
        axios.deletetask(id, this.token)
        .then(response => {
          console.log(response);
          // remove the deleted post from the posts array
          this.tasks = this.tasks.filter(task => task.id !== id);

          this.tasks = this.tasks.filter(i => i.id !== id);

        })
        .catch(error => {
          console.log(error);
        })
       },

      //update task method
      updateTask(id) {
          axios.updatetask({ id,
               name: this.name,
               description: this.description,
               due_date: this.due_date,
               status_id: this.status_id,

          }, this.token)


          .then(response => {
          console.log(response); 
         })
        .catch(error => {
          console.log(error);
        });
     },

     //take this task
     Taketask() {   
      axios. taketask({ 

        user_id: localStorage.getItem('user_id'),
             tasks_id: this.id,
             due_date: this.due_date,
             start_time: this.start_time,
             end_time: this.end_time,
             remarks: this.remarks,
             status_id: this.status_id,

          }, this.token)
          .then(response => {
          console.log(response); 
         })
        .catch(error => {
          console.log(error);
        });

     }

  }, 
  
  
        mounted() {
          //get all tasks on load
          this.getTasks();
          this. GetAllStatus();
          


        }
      
      }
      </script>
      
      <style>
      
      </style>