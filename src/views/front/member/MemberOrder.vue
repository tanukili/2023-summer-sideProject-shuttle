<template>
  <div class="bg-white p-7 py-md-5 rounded">
    <h2 class="title fs-4 text-primary mb-7 mb-md-5">
      <span class="border-primary">訂單明細</span>
    </h2>
    <div v-if="order">
      <div class="d-flex justify-content-between px-3 mb-4">
        <ul class="list-unstyled mb-0">
          <li class="py-1">訂單編號：{{ order.id }}</li>
          <li class="py-1">成立日期：{{ unixToStr(order.create_at) }}</li>
        </ul>
        <div>
          <button
            class="btn btn-sm fs-8 btn-outline-primary shadow-sm align-top"
            :disabled="order.is_paid"
            @click="noticePaied(id)"
            type="button"
          >
            <i class="bi" :class="[order.is_paid ? 'bi-bell-fill' : 'bi-bell']"></i>
            {{ order.is_paid ? '已通知付款' : '通知付款' }}
          </button>
          <span
            class="badge text-white rounded-1 fs-7 ms-2"
            :class="[order.is_paid ? 'bg-success' : 'bg-danger']"
          >
            {{ order.is_paid ? '完成付款' : '未付款' }}
          </span>
        </div>
      </div>
      <table class="table table-white text-center align-middle">
        <thead>
          <tr>
            <th scope="col" width="120">預覽圖片</th>
            <th scope="col">課程名稱</th>
            <th scope="col">原價</th>
            <th scope="col">人數</th>
            <th scope="col">小計</th>
            <th scope="col" width="140"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in order.products" :key="product.id">
            <td>
              <img
                :src="product.product.imageUrl"
                :alt="product.product.title"
                style="height: 100px"
              />
            </td>
            <td>
              <h3 class="fs-7 mb-0">{{ product.product.title }}</h3>
              <small v-if="product.product.state.promotion">
                適用優惠：{{ activities[product.product.state.promotion].title }}
              </small>
            </td>
            <td>
              <span
                :class="{
                  'text-decoration-line-through':
                    product.product.origin_price !== product.product.price,
                }"
              >
                {{ product.product.origin_price }}
              </span>
              <span
                v-if="product.product.origin_price !== product.product.price"
                class="text-danger d-block"
              >
                {{ product.product.price }}
              </span>
            </td>
            <td>{{ product.qty }} 位</td>
            <td>
              <span
                :class="{
                  'text-decoration-line-through':
                    activities[product.product.state.promotion]?.requiredNum === product.qty,
                }"
              >
                {{ product.total }}
              </span>
              <span
                v-if="activities[product.product.state.promotion]?.requiredNum === product.qty"
                class="text-danger d-block"
              >
                {{ product.total * activities[product.product.state.promotion].percentOff }}
              </span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-outline-primary p-2 mx-2 w-75 fs-8 shadow-none"
                data-bs-toggle="modal"
                data-bs-target="#productInfo"
                @click="clickedCourse = { ...product }"
              >
                課程資訊
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex align-items-end justify-content-between px-3">
        <RouterLink class="text-end fs-8 pt-5" to="/member/orders">
          <span class="material-symbols-outlined icon-semibold me-1">undo</span>
          <span class="align-middle border-bottom">返回訂單列表</span>
        </RouterLink>
        <ul class="list-group rounded-2 text-mellow">
          <li class="list-group-item border-0 d-flex justify-content-between py-2">
            原始金額：
            <span class="fw-bold ms-2">NT$ {{ order.user.cartOverview.sumSubtotals }}</span>
          </li>
          <li
            v-if="order.user.cartOverview.couponDiscount"
            class="list-group-item border-0 d-flex justify-content-between py-2"
          >
            優惠券折抵：
            <span class="fw-bold ms-2 text-danger">
              -{{ order.user.cartOverview.couponDiscount }}
            </span>
          </li>
          <li
            v-if="order.user.cartOverview.fullDiscount"
            class="list-group-item border-0 d-flex justify-content-between py-2"
          >
            滿額折抵：
            <span class="fw-bold ms-2 text-danger">
              -{{ order.user.cartOverview.fullDiscount }}
            </span>
          </li>
          <li class="list-group-item border-0 d-flex justify-content-between py-2">
            訂單總金額：
            <span class="fw-bold ms-2">NT$ {{ order.user.cartOverview.finalBill }}</span>
          </li>
        </ul>
      </div>
    </div>
    <ProductModal :clicked-course="clickedCourse" />
  </div>
</template>

<script>
import ProductModal from '@/components/front/member/ProductModal.vue';
import { mapState, mapActions } from 'pinia';
import alertStore from '@/stores/alertStore';
import getDataStore from '@/stores/getDataStore';
import useActivitiesStore from '@/stores/useActivitiesStore';
import utilitiesStore from '@/stores/utilitiesStore';

export default {
  components: { ProductModal },
  data() {
    return {
      order: null,
      clickedCourse: {},
      id: this.$route.params.id,
      hexApi: import.meta.env.VITE_HEX_API_URL,
      apiPath: import.meta.env.VITE_HEX_API_PATH,
    };
  },
  computed: {
    ...mapState(alertStore, ['alertstyles']),
    ...mapState(getDataStore, ['singleInfo']),
    ...mapState(useActivitiesStore, ['numActivities', 'unlimitedActivities']),
    originBill() {
      const products = Object.values(this.order.products);
      return products.reduce((all, product) => all + product.product.origin_price * product.qty, 0);
    },
    finalBill() {
      return this.order.total;
    },
    activities() {
      return { ...this.numActivities, ...this.unlimitedActivities };
    },
  },
  methods: {
    ...mapActions(alertStore, ['baseContent']),
    ...mapActions(getDataStore, ['getFontData']),
    ...mapActions(useActivitiesStore, ['getActivities']),
    ...mapActions(utilitiesStore, ['unixToStr']),
    noticePaied(id) {
      this.axios
        .post(`${this.hexApi}api/${this.apiPath}/pay/${id}`)
        .then(() => {
          this.alertstyles.toast.fire('完成付款通知');
          this.getFontData('order', id);
        })
        .catch((err) => {
          this.alertstyles.toast_danger.fire(`問題${err.response.status}，抱歉請洽客服`);
        });
    },
  },
  watch: {
    singleInfo(newValue) {
      this.order = { ...newValue };
    },
  },
  mounted() {
    this.getFontData('order', this.id);
    this.getActivities();
  },
};
</script>

<style lang="scss"></style>
