<script>
import { mapState, mapActions } from 'pinia';
import useActivitiesStore from '../../../stores/useActivitiesStore';
import useFavoriteStore from '../../../stores/useFavoriteStore';
import useProductsStore from '../../../stores/useProductsStore';

export default {
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
    imgBase() {
      return import.meta.env.VITE_IMG_BASE;
    },
  },
};
</script>

<template>
  <div class="bg-white p-4 pb-5 rounded">
    <h2 class="title fs-4 text-primary mb-4">
      <span class="border-primary">我的收藏</span>
    </h2>
    <!-- forEach -->
    <div class="row g-3">
      <div
        class="col-md-6 col-xl-4"
        v-for="favorite in favoritesList"
        :key="favorite.id"
      >
        <div
          class="card d-flex flex-column h-100 bg-white border-dashed border-secondary rounded-2"
        >
          <div class="mb-3 mb-md-0">
            <img
              :src="`${imgBase}${favorite.imageUrl}`"
              class="card-mask img-fluid rounded-top-2 h-100"
              :alt="favorite.title"
            />
          </div>
          <div
            class="card-body d-flex flex-column justify-content-between h-100"
          >
            <h2 class="card-title fs-6 mb-2 text-center">
              {{ favorite.title }}
            </h2>
            <ul class="list-group list-group-flush">
              <!-- <li class="list-group-item py-1 px-0 border-light">
                    <span class="">日期</span>&emsp;
                    <span v-for="date in favorite.info.calssDates" :key="date">
                      {{
                        favorite.calssDates.indexOf(date) ? ' ; ' + date : date
                      }}
                    </span>
                  </li>
                  <li class="list-group-item py-1 px-0 bg-white border-light">
                    <span class="">時間</span>&emsp;
                    {{
                      `${favorite.courseTime[0]} ~ ${favorite.courseTime[1]}`
                    }}
                  </li> -->
              <li class="list-group-item py-1 px-0 bg-white border-light">
                <span class="fs-8"
                  >剩餘名額：
                  {{ favorite.info.capacity - favorite.info.studentNum }}
                  位</span
                >
              </li>
              <li
                class="list-group-item py-1 px-0 bg-white border-light"
                v-if="favorite.promotionName"
              >
                <span class="fs-8"
                  >優惠：
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
                    >NT$ {{ favorite.price }}</span
                  >
                  <span
                    v-if="favorite.price !== favorite.origin_price"
                    :class="{
                      'text-decoration-line-through  text-gray-200 ms-2':
                        favorite.price !== favorite.origin_price,
                    }"
                    >NT$ {{ favorite.origin_price }}</span
                  >
                </div>
              </li>
            </ul>
            <a
              class="align-self-end"
              href="#"
              @click.prevent="deleteFavorite(favoritesObj[favorite.id])"
            >
              <span class="material-symbols-outlined icon-fill fs-5">
                delete_forever
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
