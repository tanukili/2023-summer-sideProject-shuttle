<script setup>
import { RouterView } from 'vue-router';
import HeaderNavbar from './components/HeaderNavbar.vue';
import FooterNavbar from './components/FooterNavbar.vue';
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
