import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import {createPinia} from "pinia"

import  './axios'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const pinia = createPinia();
const app=createApp(App)
  app.use(router);
  app.use(pinia);

app.mount('#app')