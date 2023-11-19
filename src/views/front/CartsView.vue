<script>
import BackgroundBanner from '../../components/BackgroundBanner.vue';

const hexApi = import.meta.env.VITE_HEX_API_PATH;
const apiPath = '2023shuttle';

export default {
  emits: ['updateUserId'], // 聲明事件避免錯誤
  components: {
    BackgroundBanner,
  },
  data() {
    return {
      bannerImg: 'background-image: url(/banner/banner-carts.jpg)',
      carts: [],
      totalBill: 0,
      coupon: 0,
      couponCode: '',
      promotions: {
        unlimitedActives: {
          promotion01: {
            title: '2023 秋冬新色早鳥優惠',
            description: '對象商品現打九折',
            percentOff: 0.9, // 全面 9 折
            checkLimits(subtotal) {
              return subtotal * this.percentOff; // 折後價
            },
          },
        },
        numActives: {
          promotion03: {
            title: '2023 夏季織心好友揪團趣',
            description: '兩人現打八五折',
            requiredNum: 2, // 兩人以上 85 折
            percentOff: 0.85,
            checkLimits(qty, subtotal) {
              if (qty >= this.requiredNum) {
                return Math.round(subtotal * this.percentOff); // 折後價
              }
              return qty; // 回傳限制
            },
          },
        },
        // 只會有一個
        totalActive: {
          title: '2023 歲末全館回饋季',
          description: '滿 3000 折 300，可累計折抵',
          requiredPrice: 3000, // 滿3000折價300
          percentOff: 300,
          totalActive(total) {
            let count = total;
            let discount = 0;
            if (total < 3000) {
              return { discount, difference: 3000 - total }; // 差額
            }
            while (count >= 3000) {
              count -= 3000;
              discount += 300;
            }
            return { discount, difference: 3000 - (total % 3000) }; // 折後價+差額
          },
        },
      },
    };
  },
  methods: {
    getCarts() {
      this.axios
        .get(`${hexApi}api/${apiPath}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
          // 需要修改prodcut資料
          this.carts.forEach((e) => {
            // 三種優惠適用狀況 (注意單雙數)
            e.product.state.promotions = {};
            if (e.product.state.promotion) {
              switch (e.product.state.promotion) {
                case 'promotion01':
                  e.product.state.promotionType = 'unlimitedActive';
                  break;
                case 'promotion03':
                  e.product.state.promotionType = 'numActive';
                  break;
                default:
                  break;
              }
            }
            // price 直接由 origan-price 產生，並回應在 total
            e.product.price = e.product.origin_price;
            if (e.product.state.promotionType === 'unlimitedActive') {
              e.product.price = this.promotions.unlimitedActives[
                e.product.state.promotion
              ].checkLimits(e.product.origin_price);
              e.total = e.product.price * e.qty;
            }
            // final_total 直接由 total 產生
            e.final_total = e.total;
            if (e.product.state.promotionType === 'numActive') {
              e.final_total = this.promotions.numActives[
                e.product.state.promotion
              ].checkLimits(e.qty, e.total);
            }
          });
          // 總金額
          this.totalBill = res.data.data.total;
          // 全館活動提醒
          this.$swal({
            position: 'bottom-end',
            title: `${this.promotions.totalActive.title}`,
            html: `<p class='text-gray-400'>${
              this.promotions.totalActive.description
            }</p><p>目前金額再 <span class='text-danger'>NT$ ${
              this.promotions.totalActive.totalActive(this.totalBill).difference
            } </span>即可折抵 NT$ 300 </p>`,
            showConfirmButton: false,
            backdrop: false,
            showCloseButton: true,
            width: '40%',
            didClose: () => {},
          });
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    putCarts(id, newQty) {
      const obj = { data: { product_id: id, qty: newQty } };
      this.axios
        .put(`${hexApi}api/${apiPath}/cart/${id}`, obj)
        .then(() => {
          this.getCarts();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    deleteCarts(id) {
      this.axios
        .delete(`${hexApi}api/${apiPath}/cart/${id}`)
        .then((res) => {
          this.$swal({
            title: res.data.message,
            didClose: () => {
              this.getCarts();
            },
          });
        })
        .catch((err) => {
          this.$swal({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
    deleteAllCarts() {
      this.axios
        .delete(`${hexApi}api/${apiPath}/carts`)
        .then((res) => {
          this.$swal({
            title: res.data.message,
            didClose: () => {
              this.getCarts();
            },
          });
        })
        .catch((err) => {
          this.$swal({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
    showPromotion(name, type) {
      if (name && type) {
        const key = type;
        const value = name;
        return this.promotions[`${key}s`][value];
      }
      return false;
    },
    postCoupon(code) {
      const obj = { data: { code } };
      this.axios
        .post(`${hexApi}api/${apiPath}/coupon`, obj)
        .then((res) => {
          this.coupon = this.totalBill - res.data.data.final_total;
          this.$swal({
            icon: 'success',
            title: res.data.message,
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutDown',
            },
          });
        })
        .catch((err) => {
          this.$swal({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
  },
  mounted() {
    // 進入時觸發
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1200);
    this.getCarts();
  },
  // 生命週期：離開當前路由前調用
  beforeRouteLeave(to, from, next) {
    // 關閉所有 SweetAlert2 視窗
    this.$swal.close();
    // 繼續路由遷移
    next();
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
          @click.prevent="deleteAllCarts()"
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
                <a href="#" @click.prevent="deleteCarts(course.id)">
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
                  <!-- 已由 unlimitedActives 優惠計算 product.price -->
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
                    @change="putCarts(course.id, parseInt(course.qty))"
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
                  <!-- 已由 numActive 優惠計算 product.final_total -->
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
                  v-if="
                    showPromotion(
                      course.product.state.promotion,
                      course.product.state.promotionType
                    )
                  "
                  class="d-none d-md-flex flex-column"
                >
                  {{
                    showPromotion(
                      course.product.state.promotion,
                      course.product.state.promotionType
                    ).title
                  }}
                  <span class="text-gray-200 fs-9 fw-light">{{
                    showPromotion(
                      course.product.state.promotion,
                      course.product.state.promotionType
                    ).description
                  }}</span>
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
              @click.prevent="postCoupon(couponCode)"
            >
              確認使用
            </button>
          </div>
        </div>
        <div class="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 ms-auto">
          <ul class="list-group rounded-2 bg-secondary">
            <li
              class="list-group-item pt-3 border-0 text-mellow d-flex justify-content-between"
            >
              <span class="fw-bold">目前總金額</span>NT$ {{ totalBill }}
            </li>
            <li
              v-if="coupon"
              class="list-group-item border-0 d-flex justify-content-between"
            >
              <span class="fw-bold">優惠券折抵</span
              ><span class="text-danger">NT$ - {{ coupon }}</span>
            </li>
            <li
              v-if="promotions.totalActive"
              class="list-group-item border-0 d-flex justify-content-between"
            >
              <span class="fw-bold">滿額折抵</span
              ><span class="text-danger"
                >NT$ -
                {{
                  promotions.totalActive.totalActive(totalBill).discount
                }}</span
              >
            </li>
            <li
              class="list-group-item pb-3 border-0 d-flex justify-content-between"
            >
              <span class="fw-bold">折扣後金額</span>NT$
              {{
                totalBill !== 0
                  ? totalBill -
                    coupon -
                    promotions.totalActive.totalActive(totalBill).discount
                  : 0
              }}
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex">
        <RouterLink
          class="btn btn-primary fs-7 fs-lg-6 fw-normal w-75 w-md-50 w-lg-25 mx-auto"
          to="/order"
        >
          訂單確認
        </RouterLink>
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
