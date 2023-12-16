<script>
import { mapState, mapActions } from 'pinia';
import useProductsStore from '../../stores/useProductsStore';
import useActivitiesStore from '../../stores/useActivitiesStore';
import useFavoriteStore from '../../stores/useFavoriteStore';
import BackgroundBanner from '../../components/BackgroundBanner.vue';
import ProductsNavs from '../../components/ProductsNavs.vue';
import FrontPagination from '../../components/FrontPagination.vue';

const imgBase = import.meta.env.VITE_IMG_BASE;

export default {
  data() {
    return {
      bannerImg: `background-image: url(${imgBase}/banner/banner-products.jpg)`,
    };
  },
  components: {
    BackgroundBanner,
    ProductsNavs,
    FrontPagination,
  },
  methods: {
    ...mapActions(useProductsStore, ['getProducts']),
    ...mapActions(useActivitiesStore, ['getActivities']),
    ...mapActions(useFavoriteStore, ['toggleFavorite', 'getFavorites']),
  },
  mounted() {
    // 進入時觸發
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1200);
    this.getProducts();
    this.getActivities();
    this.getFavorites();
  },
  computed: {
    ...mapState(useProductsStore, ['products', 'pagination']),
    ...mapState(useActivitiesStore, ['numActivities', 'unlimitedActivities']),
    ...mapState(useFavoriteStore, ['favorites']),
    imgBase() {
      return import.meta.env.VITE_IMG_BASE;
    },
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
            v-for="product in products"
            :key="product.id"
            :class="[
              products.indexOf(product) + 1 <= 9
                ? 'col-md-6 col-lg-4 gx-xxl-5'
                : 'col-md-6 col-lg-4 gx-xxl-5 d-lg-none',
            ]"
          >
            <div class="card h-100">
              <div class="card-mask position-relative">
                <img
                  :src="`${imgBase}${product.imageUrl}`"
                  :alt="`product${product.id}`"
                  class="rounded-top"
                  style="height: 240px"
                />
                <span
                  v-if="unlimitedActivities[product.state.promotion]"
                  class="badge badge-sale position-absolute start-0"
                  style="top: 24px"
                  >{{
                    unlimitedActivities[product.state.promotion].badge
                  }}</span
                >
                <span
                  v-else-if="numActivities[product.state.promotion]"
                  class="badge badge-sale bg-success position-absolute start-0"
                  style="top: 24px"
                  >{{ numActivities[product.state.promotion].badge }}</span
                >
                <a href="#" @click.prevent="toggleFavorite(product.id)">
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    :class="{
                      'icon-fill text-danger':
                        favorites.indexOf(product.id) !== -1,
                    }"
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
                    v-if="unlimitedActivities[product.state.promotion]"
                    class="fs-4 fw-bold text-danger"
                    >${{
                      product.origin_price *
                      unlimitedActivities[product.state.promotion].percentOff
                    }}</small
                  >
                  <small
                    :class="[
                      !unlimitedActivities[product.state.promotion]
                        ? 'fs-4 fw-bold text-black'
                        : 'fs-6 text-gray-400 text-decoration-line-through ms-2',
                    ]"
                    >${{ product.origin_price }}
                  </small>
                </div>
                <RouterLink
                  :to="`/product/${product.id}`"
                  class="btn btn-primary w-100 fs-md-7 fs-xl-6 mt-3"
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
