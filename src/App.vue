<script>
import { RouterView } from 'vue-router';
import AOS from 'aos';
import HeaderNavbar from './components/HeaderNavbar.vue';
import FooterNavbar from './components/FooterNavbar.vue';
import 'aos/dist/aos.css';

export default {
  components: {
    RouterView, HeaderNavbar, FooterNavbar,
  },
  mounted() {
    AOS.init();
  },
};
</script>

<template>
  <header>
    <HeaderNavbar/>
  </header>
  <div>
    <RouterView />
  </div>
  <FooterNavbar/>
</template>

<style>
/* 要在 App.vue 載入 all.scss (參考葉子助教 : https://tzuhui.io/2019/06/20/Bootstrap/vue-cli-use-bootstrap/) */
@import "./assets/all.scss";
</style>
