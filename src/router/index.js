import { createRouter ,createWebHistory,  } from "vue-router";
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import TasksView from '../views/TasksView.vue';
import UsersView from '../views/UsersTaskView.vue';

const router= createRouter({
    history:createWebHistory(),
    routes: [


{
    path: '/',
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true }
} ,

{
    path: '/tasks',
    name: 'tasks',
    component: TasksView,
    meta: { requiresAuth: true }
},

{
    path: '/usertask',
    name: 'usertask',
    component: UsersView,
    meta: { requiresAuth: true }
},

{
    path: '/login',
    name: 'login',
    component: LoginView
},

{
    path: '/register',
    name: 'register',
    component: RegisterView
}

    ]

});


        //navigation guard to check if the user is logged in and has a valid token
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const token = localStorage.getItem('token');
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
    if (requiresAuth && (!isLoggedIn || !token)) {
      // Redirect the user to the login page if they're not logged in or have no valid token
      next({ name: 'login' });
    } else {
      next();
    }
  });



export default router;