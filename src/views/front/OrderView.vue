<script>
import { mapState, mapActions } from 'pinia';
import useCartsStore from '../../stores/useCartsStore';
import useCouponStore from '../../stores/useCouponStore';
import useOrderStore from '../../stores/useOrderStore';

export default {
  data() {
    return {
      newOrderId: '',
    };
  },
  methods: {
    ...mapActions(useCartsStore, ['getCart']),
    ...mapActions(useOrderStore, ['postOrder']),
  },
  mounted() {
    // 進入時觸發
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1200);
  },
  created() {
    this.getCart();
  },
  computed: {
    ...mapState(useCartsStore, ['carts', 'totalBill', 'nowAllDiscount']),
    ...mapState(useCouponStore, ['cookieCouponDiscount']),
    countFinal() {
      return this.totalBill - this.cookieCouponDiscount - this.nowAllDiscount;
    },
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
        <ol class="d-flex justify-content-around ps-0 fs-6 fw-bold">
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
      <!-- 訂單內容 -->
      <div class="row pt-lg-3">
        <div class="col-lg-6">
          <div class="d-flex flex-column h-100">
            <h4 class="text-center py-4">
              <span class="border-dashed-b pb-2">訂單內容</span>
            </h4>
            <div class="table-responsive-sm">
              <table
                class="table align-middle table-white text-center fs-8 fs-lg-7"
              >
                <thead>
                  <tr class="table-light bg-light">
                    <th scope="col">預覽</th>
                    <th scope="col">課程名稱</th>
                    <th scope="col">人數</th>
                    <th scope="col">小計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="course in carts" :key="course.id">
                    <td>
                      <img
                        :src="`${imgBase}${course.product.imageUrl}`"
                        :alt="`product${course.id}`"
                        class="img-fluid"
                        style="max-width: 150px"
                      />
                    </td>
                    <td>{{ course.product.title }}</td>
                    <td>{{ course.qty }}</td>
                    <td>{{ course.final_total }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul class="list-group rounded-2 bg-secondary">
              <li
                class="list-group-item pt-3 border-0 text-mellow d-flex justify-content-between"
              >
                <span class="fw-bold">目前總金額</span>NT$
                {{ totalBill }}
              </li>
              <li
                v-if="cookieCouponDiscount"
                class="list-group-item border-0 d-flex justify-content-between"
              >
                <span class="fw-bold">優惠券折抵</span
                ><span class="text-danger"
                  >NT$ - {{ cookieCouponDiscount }}</span
                >
              </li>
              <li
                class="list-group-item border-0 d-flex justify-content-between"
              >
                <span class="fw-bold">滿額折抵</span
                ><span class="text-danger">NT$ - {{ nowAllDiscount }}</span>
              </li>
              <li
                class="list-group-item pb-3 border-0 d-flex justify-content-between"
              >
                <span class="fw-bold">折扣後金額</span>NT$
                {{ totalBill - cookieCouponDiscount - nowAllDiscount }}
              </li>
            </ul>
            <RouterLink
              class="text-decoration-underline d-lg-inline-block mt-auto d-none"
              to="/carts"
            >
              <span class="material-symbols-outlined icon-semibold">
                undo
              </span>
              返回購物車
            </RouterLink>
          </div>
        </div>
        <!-- 填寫訂單資料 -->
        <div class="col-lg-6 mt-4 mt-lg-0">
          <div class="bg-primary-light rounded-2 px-5 py-4">
            <h4 class="text-center pb-4">
              <span class="border-dashed-b pb-2">填寫資料</span>
            </h4>
            <VForm novalidate @submit="postOrder" class="form-clear">
              <div class="form-floating mb-4">
                <VField
                  name="名稱"
                  type="text"
                  rules="required"
                  class="form-control fs-7"
                  id="name"
                  placeholder="name"
                />
                <label for="name" class="required">如何稱呼</label>
                <ErrorMessage name="名稱" />
              </div>
              <div class="form-floating mb-4">
                <VField
                  name="連絡電話"
                  type="phone"
                  rules="required|numeric|length:10"
                  class="form-control fs-7"
                  id="phone"
                  placeholder="0912345678"
                />
                <label for="phone" class="required">連絡電話</label>
                <ErrorMessage name="連絡電話" />
              </div>
              <div class="form-floating mb-4">
                <VField
                  name="連絡信箱"
                  type="email"
                  rules="required|email"
                  class="form-control fs-7"
                  id="email"
                  placeholder="name@example.com"
                />
                <label for="email" class="required">連絡信箱</label>
                <ErrorMessage name="連絡信箱" />
              </div>
              <div class="form-floating mb-4">
                <VField
                  name="付款方式"
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
                <ErrorMessage name="付款方式" />
              </div>
              <div class="form-floating pb-3 mb-5">
                <VField
                  name="備註"
                  as="textarea"
                  type="textarea"
                  value=""
                  class="form-control fs-7 text-wrap"
                  id="remark"
                  placeholder="備註欄位"
                  style="height: 116px"
                >
                </VField>
                <label for="remark">備註</label>
              </div>
              <div class="form-check mb-3">
                <VField
                  name="同意"
                  rules="required"
                  type="checkbox"
                  id="agreeNotice"
                  class="form-check-input"
                  value="isAgree"
                />
                <label class="form-check-label required" for="agreeNotice">
                  我已閱讀並同意 課程注意事項
                </label>
                <ErrorMessage name="同意" v-slot="{ message }"
                  ><span class="text-danger fs-9 ms-2">{{
                    (message = '請閱讀完後勾選')
                  }}</span>
                </ErrorMessage>
              </div>
              <!-- 儲存帳單金額 -->
              <VField
                class="d-none"
                name="finalBill"
                type="text"
                v-model="countFinal"
              />
              <button class="btn btn-primary w-100 mb-3 fs-6">資料送出</button>
            </VForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.floating-select::after {
  background-color: inherit !important;
  content: '*' !important;
  color: var(--bs-danger) !important;
  position: static !important;
}
</style>
