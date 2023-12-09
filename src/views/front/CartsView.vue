<script>
import { mapState, mapActions } from 'pinia';
import useActivitiesStore from '../../stores/useActivitiesStore';
import useCartsStore from '../../stores/useCartsStore';
import useCouponStore from '../../stores/useCouponStore';
import BackgroundBanner from '../../components/BackgroundBanner.vue';

export default {
  components: {
    BackgroundBanner,
  },
  data() {
    return {
      bannerImg: 'background-image: url(/banner/banner-carts.jpg)',
      couponCode: '',
    };
  },
  methods: {
    ...mapActions(useActivitiesStore, ['getActivities']),
    ...mapActions(useCartsStore, [
      'getCart',
      'putCart',
      'deleteAllCart',
      'deleteCart',
      'goToOrder',
    ]),
    ...mapActions(useCouponStore, ['useCoupon']),
    goToOrder() {
      // 全館活動提醒 暫時的寫法
      this.$swal({
        // position: 'bottom-end',
        // backdrop: false,
        title: `${this.allActive.title}`,
        html: `<p class='text-gray-400'>${this.allActive.description}</p>
            <p>目前金額再 <span class='text-danger'>NT$ ${this.countDifference} </span>可折抵 NT$ ${this.allActive.percentOff} </p>`,
        showDenyButton: true,
        showCloseButton: true,
        confirmButtonText: '修改訂單',
        denyButtonText: '下一步',
      })
        // 按鈕事件
        .then((res) => {
          if (res.isDenied) {
            this.$router.push('/order');
          }
        });
    },
  },
  mounted() {
    // 進入時觸發
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1200);
  },
  created() {
    this.getActivities();
    this.getCart();
  },
  computed: {
    ...mapState(useActivitiesStore, [
      'allActive',
      'unlimitedActivities',
      'numActivities',
      'nowAllDiscount',
    ]),
    ...mapState(useCartsStore, ['carts', 'totalBill', 'nowAllDiscount']),
    ...mapState(useCouponStore, ['couponDiscount']),
    countDifference() {
      const required = this.allActive.requiredPrice;
      return required - (this.totalBill % required);
    },
  },
  // // 生命週期：離開當前路由前調用
  // beforeRouteLeave(to, from, next) {
  //   // 關閉所有 SweetAlert2 視窗
  //   this.$swal.close();
  //   // 繼續路由遷移
  //   next();
  // },
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
  <BackgroundBanner
    :bannerImg="bannerImg"
    class="cart-banner"
  ></BackgroundBanner>
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
          <li class="breadcrumb-item active" aria-current="page">購物車</li>
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
            style="width: 33.33%"
            aria-valuenow="33.33"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <!-- 訂單內容 -->
      <div class="d-flex align-items-center mb-2">
        <RouterLink
          class="text-decoration-underline d-inline-block me-auto"
          to="/products"
        >
          <span class="material-symbols-outlined icon-semibold"> undo </span>
          返回課程列表
        </RouterLink>
        <a
          class="btn btn-sm btn-outline-primary px-3 fw-normal d-inline-block shadow-none"
          href="#"
          @click.prevent="deleteAllCart()"
        >
          清空購物車
        </a>
      </div>
      <div class="table-responsive-sm">
        <table class="table align-middle table-white text-center fs-8 fs-lg-7">
          <thead>
            <tr class="table-light bg-light">
              <th scope="col"></th>
              <th scope="col">
                <div class="d-none d-md-flex flex-column">預覽</div>
              </th>
              <th scope="col">課程名稱</th>
              <th scope="col">價格</th>
              <th scope="col">人數</th>
              <th scope="col">小計</th>
              <th scope="col">
                <div class="d-none d-md-flex flex-column px-md-3">適用優惠</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course in carts" :key="course.id">
              <th scope="row">
                <a href="#" @click.prevent="deleteCart(course.id)">
                  <span class="material-symbols-outlined icon-fill fs-5">
                    delete_forever
                  </span>
                </a>
              </th>
              <td>
                <div class="d-none d-md-flex flex-column align-items-center">
                  <img
                    :src="course.product.imageUrl"
                    :alt="`product${course.id}`"
                    class="img-fluid"
                    style="max-width: 150px"
                  />
                </div>
              </td>
              <td>{{ course.product.title }}</td>
              <td>
                <div class="d-flex flex-column">
                  <span
                    v-if="course.product.origin_price !== course.product.price"
                    class="text-gray-400 text-decoration-line-through"
                    >{{ course.product.origin_price }}</span
                  ><span
                    :class="`${
                      course.product.origin_price !== course.product.price
                        ? 'text-danger'
                        : false
                    }`"
                    >{{ course.product.price }}</span
                  >
                </div>
              </td>
              <td>
                <div class="select-icon">
                  <select
                    class="form-select form-select-sm fs-lg-7 pe-4 border-secondary"
                    v-model="course.qty"
                    @change="putCart(course.id, parseInt(course.qty))"
                  >
                    <option
                      :value="num"
                      v-for="num in course.product.info.capacity -
                      course.product.info.studentNum"
                      :key="num"
                    >
                      {{ num }}
                    </option>
                  </select>
                </div>
              </td>
              <td>
                <div class="d-flex flex-column">
                  <span
                    v-if="course.final_total !== course.total"
                    class="text-gray-400 text-decoration-line-through"
                    >{{ course.total }}</span
                  ><span
                    :class="`${
                      course.final_total !== course.total
                        ? 'text-danger'
                        : false
                    }`"
                    >{{ course.final_total }}</span
                  >
                </div>
              </td>
              <td class="fs-8 px-md-3">
                <div
                  v-if="course.product.state.promotion"
                  class="d-none d-md-flex flex-column"
                >
                  <div
                    v-if="unlimitedActivities[course.product.state.promotion]"
                  >
                    {{
                      unlimitedActivities[course.product.state.promotion].title
                    }}
                  </div>
                  <div v-else>
                    {{ numActivities[course.product.state.promotion].title }}
                    <div
                      v-if="
                        course.qty <
                        numActivities[course.product.state.promotion]
                          .requiredNum
                      "
                      class="text-gray-200 fs-9 lh-lg fw-light"
                    >
                      {{
                        numActivities[course.product.state.promotion]
                          .description
                      }}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 訂單底部 -->
      <div class="row mb-4 pb-md-3 pt-2">
        <div class="col-10 col-md-5">
          <div class="input-group mb-3 mb-lg-4">
            <input
              v-model="couponCode"
              type="text"
              class="form-control fs-7"
              placeholder="請輸入折扣碼"
              aria-label="coupon number"
              aria-describedby="coupon-btn"
            />
            <button
              class="btn btn-secondary shadow-none py-2 fs-7"
              type="button"
              id="coupon-btn"
              @click.prevent="useCoupon(couponCode)"
            >
              確認使用
            </button>
          </div>
        </div>
        <div class="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 ms-auto">
          <ul class="list-group rounded-2">
            <li
              class="list-group-item border-0 text-mellow d-flex justify-content-between py-3"
            >
              <span class="fw-bold">目前總金額</span>NT$ {{ totalBill }}
            </li>
            <li
              v-if="couponDiscount"
              class="list-group-item border-0 d-flex justify-content-between"
            >
              <span class="fw-bold">優惠券折抵</span
              ><span class="text-danger">NT$ - {{ couponDiscount }}</span>
            </li>
            <li
              v-if="allActive.requiredPrice <= totalBill"
              class="list-group-item border-0 d-flex justify-content-between"
            >
              <span class="fw-bold">滿額折抵</span
              ><span class="text-danger">NT$ - {{ nowAllDiscount }}</span>
            </li>
            <li
              v-if="couponDiscount || allActive.requiredPrice <= totalBill"
              class="list-group-item pb-3 border-0 d-flex justify-content-between"
            >
              <span class="fw-bold">折扣後金額</span>NT$
              {{ totalBill - couponDiscount - nowAllDiscount }}
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex">
        <button
          class="btn btn-primary fs-7 fs-lg-6 fw-normal w-75 w-md-50 w-lg-25 mx-auto"
          @click.prevent="goToOrder()"
        >
          訂單確認
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.cart-banner > * {
  position: static;
  background-position: 50% 60%;
}
.cart-banner > *::before {
  content: none;
}
.cart-banner > *,
.cart-banner > *::before {
  height: 180px;
}

@media (min-width: 768px) {
  .cart-banner > *,
  .cart-banner > *::before {
    height: 240px;
  }
}

@media (min-width: 992px) {
  .cart-banner > *,
  .cart-banner > *::before {
    height: 300px;
  }
}
</style>
