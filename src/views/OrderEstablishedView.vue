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
  <div class="bg-white">
    <div class="block-spacing-sm container">
      <nav aria-label="breadcrumb" class="mb-3">
        <ol class="breadcrumb mb-0 fw-semibold">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/products">購買課程</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">購物車</li>
        </ol>
      </nav>
      <!-- 訂單進度 -->
      <div class="w-100 w-md-75 d-flex flex-column mx-auto my-5">
        <ol class="d-flex justify-content-around ps-0">
          <li>訂單確認</li>
          <li>填寫資料</li>
          <li>訂單完成</li>
        </ol>
        <div class="progress border-base border-secondary">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 100.5%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <!-- 訂單內容 -->
      <div class="row justify-content-center">
        <div class="modal-body text-center fs-4 fs-md-3 py-3">
          <span
            class="material-symbols-outlined icon-semibold fs-3 align-middle lh-lg me-2 text-success"
          >
            task_alt </span
          >訂單已成立
        </div>
        <div class="col-6 mt-5">
          <div class="bg-secondary px-5 py-5">
            <h4 class="text-center pb-4 mb-3">
              <span class="border-bottom-base border-light pb-2"
                >訂單資訊</span
              >
            </h4>
            <ul class="list-group list-group-flush fs-8 pt-2 pb-4">
                <li class="list-group-item border-0 bg-secondary fs-6">
                  <span class="fw-bold">訂單成立日期</span>&emsp;2023.08.19
                </li>
                <li class="list-group-item border-0 bg-secondary fs-6">
                  <span class="fw-bold">付款狀態</span>&emsp;未付款
                </li>
                <li class="list-group-item border-0 bg-secondary fs-6">
                  <span class="fw-bold">付款方式</span>&emsp;信用卡
                </li>
                <li class="list-group-item border-0 bg-secondary fs-6">
                  <span class="fw-bold">應付金額</span>&emsp;NT$ 6,395
                </li>
                <li class="list-group-item border-0 bg-secondary fs-6">
                  <span class="fw-bold">訂單編號</span>&emsp;ABCD0230819
                </li>
                <li class="list-group-item border-0 bg-secondary fs-6">
                  <span class="fw-bold">姓名</span>&emsp;陳曉明
                </li>
                <li class="list-group-item border-0 bg-secondary fs-6">
                  <span class="fw-bold">手機</span>&emsp;0912345678
                </li>
                <li class="list-group-item border-0 bg-secondary fs-6">
                  <span class="fw-bold">信箱</span>&emsp;email@mail.com
                </li>
                <li class="list-group-item border-0 bg-secondary fs-6">
                  <span class="fw-bold">備註</span>&emsp;無
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
