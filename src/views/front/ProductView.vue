<template>
  <div v-if="product" class="position-relative overflow-hidden" style="z-index: 0">
    <!-- content -->
    <div class="block-spacing-sm container">
      <nav aria-label="breadcrumb" class="mb-3">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/products">購買課程</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ product.title }}
          </li>
        </ol>
      </nav>
      <!-- 課程內容 -->
      <div class="card bg-white rounded-5 mb-5">
        <div class="row g-0">
          <div class="col-lg-6 position-relative mb-3 mb-md-0 product-card-img">
            <img
              :src="product.imageUrl"
              class="card-mask img-fluid rounded-top-5 rounded-start-lg-5 h-100"
              :alt="product.title"
            />
            <a href="#" @click.prevent="toggleFavorite(product.id)">
              <span
                class="icon-favorite material-symbols-outlined position-absolute"
                :class="{
                  'icon-fill text-danger': favorites.indexOf(product.id) !== -1,
                }"
                style="top: 24px; left: 24px"
              >
                favorite
              </span>
            </a>
          </div>
          <div class="col-lg-6 px-md-3">
            <div class="card-body mt-md-4 mb-md-2">
              <h2 class="card-title fs-4 fs-xl-3 text-center">
                {{ product.title }}
              </h2>
              <p class="card-text border-dashed-b border-primary-light lh-lg pb-3">
                {{ product.info.summary }}
              </p>
              <table class="table table-white mb-0">
                <thead>
                  <tr class="d-none">
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-light">
                    <th scope="row" width="100" class="text-center">上課日期</th>
                    <td class="pb-0">
                      <span
                        v-for="(unix, index) in product.info.classTime"
                        :key="unix"
                        class="bg-primary-light me-2 mb-2 px-1 d-inline-block"
                      >
                        {{ unixToStr(unix[0], !index ? true : false) }}
                      </span>
                    </td>
                  </tr>
                  <tr class="border-light">
                    <th scope="row" class="text-center">上課時間</th>
                    <td>
                      {{ `${unixToTime(time[0])} ~ ${unixToTime(time[1])}` }}
                    </td>
                  </tr>
                  <tr class="border-light">
                    <th scope="row" class="text-center">剩餘名額</th>
                    <td>
                      {{ product.info.capacity - product.info.studentNum }}
                      位
                    </td>
                  </tr>
                  <tr class="border-light">
                    <th scope="row" class="text-center">教學主題</th>
                    <td>
                      {{ product.info.skills }}
                    </td>
                  </tr>
                  <tr class="border-light">
                    <th scope="row" class="text-center">推薦對象</th>
                    <td>{{ recommendTo[product.category] }}</td>
                  </tr>
                  <tr class="border-light" v-if="unlimitedActivities[productPromotion]">
                    <th scope="row" class="text-center">適用優惠</th>
                    <td class="fs-8">{{ unlimitedActivities[productPromotion].description }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer pt-0 pb-7">
              <div class="d-md-flex align-items-center mb-3 mb-lg-7 px-3">
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
                  NT$ {{ product.origin_price }}
                </small>
                <div class="d-flex align-items-center ms-auto">
                  <label for="filter-select" class="flex-shrink-0 me-2 ms-auto">報名人數</label>
                  <div class="select-icon">
                    <select class="form-select form-select-sm fs-7" v-model="addNum">
                      <option
                        :value="num"
                        v-for="num in product.info.capacity - product.info.studentNum"
                        :key="num"
                      >
                        {{ num }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row g-2 justify-content-center">
                <div class="col-11 col-md-6">
                  <button
                    class="btn btn-outline-primary w-100"
                    type="button"
                    @click.prevent="addToCart(id, addNum, countQuota, false)"
                  >
                    加入購物車
                  </button>
                </div>
                <div class="col-11 col-md-6">
                  <button
                    class="btn btn-primary w-100"
                    @click.prevent="addToCart(id, addNum, countQuota, true)"
                  >
                    立即購買
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 說明 -->
      <ul class="nav nav-tabs" id="productTab" role="tablist">
        <li class="nav-item w-33 w-md-25 me-md-1" role="presentation">
          <button
            class="nav-link py-3 border-dashed fs-md-6 w-100 active border-bottom-0"
            id="introduction-tab"
            data-bs-toggle="tab"
            data-bs-target="#introduction"
            type="button"
            role="tab"
            aria-controls="introduction"
            aria-selected="true"
          >
            課程介紹
          </button>
        </li>
        <li class="nav-item w-33 w-md-25 me-md-1" role="presentation">
          <button
            class="nav-link py-3 border-dashed fs-md-6 w-100 border-bottom-0"
            id="precaution-tab"
            data-bs-toggle="tab"
            data-bs-target="#precaution"
            type="button"
            role="tab"
            aria-controls="precaution"
            aria-selected="false"
          >
            注意事項
          </button>
        </li>
        <li class="nav-item w-33 w-md-25" role="presentation">
          <button
            class="nav-link py-3 border-dashed fs-md-6 w-100 border-bottom-0"
            id="FAQ-tab"
            data-bs-toggle="tab"
            data-bs-target="#FAQ"
            type="button"
            role="tab"
            aria-controls="FAQ"
            aria-selected="false"
          >
            常見問題
          </button>
        </li>
      </ul>
      <div class="tab-content bg-white fs-8 fs-lg-7 p-4" id="productTabContent">
        <!-- 課程介紹內容 -->
        <div
          class="tab-pane mb-3 p-md-2 fade show active"
          id="introduction"
          role="tabpanel"
          aria-labelledby="introduction-tab"
        >
          <ul class="list-group list-group-flush fw-bold">
            <li class="list-group-item bg-white py-1 border-0">
              <span>上課堂數：</span>
              {{ product.info.classes }} 堂
            </li>
            <li class="list-group-item bg-white py-1 border-0">
              <span>單堂時數：</span>
              {{ product.info.detail.perSpendTime }} 小時
            </li>
            <li class="list-group-item bg-white py-1 border-0 mb-3">
              <span>成品大小 ( cm ) ：</span>
              {{ product.info.detail.size }}
            </li>
            <li class="list-group-item bg-white py-1 border-0 mb-3">
              <span>學習技巧：</span>
              <ul class="fw-normal pt-2 lh-lg">
                <li
                  v-for="study in product.info.detail.study"
                  :key="product.info.detail.study.indexOf(study)"
                >
                  {{ study }}
                </li>
              </ul>
            </li>
            <li class="list-group-item bg-white py-1 border-0">
              <span>貼心提醒：</span>
              <ul class="fw-normal pt-2 lh-lg">
                <li>織框由課程單位提供</li>
                <li>
                  本課程提供學員們棉線作為織作素材，學員們也可以自備喜愛線材，經由老師討論後使用在作品上。
                </li>
                <li>教學空間內有器材與素材，因此教室禁止飲食，有蓋容器盛裝的飲品除外。</li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- 注意事項內容 -->
        <div
          class="tab-pane mb-3 p-md-2 fade"
          id="precaution"
          role="tabpanel"
          aria-labelledby="precaution-tab"
        >
          <ul>
            <li class="my-1 my-md-2">
              輔助類課程屬於進階課程，故不建議初學者購買，推薦擁有手織經驗的學員參與。
            </li>
            <li class="my-1 my-md-2">
              上課空間有限，為保障學員們學習權益，請準時到達課程地點，以便充分利用課程時間。
            </li>
            <li class="my-1 my-md-2">
              課前將會寄出「上課提醒」信件，麻煩各位學員確認地點、時間日期與準備事項。
            </li>
            <li class="my-1 my-md-2">
              部分課程會有需要自備的基本工具和材料，學員們可以按照「上課提醒」的清單提前準備。
            </li>
          </ul>
        </div>
        <!-- 常見問題內容 -->
        <div
          class="tab-pane mb-3 p-md-2 py-0 fade"
          id="FAQ"
          role="tabpanel"
          aria-labelledby="FAQ-tab"
        >
          <ul class="list-group list-group-flush lh-lg">
            <li class="list-group-item bg-white border-dashed-b pb-3">
              <h6 class="mb-0">Q. 課程購買後，能延後或取消課程嗎？</h6>
              <p class="mt-3 ms-4">
                開課 7 日前可以免費調整課程時間或取消，7日內則需支付取消費用， 3 日前為課程費用 30%
                ， 1 日前為課程費用 50% 。
              </p>
            </li>
            <li class="list-group-item bg-white border-dashed-b py-3">
              <h6 class="mb-0">Q. 錯過了這次報名時間，之後還會再開設課程嗎？</h6>
              <p class="mt-3 ms-4">
                需要視課程類型而定，體驗類課程的開課間隔約 1 ~ 2
                月；初學者課程的開課間隔約一季；進階課程則約一年 1 次。
                <br />
                開課標準會依課程熱門度進行調整，歡迎聯絡我們，告知您的需求。
              </p>
            </li>
            <li class="list-group-item bg-white my-md-2 border-dashed-b pt-3">
              <h6 class="mb-0">Q. 如果上課人數超過 10 人該如何報名？</h6>
              <p class="mt-3 ms-4">
                人數超過 10 人的團體，我們能專門為您開設新課程，有需求者歡迎聯絡我們。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- background-style -->
    <div
      class="bg-position bg-primary-light border-dashed rounded-circle animation-rotate"
      style="width: 90vw; height: 90vw; top: -60vw; left: -20vw"
    ></div>
    <div
      class="bg-position bg-secondary rounded-circle"
      style="width: 100vw; height: 100vw; bottom: -70vw; right: -20vw; z-index: -1"
    ></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import getDataStore from '@/stores/getDataStore';
import useActivitiesStore from '../../stores/useActivitiesStore';
import useProductsStore from '../../stores/useProductsStore';
import useCartsStore from '../../stores/useCartsStore';
import useFavoriteStore from '../../stores/useFavoriteStore';
import utilitiesStore from '@/stores/utilitiesStore';

export default {
  data() {
    return {
      product: null,
      time: [],
      recommendTo: {
        體驗: '無經驗者、親子、長者',
        初階: '初學者、輕鬆學習、製作小型作品',
        進階: '深入技術、挑戰中大型作品',
        輔助: '創作者、獨特風格、應用',
      },
      addNum: 1,
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(getDataStore, ['singleInfo']),
    ...mapState(useActivitiesStore, ['unlimitedActivities', 'numActivities']),
    ...mapState(useProductsStore, ['singleProduct', 'productPromotion', 'countQuota']),
    ...mapState(useFavoriteStore, ['favorites']),
  },
  methods: {
    ...mapActions(getDataStore, ['getFontData']),
    ...mapActions(useActivitiesStore, ['getActivities', 'countAllDiscount']),
    ...mapActions(useCartsStore, ['addToCart', 'isOverQuota']),
    ...mapActions(useFavoriteStore, ['toggleFavorite', 'getFavorites']),
    ...mapActions(utilitiesStore, ['unixToStr', 'unixToTime']),
  },
  watch: {
    singleInfo(newValue) {
      this.product = { ...newValue };
      this.time = this.product.info.classTime.flat().filter((unix, i) => i < 2);
    },
  },
  mounted() {
    this.getFontData('product', this.id);
    this.getActivities();
    this.getFavorites();
  },
};
</script>

<style lang="scss">
@media (max-width: 992px) {
  .product-card-img {
    max-height: 280px;
  }
}
</style>
