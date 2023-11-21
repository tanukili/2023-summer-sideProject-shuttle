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
      id: 0,
      nowCarts: { activeDiscount: '' },
    };
  },
  methods: {
    updateUserId(userId) {
      this.id = userId;
    },
    getCartsContent(cartsContent) {
      this.nowCarts = cartsContent;
    },
    handleLogout() {
      this.id = 0;
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
    <HeaderNavbar :id="id" @logout="handleLogout" />
  </header>
  <div>
    <RouterView
      @updateUserId="updateUserId"
      @cartsContent="getCartsContent"
      :nowCarts="nowCarts"
    />
  </div>
  <FooterNavbar />
</template>

<style></style>
