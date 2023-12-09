<script>
import { mapState, mapActions } from 'pinia';
import useActivitiesStore from '../../stores/useActivitiesStore';
import useProductsStore from '../../stores/useProductsStore';
import useCartsStore from '../../stores/useCartsStore';

export default {
  data() {
    return {
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
  methods: {
    ...mapActions(useActivitiesStore, ['getActivities', 'countAllDiscount']),
    ...mapActions(useProductsStore, ['getProduct']),
    ...mapActions(useCartsStore, ['addToCart', 'isOverQuota']),
  },
  mounted() {
    // 進入時觸發
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1200);
  },
  created() {
    // 取出動態路由.參數.自定名稱
    this.getProduct(this.id);
    this.getActivities();
  },
  computed: {
    ...mapState(useActivitiesStore, ['unlimitedActivities', 'numActivities']),
    ...mapState(useProductsStore, [
      'singleProduct',
      'productPromotion',
      'countQuota',
    ]),
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
  <div class="position-relative overflow-hidden" style="z-index: 0">
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
            {{ singleProduct.title }}
          </li>
        </ol>
      </nav>
      <!-- 課程內容 -->
      <div class="card bg-white rounded-5 mb-5">
        <div class="row g-0">
          <div class="col-md-6 position-relative mb-3 mb-md-0">
            <img
              :src="`${imgBase}${singleProduct.imageUrl}`"
              class="img-fluid rounded-top-5 rounded-start-md-5 h-100"
              :alt="singleProduct.title"
            />
            <a href="#">
              <span
                class="icon-favorite material-symbols-outlined position-absolute"
                style="top: 24px; left: 24px"
                >favorite</span
              >
            </a>
          </div>
          <div class="col-md-6 px-3">
            <div class="card-body mt-4">
              <h2 class="card-title fs-4 fs-xl-3 text-center">
                {{ singleProduct.title }}
              </h2>
              <p
                class="card-text border-dashed-b border-primary-light lh-lg pb-3"
              >
                {{ singleProduct.info.summary }}
              </p>
              <ul class="list-group list-group-flush pt-2">
                <li class="list-group-item bg-white border-0">
                  <span class="fw-bold">日期</span>&emsp;
                  <span v-for="date in singleProduct.calssDates" :key="date">
                    {{
                      singleProduct.calssDates.indexOf(date)
                        ? ' ; ' + date
                        : date
                    }}
                  </span>
                </li>
                <li class="list-group-item bg-white border-0">
                  <span class="fw-bold">時間</span>&emsp;
                  {{
                    `${singleProduct.courseTime[0]} ~ ${singleProduct.courseTime[1]}`
                  }}
                </li>
                <li class="list-group-item bg-white border-0">
                  <span class="fw-bold">剩餘名額</span>&emsp;
                  {{
                    singleProduct.info.capacity - singleProduct.info.studentNum
                  }}
                  位
                </li>
                <li class="list-group-item bg-white border-0">
                  <span class="fw-bold">教學主題</span>&emsp;{{
                    singleProduct.info.skills
                  }}
                </li>
                <li class="list-group-item bg-white border-0">
                  <span class="fw-bold">推薦對象</span>&emsp;{{
                    recommendTo[singleProduct.category]
                  }}
                </li>
                <li
                  class="list-group-item bg-white"
                  v-if="unlimitedActivities[productPromotion]"
                >
                  <span class="fw-bold">適用優惠</span>&emsp;
                  {{ unlimitedActivities[productPromotion].description }}
                </li>
                <li
                  class="list-group-item bg-white"
                  v-else-if="numActivities[productPromotion]"
                >
                  <span class="fw-bold">適用優惠</span>&emsp;
                  {{ numActivities[productPromotion].description }}
                </li>
              </ul>
            </div>
            <div class="card-footer pb-4">
              <div class="d-flex align-items-center mb-4 px-3">
                <small
                  v-if="unlimitedActivities[singleProduct.state.promotion]"
                  class="fs-4 fw-bold text-danger"
                  >${{
                    singleProduct.origin_price *
                    unlimitedActivities[singleProduct.state.promotion]
                      .percentOff
                  }}</small
                >
                <small
                  :class="[
                    !unlimitedActivities[singleProduct.state.promotion]
                      ? 'fs-4 fw-bold text-black'
                      : 'fs-6 text-gray-400 text-decoration-line-through ms-2',
                  ]"
                  >${{ singleProduct.origin_price }}
                </small>
                <div class="d-flex align-items-center ms-auto">
                  <label
                    for="filter-select"
                    class="flex-shrink-0 fs-8 fs-lg-7 me-2"
                    >報名人數</label
                  >
                  <div class="select-icon">
                    <select
                      class="form-select form-select-sm fs-7"
                      v-model="addNum"
                    >
                      <option :value="num" v-for="num in countQuota" :key="num">
                        {{ num }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row gx-2">
                <div class="col-lg-6 mb-2 mb-3">
                  <button
                    class="btn btn-outline-primary w-100"
                    type="button"
                    @click.prevent="addToCart(id, addNum, countQuota, false)"
                  >
                    加入購物車
                  </button>
                </div>
                <div class="col-lg-6">
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
            class="nav-link py-3 border-dashed fs-lg-5 w-100 active"
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
            class="nav-link py-3 border-dashed fs-lg-5 w-100"
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
            class="nav-link py-3 border-dashed fs-lg-5 w-100"
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
              <span>上課堂數：</span>{{ singleProduct.info.classes }} 堂
            </li>
            <li class="list-group-item bg-white py-1 border-0">
              <span>單堂時數：</span
              >{{ singleProduct.info.detail.perSpendTime }} 小時
            </li>
            <li class="list-group-item bg-white py-1 border-0 mb-3">
              <span>成品大小 ( cm ) ：</span
              >{{ singleProduct.info.detail.size }}
            </li>
            <li class="list-group-item bg-white py-1 border-0 mb-3">
              <span>學習技巧：</span>
              <ul class="fw-normal pt-2 lh-lg">
                <li
                  v-for="study in singleProduct.info.detail.study"
                  :key="singleProduct.info.detail.study.indexOf(study)"
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
                <li>
                  教學空間內有器材與素材，因此教室禁止飲食，有蓋容器盛裝的飲品除外。
                </li>
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
                開課 7 日前可以免費調整課程時間或取消，7日內則需支付取消費用， 3
                日前為課程費用 30% ， 1 日前為課程費用 50% 。
              </p>
            </li>
            <li class="list-group-item bg-white border-dashed-b py-3">
              <h6 class="mb-0">
                Q. 錯過了這次報名時間，之後還會再開設課程嗎？
              </h6>
              <p class="mt-3 ms-4">
                需要視課程類型而定，體驗類課程的開課間隔約 1 ~ 2
                月；初學者課程的開課間隔約一季；進階課程則約一年 1 次。<br />
                開課標準會依課程熱門度進行調整，歡迎聯絡我們，告知您的需求。
              </p>
            </li>
            <li class="list-group-item bg-white my-md-2 border-dashed-b pt-3">
              <h6 class="mb-0">Q. 如果上課人數超過 10 人該如何報名？</h6>
              <p class="mt-3 ms-4">
                人數超過 10
                人的團體，我們能專門為您開設新課程，有需求者歡迎聯絡我們。
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
      style="
        width: 100vw;
        height: 100vw;
        bottom: -70vw;
        right: -20vw;
        z-index: -1;
      "
    ></div>
  </div>
</template>

<style>
.link-hover:hover {
  text-decoration: underline;
}
</style>
