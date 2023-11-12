<script>
import ProductsNavs from '../../components/ProductsNavs.vue';
import FrontPagination from '../../components/FrontPagination.vue';

const hexApi = import.meta.env.VITE_HEX_API_PATH;
const apiPath = '2023shuttle';

export default {
  emits: ['updateUserId'], // 聲明事件避免錯誤
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  components: {
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
  },
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
  <div class="bg-banner product-banner"></div>
  <ProductsNavs></ProductsNavs>
  <div class="position-relative overflow-hidden">
    <!-- contnet -->
    <div class="block-spacing-sm container">
      <div class="mx-3 mx-md-0">
        <!-- top -->
        <div class="d-flex justify-content-between align-items-center mb-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
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
        <div class="row g-4">
          <div
            v-for="product in products"
            :key="product.id"
            :class="[
              (products.indexOf(product) + 1) % 8 <= 3
                ? 'col-md-6 col-lg-4'
                : 'col-md-6 col-lg-4 d-none d-md-block',
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
                  v-if="!product.state.promotion"
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
              <div
                class="card-footer d-flex flex-column flex-lg-row align-items-lg-end pt-4 pb-3"
              >
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
                <button
                  class="btn btn-primary text-white fs-md-7 fs-xl-6 ms-lg-auto mt-3"
                  style="button"
                >
                  立即購買
                </button>
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
