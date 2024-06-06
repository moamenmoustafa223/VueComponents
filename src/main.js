import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import '@fortawesome/fontawesome-free/css/all.css';

import BootstrapVue3 from 'bootstrap-vue-3';
createApp(App)
.use(BootstrapVue3)
.mount('#app')