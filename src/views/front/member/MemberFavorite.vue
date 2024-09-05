<template>
  <div class="bg-white p-7 py-md-5 px-md-4 rounded mt-3 mt-md-0">
    <h2 class="title fs-4 text-primary mb-4">
      <span class="border-primary">我的收藏</span>
    </h2>
    <!-- forEach -->
    <div class="row g-3">
      <div class="col-md-6 col-xl-4" v-for="favorite in favoritesList" :key="favorite.id">
        <div
          class="card d-flex flex-column h-100 bg-white border-dashed border-secondary rounded-2"
        >
          <div class="mb-2 mb-md-0">
            <img
              :src="favorite.imageUrl"
              class="card-mask img-fluid rounded-top-2"
              :alt="favorite.title"
              style="height: 180px"
            />
          </div>
          <div class="card-body d-flex flex-column justify-content-between h-100">
            <h2 class="card-title fs-6 mb-2 text-center">
              {{ favorite.title }}
            </h2>
            <ul class="list-group list-group-flush flex-grow-1">
              <li class="list-group-item py-1 px-0 bg-white border-light">
                <span class="fs-8">
                  剩餘名額：
                  {{ favorite.info.capacity - favorite.info.studentNum }}
                  位
                </span>
              </li>
              <li
                class="list-group-item py-1 px-0 bg-white border-light"
                v-if="favorite.promotionName"
              >
                <span class="fs-8">
                  使用優惠：
                  {{ favorite.promotionName ? favorite.promotionName : '無' }}
                </span>
              </li>
              <li class="list-group-item py-1 px-0 bg-white border-light">
                <div class="fs-8">
                  售價：
                  <span
                    :class="{
                      'text-danger': favorite.price !== favorite.origin_price,
                    }"
                  >
                    NT$ {{ favorite.price }}
                  </span>
                  <span
                    v-if="favorite.price !== favorite.origin_price"
                    :class="{
                      'text-decoration-line-through  text-gray-200 ms-2':
                        favorite.price !== favorite.origin_price,
                    }"
                  >
                    NT$ {{ favorite.origin_price }}
                  </span>
                </div>
              </li>
            </ul>
            <div class="d-flex align-items-center mt-3">
              <a
                class="align-self-end"
                href="#"
                title="移除收藏"
                @click.prevent="deleteFavorite(favoritesObj[favorite.id])"
              >
                <span class="material-symbols-outlined icon-fill fs-5 text-muted">
                  delete_forever
                </span>
              </a>
              <RouterLink
                class="text-decoration-underline d-inline-block fs-8 fs-lg-7 ms-auto"
                :to="`/product/${favorite.id}`"
                title="前往課程頁面"
              >
                前往購買
                <span class="icon-ms-0 icon-e icon-east"></span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BackToTop />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import useActivitiesStore from '@/stores/useActivitiesStore';
import useFavoriteStore from '@/stores/useFavoriteStore';
import useProductsStore from '@/stores/useProductsStore';
import BackToTop from '@/components/BackToTop.vue';

export default {
  components: { BackToTop },
  methods: {
    ...mapActions(useActivitiesStore, ['getActivities']),
    ...mapActions(useFavoriteStore, ['deleteFavorite', 'getFavorites']),
    ...mapActions(useProductsStore, ['getAllProducts', 'getProduct']),
  },
  mounted() {
    this.getActivities();
    this.getAllProducts();
    this.getFavorites();
  },
  computed: {
    ...mapState(useActivitiesStore, ['unlimitedActivities', 'numActivities']),
    ...mapState(useFavoriteStore, ['favorites', 'favoritesObj']),
    ...mapState(useProductsStore, ['products', 'productPromotion']),
    favoritesList() {
      const arr = [];
      if (this.favorites) {
        this.favorites.forEach((ele) => {
          this.products.forEach((e) => {
            if (ele === e.id) {
              const str = e.state.promotion;
              if (this.unlimitedActivities[str]) {
                e.promotionName = this.unlimitedActivities[str].title;
              }
              if (this.numActivities[str]) {
                e.promotionName = this.numActivities[str].title;
              }
              arr.push(e);
            }
          });
        });
      }
      return arr;
    },
  },
};
</script>

<style lang="scss">
.icon-ms-0::after {
  margin-left: 0px;
}
</style>
