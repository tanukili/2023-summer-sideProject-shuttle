<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderNavbar from './components/HeaderNavbar.vue';
import FooterNavbar from './components/FooterNavbar.vue';
</script>

<template>
  <header>
    <HeaderNavbar/>
    <nav>
      <RouterLink to="/" class="mx-3">Home</RouterLink>
      <RouterLink to="/about" class="mx-3">產品列表</RouterLink>
      <RouterLink to="/carts" class="mx-3">購物車</RouterLink>
      <RouterLink to="/login" class="mx-3">登入</RouterLink>
      <RouterLink to="/howto" class="mx-3">認識手織</RouterLink>
      <RouterLink to="/contact" class="mx-3">聯絡我們</RouterLink>
      <RouterLink to="/news" class="mx-3">最新消息</RouterLink>
    </nav>

  </header>

  <RouterView />
  <FooterNavbar/>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
}
.mx-3 {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
