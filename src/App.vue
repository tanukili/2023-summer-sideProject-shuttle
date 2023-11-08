<script>
import { RouterView } from 'vue-router';
import AOS from 'aos';
import HeaderNavbar from './components/HeaderNavbar.vue';
import FooterNavbar from './components/FooterNavbar.vue';
import 'aos/dist/aos.css';

export default {
  components: {
    RouterView,
    HeaderNavbar,
    FooterNavbar,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // 進入時觸發
    AOS.init();
  },
};
</script>

<template>
  <header>
    <HeaderNavbar />
  </header>
  <div>
    <RouterView />
  </div>
  <FooterNavbar />
</template>

<style></style>
