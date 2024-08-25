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
          <li class="breadcrumb-item active" aria-current="page">填寫訂單</li>
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
            style="width: 66.66%"
            aria-valuenow="66.66"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="row pt-lg-3">
        <!-- 訂單內容 -->
        <div class="col-lg-6">
          <div class="d-flex flex-column h-100">
            <h4 class="text-center py-4">
              <span class="border-dashed-b pb-2">訂單內容</span>
            </h4>
            <div class="table-responsive">
              <table
                class="table align-middle table-white text-center fs-8 fs-lg-7"
                style="min-width: 400px"
              >
                <thead>
                  <tr class="table-light bg-light">
                    <th scope="col" width="120px">預覽</th>
                    <th scope="col">課程名稱</th>
                    <th scope="col">人數</th>
                    <th scope="col" width="96px">小計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="course in cart" :key="course.id">
                    <td>
                      <img
                        :src="course.product.imageUrl"
                        :alt="`product${course.id}`"
                        class="img-fluid"
                        style="max-width: 120px; max-height: 80px"
                      />
                    </td>
                    <td class="text-start fw-bold">{{ course.product.title }}</td>
                    <td>{{ course.qty }}</td>
                    <td>{{ course.subtotal }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row justify-content-center align-items-end mx-sm-2">
              <div class="col d-none d-sm-block">
                <RouterLink class="text-decoration-underline pt-3" to="/carts">
                  <span class="material-symbols-outlined icon-semibold">undo</span>
                  返回購物車
                </RouterLink>
              </div>
              <ul class="col-8 col-sm-6 col-md-5 col-lg-6 list-group rounded-2 py-4 bg-body">
                <li
                  class="list-group-item border-0 d-flex justify-content-between px-4 pb-2 fw-bold"
                >
                  小計總和：
                  <span class="text-end">NT$ {{ cartOverview.sumSubtotals }}</span>
                </li>
                <li
                  v-if="cartOverview.couponDiscount"
                  class="list-group-item border-0 d-flex justify-content-between px-4 py-2 fw-bold"
                >
                  優惠券折抵：
                  <span class="text-danger">- {{ cartOverview.couponDiscount }}</span>
                </li>
                <li
                  v-if="cartOverview.fullDiscount"
                  class="list-group-item border-0 d-flex justify-content-between px-4 py-2 fw-bold"
                >
                  滿額折抵：
                  <span class="text-danger">- {{ cartOverview.fullDiscount }}</span>
                </li>
                <li
                  class="list-group-item pt-2 px-4 border-0 d-flex justify-content-between fw-bold"
                >
                  <span class="fw-bold">應付金額</span>
                  NT${{ cartOverview.finalBill }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 填寫訂單資料 -->
        <div class="col-lg-6 mt-4 mt-lg-0">
          <div class="bg-primary-light rounded-2 px-5 py-4">
            <h4 class="text-center pb-4">
              <span class="border-dashed-b pb-2">填寫資料</span>
            </h4>
            <VForm
              novalidate
              @submit="postOrder"
              @invalid-submit="onInvalidSubmit"
              class="form-clear"
            >
              <div class="form-floating mb-4">
                <VField
                  name="name"
                  type="text"
                  rules="required"
                  class="form-control fs-7"
                  id="name"
                  placeholder="name"
                />
                <label for="name" class="required">如何稱呼</label>
                <ErrorMessage name="name" v-slot="{ message }">
                  <span>{{ message.replace('name', '名稱') }}</span>
                </ErrorMessage>
              </div>
              <div class="form-floating mb-4">
                <VField
                  name="tel"
                  type="tel"
                  rules="required|numeric|length:10"
                  class="form-control fs-7"
                  id="tel"
                  placeholder="0912345678"
                />
                <label for="tel" class="required">連絡電話</label>
                <ErrorMessage name="tel" v-slot="{ message }">
                  <span>{{ message.replace('tel', '連絡電話') }}</span>
                </ErrorMessage>
              </div>
              <div class="form-floating mb-4">
                <VField
                  name="email"
                  type="email"
                  rules="required|email"
                  class="form-control fs-7"
                  id="email"
                  placeholder="name@example.com"
                />
                <label for="email" class="required">連絡信箱</label>
                <ErrorMessage name="email" v-slot="{ message }">
                  <span>{{ message.replace('email', '信箱') }}</span>
                </ErrorMessage>
              </div>
              <div class="form-floating mb-4">
                <VField
                  name="payment"
                  rules="required"
                  as="select"
                  class="form-select w-100 ps-3 lh-lg fs-7"
                  id="payment"
                  placeholder="付款方式"
                >
                  <option value="" disabled hidden>請選擇付款方式</option>
                  <option value="creditCard">信用卡</option>
                  <option value="cash">現金</option>
                  <option value="transfer">帳戶匯款</option>
                  <option value="linePay">Line Pay</option>
                </VField>
                <label for="payment" class="floating-select">付款方式</label>
                <ErrorMessage name="payment" v-slot="{ message }">
                  <span>{{ message.replace('payment', '付款方式') }}</span>
                </ErrorMessage>
              </div>
              <div class="form-floating pb-3 mb-5">
                <VField
                  name="message"
                  as="textarea"
                  type="textarea"
                  value=""
                  class="form-control fs-7 text-wrap"
                  id="remark"
                  placeholder="備註欄位"
                  style="height: 116px"
                ></VField>
                <label for="remark">備註</label>
              </div>
              <div class="form-check mb-3">
                <VField
                  name="isAgree"
                  rules="required"
                  type="checkbox"
                  id="isAgree"
                  class="form-check-input"
                  value="isAgree"
                />
                <label class="form-check-label required" for="isAgree">
                  我已閱讀並同意 課程注意事項
                </label>
                <ErrorMessage name="isAgree">
                  <span class="text-danger fs-9 ms-2">{{ (message = '請閱讀完後勾選') }}</span>
                </ErrorMessage>
              </div>
              <!-- 儲存帳單金額 -->
              <VField
                class="d-none"
                name="finalBill"
                type="text"
                v-model="cartOverview.finalBill"
              />
              <button class="btn btn-primary w-100 mb-3 fs-6">資料送出</button>
            </VForm>
          </div>
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

export default {
  data() {
    return {
      hexApi: import.meta.env.VITE_HEX_API_URL,
      apiPath: import.meta.env.VITE_HEX_API_PATH,
      newOrderId: '',
      cart: [],
    };
  },
  computed: {
    ...mapState(alertStore, ['alertstyles']),
    ...mapState(getDataStore, ['cartData']),
    ...mapState(useActivitiesStore, ['allActive']),
    ...mapState(useCartsStore, ['cartOverview']),
    ...mapState(useCouponStore, ['couponDiscount']),
    cartOverview() {
      const { requiredPrice, percentOff } = this.allActive;
      return this.countCart(this.couponDiscount, requiredPrice, percentOff);
    },
  },
  methods: {
    ...mapActions(alertStore, ['baseContent']),
    ...mapActions(getDataStore, ['getFontData']),
    ...mapActions(useActivitiesStore, ['getActivities']),
    ...mapActions(useCartsStore, ['countCart']),
    ...mapActions(useCouponStore, ['getCookieCoupon', 'toggleCoupon', 'useCoupon']),
    postOrder(value) {
      const { name, tel, email, payment, message } = value;
      const { sumSubtotals, couponDiscount, fullDiscount, finalBill } = this.cartOverview;
      const obj = {
        data: {
          user: {
            name,
            tel,
            email,
            address: 'none',
            userId: 2,
            cartOverview: {
              sumSubtotals,
              couponDiscount,
              fullDiscount,
              finalBill,
            },
          },
          payment,
          message,
        },
      };
      this.axios
        .post(`${this.hexApi}api/${this.apiPath}/order`, obj)
        .then((res) => {
          const { orderId } = res.data;
          this.useCoupon();
          document.cookie = `orderId=${orderId}; max-age=86400;Secure`;
          this.alertstyles.alert.fire({
            ...this.baseContent(res.data.message, 1),
            didClose: () => {
              this.$router.replace({ name: 'order-established' });
              this.getFontData('cart');
            },
          });
        })
        .catch((err) => {
          this.alertstyles.toast_danger.fire(`問題${err.response.status}，請洽客服`);
        });
    },
    // 無效提交事件
    onInvalidSubmit({ errors }) {
      const firstErr = Object.keys(errors)[0];
      const domRect = document.querySelector(`#${firstErr}`).getBoundingClientRect();
      const { scrollTop } = document.documentElement; // 目前視窗滾動位置
      const top = domRect.top + scrollTop - 226; // 元素相對視窗高度 + 視窗已滾動高度 - 審美上微調
      window.scrollTo({ top });
    },
  },
  watch: {
    cartData(newValue) {
      this.cart = [...newValue];
    },
  },
  mounted() {
    this.getFontData('cart');
    // 取得相關優惠（F5後仍可取得）
    this.getCookieCoupon();
    this.getActivities();
  },
};
</script>

<style>
.floating-select::after {
  background-color: inherit !important;
  content: '*' !important;
  color: var(--bs-danger) !important;
  position: static !important;
}
</style>
