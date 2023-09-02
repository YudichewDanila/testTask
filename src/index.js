import './style.scss'
import { createApp} from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";


createApp(App).use(router).use(store).use(Toast).mount('#app');
