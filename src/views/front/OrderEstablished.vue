<template>
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
        <ol class="d-flex justify-content-around ps-0 fs-7 fs-md-6 fw-bold">
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
      <div class="row justify-content-center gy-5">
        <div class="col-8 col-md-5 col-xl-4 align-self-center">
          <h2 class="d-flex flex-column align-items-center rounded-2 shadow p-4 p-lg-5 mb-0 fs-4">
            <i class="bi bi-check-circle-fill text-success mb-3 lh-1" style="font-size: 64px"></i>
            訂單已成立
          </h2>
        </div>
        <div v-if="order" class="col col-sm-10 col-md-8 col-xl-6">
          <div class="rounded-2 p-4 p-sm-5 bg-body">
            <h2 class="title fs-4 mb-7 mb-md-4">
              <span class="border-dark pb-6">訂單資訊</span>
            </h2>
            <div class="mx-xl-4">
              <table class="order-detail table fs-7 fs-xl-6">
                <thead class="visually-hidden">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                  </tr>
                </thead>
                <tbody class="border-white">
                  <tr>
                    <th scope="row" width="100">成立日期</th>
                    <td>
                      {{ unixToStr(order.create_at) }}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">訂單編號</th>
                    <td>
                      <router-link
                        :to="`/member/order/${order.id}`"
                        class="link-primary text-decoration-underline"
                      >
                        {{ order.id }}
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">應付金額</th>
                    <td>
                      <span class="fw-bold">NT$ {{ finalBill }}</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">付款狀態</th>
                    <td>
                      <span
                        class="badge text-white rounded-1"
                        :class="[order.is_paid ? 'bg-success' : 'bg-danger']"
                      >
                        {{ order.is_paid ? '付款完成' : '未付款' }}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">訂購人</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th scope="row">聯絡電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th scope="row">聯絡信箱</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th scope="row">訂單備註</th>
                    <td>{{ order.message || '－' }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-10 text-center">
          <RouterLink to="/products" class="btn btn-outline-secondary fs-7 fs-lg-6 m-2">
            <span class="material-symbols-outlined icon-semibold fs-6 fs-lg-5">undo</span>
            返回課程列表
          </RouterLink>
          <RouterLink to="/member/orders" class="btn btn-primary fs-7 fs-lg-6 m-2">
            查看我的訂單
            <span class="icon-e icon-east fs-7 fs-lg-6"></span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import getDataStore from '@/stores/getDataStore';
import utilitiesStore from '@/stores/utilitiesStore';
import useCartsStore from '@/stores/useCartsStore';
import useCouponStore from '@/stores/useCouponStore';
import useOrderStore from '@/stores/useOrderStore';

export default {
  data() {
    return {
      orderId: '',
      order: null,
      id: '',
    };
  },
  computed: {
    ...mapState(getDataStore, ['singleInfo']),
    ...mapState(useOrderStore, ['orderInfo']),
    ...mapState(useCartsStore, ['totalBill', 'nowAllDiscount']),
    ...mapState(useCouponStore, ['cookieCouponDiscount']),
    createDate() {
      const unix = new Date(this.orderInfo.create_at * 1000);
      return `${unix.getFullYear()}-${unix.getMonth() + 1}-${unix.getDate()}`;
    },
    finalBill() {
      const { cartOverview } = this.order.user;
      console.log(cartOverview.finalBill);
      return cartOverview ? cartOverview.finalBill : 0;
    },
  },
  methods: {
    ...mapActions(getDataStore, ['getFontData']),
    ...mapActions(utilitiesStore, ['unixToStr']),
    ...mapActions(useOrderStore, ['getOrder']),
  },
  watch: {
    orderId(newId) {
      console.log(newId);
      this.getFontData('order', newId);
    },
    singleInfo(newOrder) {
      this.order = { ...newOrder };
      console.log(this.order);
    },
  },
  mounted() {
    this.orderId = document.cookie.replace(/(?:(?:^|.*;\s*)orderId\s*=\s*([^;]*).*$)|^.*$/, '$1');
  },
};
</script>

<style lang="scss">
.order-detail {
  tbody tr > * {
    padding-top: 12px;
    padding-bottom: 12px;
    @media (min-width: 1200px) {
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }
}
</style>
