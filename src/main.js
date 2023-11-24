// import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/all.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

// 注意 import 順序
import axios from 'axios';
import VueAxios from 'vue-axios';
// VeeValidate 元件與功能
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules'; // VeeValidate寫好的驗證規則
import { localize, setLocale } from '@vee-validate/i18n'; // VeeValidate 多國語系
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json'; // VeeValidate 繁體中文語系檔

import VueSweetalert2 from 'vue-sweetalert2';

import router from './router';

import 'bootstrap'; // 從nodeModule中載入Bootstrap

import App from './App.vue'; // 有另外設定變數，所以要放在最後

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTw }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(VueSweetalert2);

// 掛載元件
app.component('LoadingOverlay', Loading); // loading
app.component('VField', Field); // VeeValidate
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
