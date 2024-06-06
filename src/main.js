import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Button from './components/UI/Button.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import BootstrapVue3 from 'bootstrap-vue-3';
createApp(App)
.use(BootstrapVue3)
.mount('#app')