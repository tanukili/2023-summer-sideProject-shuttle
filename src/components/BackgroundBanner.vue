<script>
export default {
  props: ['bannerImg'],
};
</script>
<template>
  <div>
    <div
      class="bg-banner banner-mask position-absolute vw-100 z-n1"
      :style="bannerImg"
    ></div>
  </div>
</template>

<style>
.bg-banner {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  --position-top: 0px;
  /* 區塊間距 + 麵包屑 */
  top: calc(120px + 24px * 1.2 + 16px + var(--position-top));
}

.banner-mask {
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4));
    position: absolute;
  }
}
</style>
