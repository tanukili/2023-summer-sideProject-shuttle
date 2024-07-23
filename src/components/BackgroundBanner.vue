<template>
  <div class="full-banner">
    <img :src="bannerImg" alt="banner" class="w-100 h-100" />
  </div>
</template>

<script>
export default {
  props: ['bannerImg'],
};
</script>

<style lang="scss">
.full-banner {
  position: relative;
  img {
    object-fit: cover;
    object-position: center;
  }
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    position: absolute;
  }
  height: 160px;
  @media (min-width: 768px) {
    height: 220px;
  }
  @media (min-width: 992px) {
    height: 280px;
  }
  @media (min-width: 1200px) {
    height: 310px;
  }
  @media (min-width: 1400px) {
    height: 340px;
  }
}
</style>
