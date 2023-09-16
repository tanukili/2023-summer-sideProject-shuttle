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
    <h1>登入頁面</h1>
    <RouterLink to="/member">登入</RouterLink>
    <RouterLink to="/signup">註冊</RouterLink>
    <RouterLink to="/admin-login">後台登入</RouterLink>
  </div>
</template>
