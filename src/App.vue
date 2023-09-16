<script>
import { RouterView } from 'vue-router';
import AOS from 'aos';
import HeaderNavbar from './components/HeaderNavbar.vue';
import FooterNavbar from './components/FooterNavbar.vue';
import 'aos/dist/aos.css';

export default {
  // data() {
  //   return {
  //     isLoading: false,
  //   };
  // },
  components: {
    RouterView,
    HeaderNavbar,
    FooterNavbar,
  },
  mounted() {
    // 進入時觸發
    AOS.init();
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1200);
  },
};
</script>

<template>
  <!-- <LoadingOverlay v-model:active="isLoading">
    <div class="loadingio-spinner-pulse-1iwbsd99pb">
      <div class="ldio-dcvhkke5k">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingOverlay> -->
  <header>
    <HeaderNavbar />
  </header>
  <div>
    <RouterView />
  </div>
  <FooterNavbar />
</template>

<style>
/* 要在 App.vue 載入 all.scss (參考葉子助教 : https://tzuhui.io/2019/06/20/Bootstrap/vue-cli-use-bootstrap/) */
@import "./assets/all.scss";

@keyframes ldio-dcvhkke5k-1 {
  0% { top: 36px; height: 128px }
  50% { top: 60px; height: 80px }
  100% { top: 60px; height: 80px }
}
@keyframes ldio-dcvhkke5k-2 {
  0% { top: 41.99999999999999px; height: 116.00000000000001px }
  50% { top: 60px; height: 80px }
  100% { top: 60px; height: 80px }
}
@keyframes ldio-dcvhkke5k-3 {
  0% { top: 48px; height: 104px }
  50% { top: 60px; height: 80px }
  100% { top: 60px; height: 80px }
}
.ldio-dcvhkke5k div { position: absolute; width: 20px }.ldio-dcvhkke5k div:nth-child(1) {
  left: 35px;
  background: #d2d2cb;
  animation: ldio-dcvhkke5k-1 1.1764705882352942s cubic-bezier(0,0.5,0.5,1) infinite;
  animation-delay: -0.23529411764705885s
}
.ldio-dcvhkke5k div:nth-child(2) {
  left: 85px;
  background: #4d695d;
  animation: ldio-dcvhkke5k-2 1.1764705882352942s cubic-bezier(0,0.5,0.5,1) infinite;
  animation-delay: -0.11764705882352942s
}
.ldio-dcvhkke5k div:nth-child(3) {
  left: 135px;
  background: #83a79d;
  animation: ldio-dcvhkke5k-3 1.1764705882352942s cubic-bezier(0,0.5,0.5,1) infinite;
  animation-delay: undefineds
}

.loadingio-spinner-pulse-1iwbsd99pb {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-dcvhkke5k {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-dcvhkke5k div { box-sizing: content-box; }
</style>
