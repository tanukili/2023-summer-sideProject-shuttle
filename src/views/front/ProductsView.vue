<script>
import ProductsNavs from '../../components/ProductsNavs.vue';

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    ProductsNavs,
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
  <div class="bg-banner product-banner"></div>
  <ProductsNavs></ProductsNavs>
  <div class="position-relative overflow-hidden">
    <!-- contnet -->
    <div class="block-spacing-sm container">
      <div class="mx-3 mx-md-0">
        <!-- top -->
        <div class="d-flex justify-content-between align-items-center mb-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 fw-semibold">
              <li class="breadcrumb-item">
                <RouterLink to="/">首頁</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                購買課程
              </li>
            </ol>
          </nav>
          <div class="d-flex">
            <label for="filter-select" class="fs-8 flex-shrink-0 me-2"
              >排序</label
            >
            <div class="select-icon">
              <select
                class="form-select form-select-sm border-gray-200 pe-4"
                aria-label="form-select-sm"
                id="filter-select"
              >
                <option value="CtoE" selected>價格由低到高</option>
                <option value="EtoC">價格由低到高</option>
                <option value="popularity">人氣順</option>
                <option value="LtoS">課程時間長到短</option>
                <option value="StoL">課程時間短到長</option>
              </select>
            </div>
          </div>
        </div>
        <!-- list -->
        <div
          class="row g-4"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="col-md-6 col-lg-4">
            <div class="card rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product/product05.jpg"
                  alt="product05"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1 mb-md-3">
                <h3 class="card-title fs-5">一日綴織體驗</h3>
                <span class="badge bg-light">入門</span>
                <span class="badge bg-light">綴織</span>
                <span class="badge bg-light">一日</span>
                <span class="badge bg-light">入門</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-xl-row align-items-xl-end pb-3"
              >
                <small class="d-inline-block fs-5 text-deep mb-3 mb-xl-0"
                  >$850</small
                >
                <RouterLink
                  class="btn btn-primary fs-md-7 ms-xl-auto"
                  to="/product"
                >
                  購買課程
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product/product02.jpg"
                  alt="product02"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <span
                  class="badge bg-danger text-white fs-6 py-2 px-6 position-absolute start-0"
                  style="top: 24px"
                  data-aos="zoom-out-right"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  >早鳥優惠</span
                >
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1 mb-md-3">
                <h3 class="card-title fs-5">暖色羊毛圍巾</h3>
                <span class="badge bg-light">簡易織布機</span>
                <span class="badge bg-light">兩日</span>
                <span class="badge bg-light">秋冬</span>
                <span class="badge bg-light">Top 3</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-xl-row align-items-xl-end pb-3"
              >
                <small
                  class="d-flex align-items-end fs-5 text-danger mb-3 mb-xl-0"
                >
                  $1,800
                  <span
                    class="fs-6 text-gray-400 align-middle text-decoration-line-through ms-2"
                  >
                    $2,000</span
                  >
                </small>
                <RouterLink
                  class="btn btn-primary fs-md-7 ms-xl-auto"
                  to="/product"
                >
                  購買課程
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product/product03.jpg"
                  alt="product03"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1 mb-md-3">
                <h3 class="card-title fs-5">段染實驗營</h3>
                <span class="badge bg-light">進階</span>
                <span class="badge bg-light">輔助</span>
                <span class="badge bg-light">四日</span>
                <span class="badge bg-light">Top 3</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-xl-row align-items-xl-end pb-3"
              >
                <small class="d-inline-block fs-5 text-deep mb-3 mb-xl-0"
                  >$850</small
                >
                <RouterLink
                  class="btn btn-primary fs-md-7 ms-xl-auto"
                  to="/product"
                >
                  購買課程
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product/product01.jpg"
                  alt="product01"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1 mb-md-3">
                <h3 class="card-title fs-5">一日綴織體驗</h3>
                <span class="badge bg-light">入門</span>
                <span class="badge bg-light">綴織</span>
                <span class="badge bg-light">一日</span>
                <span class="badge bg-light">入門</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-xl-row align-items-xl-end pb-3"
              >
                <small class="d-inline-block fs-5 text-deep mb-3 mb-xl-0"
                  >$850</small
                >
                <RouterLink
                  class="btn btn-primary fs-md-7 ms-xl-auto"
                  to="/product"
                >
                  購買課程
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-none d-md-block">
            <div class="card rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product/product04.jpg"
                  alt="product04"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <span
                  class="badge bg-danger text-white fs-6 py-2 px-6 position-absolute start-0"
                  style="top: 24px"
                  data-aos="zoom-out-right"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  >早鳥優惠</span
                >
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1 mb-md-3">
                <h3 class="card-title fs-5">暖色羊毛圍巾</h3>
                <span class="badge bg-light">簡易織布機</span>
                <span class="badge bg-light">兩日</span>
                <span class="badge bg-light">秋冬</span>
                <span class="badge bg-light">Top 3</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-xl-row align-items-xl-end pb-3"
              >
                <small
                  class="d-flex align-items-end fs-5 text-danger mb-3 mb-xl-0"
                >
                  $1,800
                  <span
                    class="fs-6 text-gray-400 align-middle text-decoration-line-through ms-2"
                  >
                    $2,000</span
                  >
                </small>
                <RouterLink
                  class="btn btn-primary fs-md-7 ms-xl-auto"
                  to="/product"
                >
                  購買課程
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-none d-md-block">
            <div class="card rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product/product06.jpg"
                  alt="product06"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <span
                  class="badge bg-danger text-white fs-6 py-2 px-6 position-absolute start-0"
                  style="top: 24px"
                  data-aos="zoom-out-right"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  >早鳥優惠</span
                >
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1 mb-md-3">
                <h3 class="card-title fs-5">暖色羊毛圍巾</h3>
                <span class="badge bg-light">簡易織布機</span>
                <span class="badge bg-light">兩日</span>
                <span class="badge bg-light">秋冬</span>
                <span class="badge bg-light">Top 3</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-xl-row align-items-xl-end pb-3"
              >
                <small
                  class="d-flex align-items-end fs-5 text-danger mb-3 mb-xl-0"
                >
                  $1,800
                  <span
                    class="fs-6 text-gray-400 text-decoration-line-through ms-2"
                  >
                    $2,000</span
                  >
                </small>
                <RouterLink
                  class="btn btn-primary fs-md-7 ms-xl-auto"
                  to="/product"
                >
                  購買課程
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-none d-lg-block">
            <div class="card rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product/product07.jpg"
                  alt="product07"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <span
                  class="badge bg-danger text-white fs-6 py-2 px-6 position-absolute start-0"
                  style="top: 24px"
                  data-aos="zoom-out-right"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  >早鳥優惠</span
                >
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1 mb-md-3">
                <h3 class="card-title fs-5">暖色羊毛圍巾</h3>
                <span class="badge bg-light">簡易織布機</span>
                <span class="badge bg-light">兩日</span>
                <span class="badge bg-light">秋冬</span>
                <span class="badge bg-light">Top 3</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-xl-row align-items-xl-end pb-3"
              >
                <small
                  class="d-flex align-items-end fs-5 text-danger mb-3 mb-xl-0"
                >
                  $1,800
                  <span
                    class="fs-6 text-gray-400 text-decoration-line-through ms-2"
                  >
                    $2,000</span
                  >
                </small>
                <RouterLink
                  class="btn btn-primary fs-md-7 ms-xl-auto"
                  to="/product"
                >
                  購買課程
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-none d-lg-block">
            <div class="card rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product/product08.jpg"
                  alt="product08"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1 mb-md-3">
                <h3 class="card-title fs-5">暖色羊毛圍巾</h3>
                <span class="badge bg-light">簡易織布機</span>
                <span class="badge bg-light">兩日</span>
                <span class="badge bg-light">秋冬</span>
                <span class="badge bg-light">Top 3</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-xl-row align-items-xl-end pb-3"
              >
                <small class="d-inline-block fs-5 text-deep mb-3 mb-xl-0"
                  >$850</small
                >
                <RouterLink
                  class="btn btn-primary fs-md-7 ms-xl-auto"
                  to="/product"
                >
                  購買課程
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-none d-lg-block">
            <div class="card rounded-4 bg-white fw-bold lh-sm">
              <div class="img-mask position-relative">
                <img
                  src="../../assets/images/product/product02.jpg"
                  alt="product02"
                  class="rounded-top-4"
                  style="height: 240px"
                />
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1 mb-md-3">
                <h3 class="card-title fs-5">暖色羊毛圍巾</h3>
                <span class="badge bg-light">簡易織布機</span>
                <span class="badge bg-light">兩日</span>
                <span class="badge bg-light">秋冬</span>
                <span class="badge bg-light">Top 3</span>
              </div>
              <div
                class="card-footer d-flex flex-column flex-xl-row align-items-xl-end pb-3"
              >
                <small class="d-inline-block fs-5 text-deep mb-3 mb-xl-0"
                  >$850</small
                >
                <RouterLink
                  class="btn btn-primary fs-md-7 ms-xl-auto"
                  to="/product"
                >
                  購買課程
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <!-- pagination -->
        <nav class="mt-5">
          <ul
            class="pagination justify-content-center align-items-center lh-sm"
          >
            <li class="page-item me-1">
              <a
                class="page-link rounded-circle p-1"
                href="#/products"
                aria-label="Previous"
              >
                <span class="material-symbols-outlined"> chevron_left </span>
              </a>
            </li>
            <li class="page-item mx-1">
              <a class="page-link fs-6 rounded-circle active" href="#/products"
                >1</a
              >
            </li>
            <li class="page-item mx-1">
              <a class="page-link fs-6 rounded-circle" href="#/products">2</a>
            </li>
            <li class="page-item mx-1">
              <a class="page-link fs-6 rounded-circle" href="#/products">3</a>
            </li>
            <li class="page-item ms-1">
              <a
                class="page-link rounded-circle p-1"
                href="#/products"
                aria-label="Next"
              >
                <span class="material-symbols-outlined"> chevron_right </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- background-style -->
    <div
      class="bg-position bg-white border-dashed rounded-circle d-none d-md-block animation-rotate"
      style="width: 1400px; height: 1400px; top: -900px; left: -20%"
    ></div>
    <div
      class="bg-position bg-secondary rounded-circle"
      style="width: 1400px; height: 1400px; bottom: -900px; right: -20%"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="1000"
    ></div>
  </div>
</template>

<style>
.product-banner {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),
    url(../../assets/images/banner/banner-products.jpg);
  height: 180px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 768px) {
    height: 240px;
  }
  @media (min-width: 992px) {
    height: 300px;
  }
}
</style>