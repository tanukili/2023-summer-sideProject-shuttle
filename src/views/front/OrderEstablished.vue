<script>
import { mapState, mapActions } from 'pinia';
import useCartsStore from '../../stores/useCartsStore';
import useCouponStore from '../../stores/useCouponStore';
import useOrderStore from '../../stores/useOrderStore';

const orderId = document.cookie.replace(
  /(?:(?:^|.*;\s*)newOrderId\s*=\s*([^;]*).*$)|^.*$/,
  '$1'
);

export default {
  data() {
    return {
      id: '',
    };
  },
  methods: {
    ...mapActions(useOrderStore, ['getOrder']),
  },
  mounted() {
    // 進入時觸發
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1200);
    if (orderId) {
      this.getOrder(orderId);
    }
  },
  computed: {
    ...mapState(useOrderStore, ['orderInfo']),
    ...mapState(useCartsStore, ['totalBill', 'nowAllDiscount']),
    ...mapState(useCouponStore, ['cookieCouponDiscount']),
    createDate() {
      const unix = new Date(this.orderInfo.create_at * 1000);
      return `${unix.getFullYear()}-${unix.getMonth() + 1}-${unix.getDate()}`;
    },
    countFinal() {
      return this.totalBill - this.cookieCouponDiscount - this.nowAllDiscount;
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
  <div class="bg-white">
    <div class="block-spacing-sm container">
      <nav aria-label="breadcrumb" class="mb-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/products">購買課程</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/carts">購物車</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">訂單完成</li>
        </ol>
      </nav>
      <!-- 訂單進度 -->
      <div class="w-100 w-md-75 d-flex flex-column mx-auto my-5">
        <ol class="d-flex justify-content-around ps-0 fs-6 fw-bold">
          <li>訂單確認</li>
          <li>填寫資料</li>
          <li>訂單完成</li>
        </ol>
        <div class="progress border-dashed border-secondary">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 100.5%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <!-- 訂單內容 -->
      <div class="row justify-content-center">
        <div class="modal-body text-center fs-4 fs-md-3 py-3">訂單已成立</div>
        <div class="col col-md-9 col-lg-7 col-xxl-6 mt-5">
          <div class="bg-secondary rounded-2 px-5 py-4 shadow">
            <h4 class="text-center py-4">
              <span class="border-dashed-b pb-2">訂單資訊</span>
            </h4>
            <ul class="list-group list-group-flush pt-2 pb-4">
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0 text-center text-center">
                    成立日期
                  </h5>
                  <div class="col-7 lh-lg">
                    <p>{{ createDate }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0 text-center">付款狀態</h5>
                  <div class="col-7 lh-lg">
                    <p>{{ orderInfo.is_paid ? '付款完成' : '未付款' }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0 text-center">應付金額</h5>
                  <div class="col-7 lh-lg">
                    <p>NT$ {{ countFinal }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0 text-center">訂單編號</h5>
                  <div class="col-7 lh-lg">
                    <p>{{ orderInfo.id }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0 text-center">訂購者</h5>
                  <div class="col-7 lh-lg">
                    <p>{{ orderInfo.user.name }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0 text-center">連絡電話</h5>
                  <div class="col-7 lh-lg">
                    <p>{{ orderInfo.user.tel }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0 text-center">聯絡信箱</h5>
                  <div class="col-7 lh-lg">
                    <p>{{ orderInfo.user.email }}</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item border-light">
                <div class="row">
                  <h5 class="col fs-6 mb-0 text-center">訂單備註</h5>
                  <div class="col-7 lh-lg">
                    <p>{{ orderInfo.message || '無' }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
