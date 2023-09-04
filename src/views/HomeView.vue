<script></script>

<template>
  <!-- banner -->
  <div class="bg-banner">
    <div class="container">
      <div class="banner-content">
        <h1 class="fs-2 fw-bold text-white pb-3">
          一封真摯的邀請函<br />
          <span class="py-3 d-inline-block">
            給予手織
            <span class="select-icon align-bottom">
              <select
                class="form-select fs-5 fw-bold d-inline-block w-auto text-primary py-2"
                aria-label="Default select example"
              >
                <option selected>無經驗</option>
                <option value="beginner">初學者</option>
                <option value="amateur">愛好者</option>
                <option value="artist">創作者</option>
              </select>
            </span>
          </span>
          的你
        </h1>
        <button class="btn btn-secondary w-100 fs-5 py-3 mt-3" type="button">
          現在開啟
          <span class="material-symbols-outlined align-top ms-1">east</span>
        </button>
      </div>
    </div>
  </div>
  <!-- sale -->
  <div class="bg-cricle">
    <!-- sale-background -->
    <div
      class="bg-cricle-design bg-white border border-2
      border-dashed border-gray-500 d-none d-md-block"
      style="bottom: 2022px;"
    ></div>
    <!-- content -->
    <div class="block-spacing container position-md-absolute">
      <h2 class="title-style"><span>現正優惠</span></h2>
      <div class="row mt-5 pt-md-3">
        <div class="col-md-6">
          <div class="promotions left img-mask card text-white mb-3 mb-md-0">
            <img
              src="../assets/images/promotions01.jpg"
              class="card-img h-100"
              alt="promotions01"
            />
            <div
              class="card-img-overlay d-flex flex-column justify-content-between"
            >
              <div class="fw-bold">
                <h5 class="fs-3 mb-2">2023 夏季織心好友揪團趣</h5>
                <p class="card-text fs-4 lh-sm">兩人同行，現打 85 折</p>
              </div>
              <button class="btn btn-lg btn-white align-self-md-end" type="button">
                瞭解更多
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="promotions right img-mask card text-white mb-3 mb-md-4">
            <img
              src="../assets/images/promotions02.jpg"
              class="card-img h-100"
              alt="promotions02"
            />
            <div
              class="card-img-overlay d-flex flex-column justify-content-between"
            >
              <div class="fw-bold">
                <h5 class="fs-3 mb-2">秋季新色 課程預購中</h5>
                <p class="card-text fs-4 lh-sm">秋季課程改版，早鳥預購享優惠</p>
              </div>
              <button class="btn btn-lg btn-white align-self-md-end" type="button">
                瞭解更多
              </button>
            </div>
          </div>
          <div class="promotions right img-mask card text-white">
            <img
              src="../assets/images/promotions03.jpg"
              class="card-img h-100"
              alt="promotions03"
            />
            <div
              class="card-img-overlay d-flex flex-column justify-content-between"
            >
              <div class="fw-bold">
                <h5 class="fs-3 mb-2">新註冊會員 贈 50 元折價券</h5>
                <p class="card-text fs-4 lh-sm">新會員招募中，填寫推薦再加碼</p>
              </div>
              <button class="btn btn-lg btn-white align-self-md-end" type="button">
                瞭解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-banner {
  /* 加上半透明遮罩 */
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(../assets/images/banner.jpg);
  padding: 235px 0 240px 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
/* 可優化 */
.banner-content {
  max-width: 432px;
  margin-left: 120px;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
}
.promotions {
  height: 300px !important;
  @media (min-width: 768px) {
    &.right {
      height: 288px !important;
    }
    &.left {
      height: 600px !important;
    }
  }
}
</style>
