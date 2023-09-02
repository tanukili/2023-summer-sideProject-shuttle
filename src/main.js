import { createApp } from 'vue';
import { createPinia } from 'pinia';

// 注意 import 順序
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import 'bootstrap'; // 從nodeModule中載入Bootstrap
import App from './App.vue'; // 有另外設定變數，所以要放在最後

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.mount('#app');
