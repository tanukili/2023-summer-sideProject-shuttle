<script>

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    // 進入時觸發
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
  },
};
</script>

<template>
  <LoadingOverlay v-model:active="isLoading">
    <div class="loadingio-spinner-pulse-1iwbsd99pb">
      <div class="ldio-dcvhkke5k">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingOverlay>
  <div class="about">
    <h1>註冊頁面</h1>
  </div>
</template>
