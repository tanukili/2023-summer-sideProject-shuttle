<script>
export default {
  props: ['bannerImg'],
};
</script>
<template>
  <div>
    <div class="bg-banner banner-mask w-100 z-n1" :style="bannerImg"></div>
  </div>
</template>

<style>
.bg-banner {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
}

.banner-mask::before {
  content: '';
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  position: absolute;
}
</style>
