<template>
  <BackgroundBanner :bannerImg="bannerImg" class="cart-banner"></BackgroundBanner>
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
      <div v-if="!cart.length" class="d-flex flex-column align-items-center">
        <span
          class="material-symbols-outlined text-gray-200 p-4 rounded-circle my-4"
          style="font-size: 96px; border: 6px solid var(--bs-gray-100)"
        >
          production_quantity_limits
        </span>
        <h2>目前購物車沒有課程</h2>
        <RouterLink
          to="/products"
          class="icon-e icon-east btn btn-primary-light mt-5"
          style="width: 280px"
        >
          選購課程
        </RouterLink>
      </div>
      <div v-else>
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
        <div class="d-flex align-items-center m-3">
          <RouterLink class="text-decoration-underline d-inline-block me-auto fs-7" to="/products">
            <span class="material-symbols-outlined icon-semibold">undo</span>
            返回課程列表
          </RouterLink>
          <a
            class="btn btn-sm fs-7 btn-outline-danger shadow-sm px-3"
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
              <tr v-for="course in cart" :key="course.id">
                <th scope="row">
                  <a href="#" @click.prevent="deleteCart(course.id)">
                    <span class="material-symbols-outlined icon-fill fs-5">delete_forever</span>
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
                <td>
                  <RouterLink :to="`/product/${course.product.id}`" class="fw-bold">
                    {{ course.product.title }}
                  </RouterLink>
                </td>
                <td>
                  <div class="d-flex flex-column">
                    <span
                      v-if="course.product.origin_price !== course.product.price"
                      class="text-gray-400 text-decoration-line-through"
                    >
                      {{ course.product.origin_price }}
                    </span>
                    <span
                      :class="`${
                        course.product.origin_price !== course.product.price ? 'text-danger' : false
                      }`"
                    >
                      {{ course.product.price }}
                    </span>
                  </div>
                </td>
                <td>
                  <div class="select-icon d-inline-block" style="width: 64px">
                    <select
                      class="form-select form-select-sm fs-lg-7 pe-4 border-secondary"
                      v-model="course.qty"
                      @change="putCart(course.id, parseInt(course.qty))"
                    >
                      <option
                        :value="num"
                        v-for="num in course.product.info.capacity - course.product.info.studentNum"
                        :key="num"
                      >
                        {{ num }}
                      </option>
                    </select>
                  </div>
                </td>
                <td>
                  <span
                    :class="{
                      'text-gray-400 text-decoration-line-through':
                        course.total !== course.subtotal,
                    }"
                  >
                    {{ course.total }}
                  </span>
                  <span v-if="course.total !== course.subtotal" class="text-danger d-block">
                    {{ course.subtotal }}
                  </span>
                </td>
                <td class="fs-8 px-md-3">
                  <p>
                    {{
                      course.product.state.promotion
                        ? activities[course.product.state.promotion]?.title
                        : '－'
                    }}
                    <span
                      class="d-block fs-9 mt-1"
                      :class="[
                        course.qty < numActivities[course.product.state.promotion]?.requiredNum
                          ? 'text-danger'
                          : 'text-gray-200',
                      ]"
                    >
                      {{ activities[course.product.state.promotion]?.description }}
                    </span>
                  </p>
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
            <ul class="list-group rounded-2 text-mellow">
              <li class="list-group-item border-0 d-flex justify-content-between p-4 pb-2 fw-bold">
                小計總和：
                <span class="text-end">NT$ {{ totalBill }}</span>
              </li>
              <li
                v-if="couponDiscount"
                class="list-group-item border-0 d-flex justify-content-between px-4 py-2 fw-bold"
              >
                優惠券折抵：
                <span class="text-danger">- {{ couponDiscount }}</span>
              </li>
              <li
                v-if="allActive.requiredPrice <= totalBill"
                class="list-group-item border-0 d-flex justify-content-between px-4 py-2 fw-bold"
              >
                滿額折抵：
                <span class="text-danger">- {{ nowAllDiscount }}</span>
              </li>
              <li
                v-if="couponDiscount || allActive.requiredPrice <= totalBill"
                class="list-group-item pt-2 p-4 border-0 d-flex justify-content-between fw-bold"
              >
                折扣後金額：
                <span class="text-end">NT$ {{ countFinal }}</span>
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import alertStore from '@/stores/alertStore';
import getDataStore from '@/stores/getDataStore';
import useActivitiesStore from '@/stores/useActivitiesStore';
import useCartsStore from '@/stores/useCartsStore';
import useCouponStore from '@/stores/useCouponStore';
import BackgroundBanner from '@/components/BackgroundBanner.vue';

const api = import.meta.env.VITE_API_PATH;

export default {
  components: {
    BackgroundBanner,
  },
  data() {
    return {
      bannerImg: 'banner/banner-carts.jpg',
      couponCode: '',
      couponDiscount: 0,
      cart: [],
      coupons: [],
    };
  },
  computed: {
    ...mapState(alertStore, ['alertstyles']),
    ...mapState(getDataStore, ['remoteData', 'jsonData']),
    ...mapState(useActivitiesStore, ['allActive', 'unlimitedActivities', 'numActivities']),
    ...mapState(useCartsStore, ['totalBill', 'nowAllDiscount']),
    ...mapState(useCouponStore, ['cookieCouponDiscount']),
    countDifference() {
      const required = this.allActive.requiredPrice;
      return required - (this.totalBill % required);
    },
    countFinal() {
      if (!this.couponDiscount) {
        return this.totalBill - this.nowAllDiscount;
      }
      return this.totalBill - this.couponDiscount - this.nowAllDiscount;
    },
    activities() {
      return { ...this.numActivities, ...this.unlimitedActivities };
    },
  },
  methods: {
    ...mapActions(alertStore, ['baseContent']),
    ...mapActions(getDataStore, ['getFontData', 'getJsonData']),
    ...mapActions(useActivitiesStore, ['getActivities']),
    ...mapActions(useCartsStore, ['putCart', 'deleteAllCart', 'deleteCart', 'goToOrder']),
    useCoupon(code) {
      this.axios
        .get(`${api}/coupons/${code}`)
        .then((res) => {
          const obj = res.data;
          // if (obj.is_used) {
          //   swal.fire('優惠券已使用');
          //   return;
          // }
          console.log(res.data);
          this.$swal({
            icon: 'success',
            confirmButtonText: '確認',
            title: `成功套用「${res.data.title}」`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutDown',
            },
          });
          this.couponDiscount = res.data.discount;
          document.cookie = `couponDiscount=${this.couponDiscount}; max-age=86400;Secure`;
          obj.is_used = true;
          // this.putCouponState(code, obj);
        })
        .catch(() => {
          this.alertstyles.toast_danger(this.baseContent('優惠券使用失敗'));
        });
    },
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
        denyButtonColor: 'var(--bs-primary)',
      })
        // 按鈕事件
        .then((res) => {
          if (res.isDenied) {
            this.$router.push('/order');
          }
        });
    },
  },
  watch: {
    remoteData(newValue) {
      this.cart = [...newValue].map((item) => {
        // 小計計算（數量優惠）
        const { total, qty } = item;
        const { promotion } = item.product.state;
        const activity = this.numActivities[promotion];
        item.subtotal = total;
        if (!!activity && activity.requiredNum <= qty) {
          item.subtotal = Math.round(total * activity.percentOff);
        }
        return item;
      });
    },
    jsonData(newValue) {
      console.log(newValue);
      this.coupons = [...newValue];
    },
  },
  mounted() {
    const nowDate = Math.floor(new Date().getTime() / 1000);
    this.getActivities();
    this.getFontData('cart');
    this.getJsonData('coupons', `?is_used=false&exp_gte=${nowDate}`);
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
