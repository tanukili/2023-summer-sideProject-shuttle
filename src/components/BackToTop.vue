<script>
export default {
  data() {
    return {
      // 初始化
      height: 0,
    };
  },
  methods: {
    goToTop() {
      // document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    updateScroll() {
      this.height = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>
<template>
  <div
    class="toTop fixed-bottom bg-white p-2 rounded-circle shadow"
    style="width: 56px"
    @click.prevent="goToTop"
    :class="{ 'd-none': height < 500 }"
  >
    <span class="material-symbols-outlined fs-2 fw-semibold">stat_2</span>
  </div>
</template>

<style>
.toTop {
  bottom: 24px;
  right: 24px;
  left: auto;
}
</style>
