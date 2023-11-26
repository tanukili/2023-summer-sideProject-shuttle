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
    return {
      nowCarts: { activeDiscount: '' },
    };
  },
  methods: {
    getCartsContent(cartsContent) {
      this.nowCarts = cartsContent;
    },
  },
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
    <RouterView @cartsContent="getCartsContent" :nowCarts="nowCarts" />
  </div>
  <FooterNavbar />
</template>

<style></style>
