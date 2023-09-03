<script>
</script>

<template>
  <div class="bg-banner">
    <div class="container">
      <div class="banner-content">
        <h1 class="fs-2 fw-bold text-white pb-3">
          一封真摯的邀請函<br/>
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
.banner-content {
  max-width: 432px;
  margin-left: 120px;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
}
</style>
