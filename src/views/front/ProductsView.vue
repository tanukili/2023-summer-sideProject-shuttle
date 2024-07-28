<template>
  <BackgroundBanner :bannerImg="bannerImg"></BackgroundBanner>
  <!-- contnet -->
  <div class="bg-white">
    <div class="block-spacing-sm container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb fs-8 fs-lg-7">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">購買課程</li>
        </ol>
      </nav>
      <h2 class="title fs-3 fs-lg-2 mb-md-5">
        <span class="border-primary pb-2 pb-lg-3">課程一覽</span>
      </h2>
      <div class="d-flex align-items-center mb-2">
        <label for="filter-select" class="lh-lg fw-semibold flex-shrink-0 me-2 ms-auto">排序</label>
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
      <div class="row">
        <div class="sidebar-sticky col-md-2 col-lg-3 col-xl-2 mb-4 mb-md-0 fs-8 fs-lg-7">
          <nav class="nav nav-underline flex-md-column bg-primary-light rounded-1 p-3 p-lg-4">
            <a
              v-for="(name, index) in categories"
              :key="index"
              class="flex-fill text-center nav-link"
              :class="{ active: nowCategory === index }"
              href="#"
              @click.prevent="nowCategory = index"
            >
              {{ name }}
            </a>
          </nav>
        </div>
        <!-- list -->
        <div class="col">
          <div class="row g-3 gx-xxl-4 px-4 px-md-0">
            <div v-for="product in products" :key="product.id" class="col-md-6 col-xl-4">
              <router-link :to="`product/${product.id}`" class="card h-100">
                <div class="card-mask position-relative">
                  <img
                    :src="product.imageUrl"
                    :alt="`product${product.id}`"
                    class="rounded-top"
                    style="height: 200px"
                  />
                  <span
                    class="badge text-white position-absolute fs-7 px-6 py-2"
                    :class="[numActivities[product.state.promotion] ? 'bg-warning' : 'bg-success']"
                    style="top: 16px; left: -4px"
                  >
                    {{ activies[product.state.promotion]?.badge }}
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
                      style="top: 12px; right: 12px"
                    >
                      favorite
                    </span>
                  </a>
                </div>
                <div class="card-body flex-grow-1 pb-3">
                  <h3 class="card-title fs-5">{{ product.title }}</h3>
                  <span
                    class="badge bg-light me-1 mb-1"
                    v-for="tag in product.info.tags"
                    :key="product.info.tags.indexOf(tag)"
                  >
                    {{ tag }}
                  </span>
                </div>
                <div class="card-footer pb-3 pt-0">
                  <div class="d-flex align-items-center">
                    <small
                      v-if="unlimitedActivities[product.state.promotion]"
                      class="fs-4 fw-bold text-danger"
                    >
                      ${{
                        product.origin_price *
                        unlimitedActivities[product.state.promotion].percentOff
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
                    class="btn btn-primary w-100 fs-md-7 mt-3"
                  >
                    前往購買
                  </RouterLink>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- pagination -->
      <FrontPagination :pages="pagination" @updatePage="getProducts"></FrontPagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import useProductsStore from '@/stores/useProductsStore';
import useActivitiesStore from '@/stores/useActivitiesStore';
import useFavoriteStore from '@/stores/useFavoriteStore';

import BackgroundBanner from '@/components/BackgroundBanner.vue';
import FrontPagination from '@/components/FrontPagination.vue';

export default {
  components: {
    BackgroundBanner,
    FrontPagination,
  },
  data() {
    return {
      bannerImg: 'banner/banner-products.png',
      categories: ['全部課程', '一日體驗', '初階課程', '輔助課程'],
      nowCategory: 0,
    };
  },
  computed: {
    ...mapState(useProductsStore, ['products', 'pagination']),
    ...mapState(useActivitiesStore, ['numActivities', 'unlimitedActivities']),
    ...mapState(useFavoriteStore, ['favorites']),
    activies() {
      return { ...this.numActivities, ...this.unlimitedActivities };
    },
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
};
</script>

<style lang="scss"></style>
