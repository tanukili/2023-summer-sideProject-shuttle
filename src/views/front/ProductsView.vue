<template>
  <BackgroundBanner :bannerImg="bannerImg"></BackgroundBanner>
  <ProductsNavs></ProductsNavs>
  <div class="position-relative overflow-hidden">
    <!-- contnet -->
    <div class="block-spacing-sm container">
      <div class="mx-3 mx-md-0">
        <!-- top -->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">購買課程</li>
          </ol>
        </nav>
        <div class="d-flex align-items-center mb-2">
          <label for="filter-select" class="lh-lg fw-semibold flex-shrink-0 me-2 ms-auto">
            排序
          </label>
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
            <router-link :to="`product/${product.id}`" class="card h-100">
              <div class="card-mask position-relative">
                <img
                  :src="product.imageUrl"
                  :alt="`product${product.id}`"
                  class="rounded-top"
                  style="height: 240px"
                />
                <span
                  v-if="unlimitedActivities[product.state.promotion]"
                  class="badge badge-sale position-absolute"
                  style="top: 24px; left: -4px"
                >
                  {{ unlimitedActivities[product.state.promotion].badge }}
                </span>
                <span
                  v-else-if="numActivities[product.state.promotion]"
                  class="badge badge-sale bg-success position-absolute"
                  style="top: 24px; left: -4px"
                >
                  {{ numActivities[product.state.promotion].badge }}
                </span>
                <a
                  href="#"
                  @click.prevent="toggleFavorite(product.id)"
                  :title="[favorites.indexOf(product.id) !== -1 ? '移除收藏' : '加入收藏']"
                >
                  <span
                    class="icon-favorite material-symbols-outlined position-absolute"
                    :class="{
                      'icon-fill text-danger': favorites.indexOf(product.id) !== -1,
                    }"
                    style="top: 24px; right: 24px"
                  >
                    favorite
                  </span>
                </a>
              </div>
              <div class="card-body flex-grow-1 pb-3">
                <h3 class="card-title fs-5">{{ product.title }}</h3>
                <span
                  class="badge bg-light me-2"
                  v-for="tag in product.info.tags"
                  :key="product.info.tags.indexOf(tag)"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="card-footer pb-3">
                <div class="d-flex align-items-center">
                  <small
                    v-if="unlimitedActivities[product.state.promotion]"
                    class="fs-4 fw-bold text-danger"
                  >
                    ${{
                      product.origin_price * unlimitedActivities[product.state.promotion].percentOff
                    }}
                  </small>
                  <small
                    :class="[
                      !unlimitedActivities[product.state.promotion]
                        ? 'fs-4 fw-bold text-black'
                        : 'fs-6 text-gray-400 text-decoration-line-through ms-2',
                    ]"
                  >
                    ${{ product.origin_price }}
                  </small>
                </div>
                <RouterLink
                  :to="`/product/${product.id}`"
                  class="btn btn-primary w-100 fs-md-7 fs-xl-6 mt-3"
                >
                  前往購買
                </RouterLink>
              </div>
            </router-link>
          </div>
        </div>
        <!-- pagination -->
        <FrontPagination :pages="pagination" @updatePage="getProducts"></FrontPagination>
      </div>
    </div>
    <!-- background-style -->
    <div
      class="bg-position bg-white border-dashed rounded-circle animation-rotate z-n1"
      style="width: 100vw; height: 100vw; top: -50vw; left: -20vw"
    ></div>
    <div
      class="bg-position bg-primary-light rounded-circle z-n2"
      style="width: 100vw; height: 100vw; bottom: -50vw; right: -20vw"
    ></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import useProductsStore from '@/stores/useProductsStore';
import useActivitiesStore from '@/stores/useActivitiesStore';
import useFavoriteStore from '@/stores/useFavoriteStore';

import BackgroundBanner from '@/components/BackgroundBanner.vue';
import ProductsNavs from '@/components/ProductsNavs.vue';
import FrontPagination from '@/components/FrontPagination.vue';

export default {
  data() {
    return {
      bannerImg: 'banner/banner-products.png',
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
    this.getProducts();
    this.getActivities();
    this.getFavorites();
  },
  computed: {
    ...mapState(useProductsStore, ['products', 'pagination']),
    ...mapState(useActivitiesStore, ['numActivities', 'unlimitedActivities']),
    ...mapState(useFavoriteStore, ['favorites']),
  },
};
</script>

<style></style>
