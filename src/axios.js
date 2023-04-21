import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },

});

apiClient.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

// Get the token from local storage

export default {

  //user endpoints


  register(postData) {
    return apiClient.post(`/register`, postData, {
      })
      .then(response => {
        return response.data;
      });
    
  },

  ulogin(postData) {
    return apiClient.post(`/login`, postData, {
      })
      .then(response => {
        return response.data;
      });
    
  },


  //status
  addstatus(postData, token) {
    return apiClient.post('/status', postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data;
    });
  },

  getstatus(token) {
    return apiClient.get('/status',  {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data;
    });
  },





//tasks endpoints

  addtask(postData, token) {
    return apiClient.post('/tasks', postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data;
    });
  },


  gettasks(token) {
    return apiClient.get('/tasks', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    } )
      .then(response => {
        return response.data;
      });
  },

  gettask(id, token) {
    return apiClient.get(`/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  deletetask(id, token) {
    return apiClient.delete(`/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  updatetask(id, updateData, token) {
        return apiClient.put(`/tasks/${id}`, updateData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          return response.data;
        });
  },









//usertasks endpoints   
getusertasks(token) {
    return apiClient.get('/user_tasks ', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getusertask(id, token) {
    return apiClient.get(`/user_tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  deleteusertask(id, token) {
    return apiClient.delete(`/user_tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  updateusertask(id, updateData, token) {
        return apiClient.put(`/user_tasks/${id}`, updateData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          return response.data;
        });
  },

  //method to take a  task 
  taketask(postData, token) {
    return apiClient.post('/user_tasks', postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data;
    });
  },



  

};
