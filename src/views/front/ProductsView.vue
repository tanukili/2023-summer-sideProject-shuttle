<script>
import BackgroundBanner from '../../components/BackgroundBanner.vue';
import ProductsNavs from '../../components/ProductsNavs.vue';
import FrontPagination from '../../components/FrontPagination.vue';

const hexApi = import.meta.env.VITE_HEX_API_PATH;
const apiPath = '2023shuttle';

export default {
  emits: ['updateUserId'], // 聲明事件避免錯誤
  data() {
    return {
      bannerImg: 'background-image: url(/banner/banner-products.jpg)',
      products: [],
      pagination: {},
      test: this.counter,
    };
  },
  components: {
    BackgroundBanner,
    ProductsNavs,
    FrontPagination,
  },
  methods: {
    getProducts(page = 1) {
      this.axios
        .get(`${hexApi}api/${apiPath}/products?page=${page}`)
        .then((res) => {
          console.log(res.data);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
  mounted() {
    // 進入時觸發
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1200);
    this.getProducts();
    console.log(this.counter);
  },
  computed: {},
};
</script>

<template>
  <!-- <LoadingOverlay v-model:active="isLoading">
    <div class="loadingio-spinner-pulse-1iwbsd99pb">
      <div class="ldio-dcvhkke5k">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingOverlay> -->
  <!-- <div class="bg-banner product-banner"></div> -->
  <BackgroundBanner
    :bannerImg="bannerImg"
    class="product-banner"
  ></BackgroundBanner>
  <ProductsNavs></ProductsNavs>
  <div class="position-relative overflow-hidden">
    <!-- contnet -->
    <div class="block-spacing-sm container">
      <div class="mx-3 mx-md-0">
        <!-- top -->
        <div class="d-flex justify-content-between align-items-center mb-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <RouterLink to="/">首頁</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                購買課程
              </li>
            </ol>
          </nav>
          <div class="d-flex align-items-center">
            <label
              for="filter-select"
              class="lh-lg fw-semibold flex-shrink-0 me-2"
              >排序</label
            >
            <div class="select-icon">
              <select
                class="form-select fs-7 border-secondary"
                aria-label="form-select"
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
        <div class="row gx-3 gy-4">
          <div
            class="col-md-6 col-lg-4 col-xxl-3"
            v-for="product in products"
            :key="product.id"
            :class="[
              (products.indexOf(product) + 1) % 8 <= 3
                ? 'col-md-6 col-lg-4 col-xxl-3'
                : 'col-md-6 col-lg-4 col-xxl-3 d-none d-md-block',
            ]"
          >
            <div class="card">
              <div class="card-mask position-relative">
                <img
                  :src="product.imageUrl"
                  :alt="`product${product.id}`"
                  class="rounded-top"
                  style="height: 240px"
                />
                <span
                  v-if="product.state.promotion"
                  class="badge badge-sale position-absolute start-0"
                  style="top: 24px"
                  >優惠中</span
                >
                <a href="#">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    style="top: 24px; right: 24px"
                    >favorite</span
                  >
                </a>
              </div>
              <div class="card-body flex-grow-1 pb-5">
                <h3 class="card-title fs-5">{{ product.title }}</h3>
                <span
                  class="badge bg-light me-2"
                  v-for="tag in product.info.tags"
                  :key="product.info.tags.indexOf(tag)"
                  >{{ tag }}</span
                >
              </div>
              <div class="card-footer pb-3">
                <div class="d-flex align-items-center">
                  <small
                    v-if="product.price !== product.origin_price"
                    class="fs-4 fw-bold text-danger"
                    >${{ product.price }}</small
                  >
                  <small
                    :class="[
                      product.price === product.origin_price
                        ? 'fs-4 fw-bold text-black'
                        : 'fs-6 text-gray-400 text-decoration-line-through ms-2',
                    ]"
                    >${{ product.origin_price }}
                  </small>
                </div>
                <RouterLink
                  :to="`/product/${product.id}`"
                  class="btn btn-primary w-100 fs-md-7 fs-xl-6 mt-3"
                  style="button"
                >
                  購買課程
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <!-- pagination -->
        <FrontPagination
          :pages="pagination"
          @updatePage="getProducts"
        ></FrontPagination>
      </div>
    </div>
    <!-- background-style -->
    <div
      class="bg-position bg-white border-dashed rounded-circle d-none d-md-block animation-rotate z-n1"
      style="width: 90vw; height: 90vw; top: -60vw; left: -20vw"
    ></div>
    <div
      class="bg-position bg-primary-light rounded-circle z-n2"
      style="width: 100vw; height: 100vw; bottom: -65vw; right: -20vw"
    ></div>
  </div>
</template>

<style>
.product-banner > * {
  position: static;
}
.product-banner > *,
.product-banner > *::before {
  height: 180px;
}

@media (min-width: 768px) {
  .product-banner > *,
  .product-banner > *::before {
    height: 240px;
  }
}

@media (min-width: 992px) {
  .product-banner > *,
  .product-banner > *::before {
    height: 300px;
  }
}
</style>
