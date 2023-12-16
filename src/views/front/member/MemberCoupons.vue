<script>
// 待修改：使用 pinia 會導致 切換到 MemberCoupons 或 MemberFavorite 出現報錯
// Unhandled error during execution of mounted hook 與 useStore(...)[key] is not a function
// import { mapState, mapActions } from 'pinia';
// import useCouponStore from '../../../stores/useCouponStore';

const api = import.meta.env.VITE_API_PATH;

export default {
  data() {
    return {
      coupons: {},
    };
  },
  methods: {
    // ...mapActions(useCouponStore, ['getCoupons']),
    getCoupons() {
      this.axios.get(`${api}/coupons`).then((res) => {
        console.log(res.data);
        this.coupons = res.data;
      });
    },
  },
  mounted() {
    this.getCoupons();
  },
  computed: {
    // ...mapState(useCouponStore, ['coupons']),
  },
};
</script>

<template>
  <div class="pb-5 p-4 bg-white">
    <div class="row g-3">
      <div
        class="col-6 bg-secondary-light border-dashed border-secondary rounded-1 p-4"
        v-for="coupon in coupons"
        :key="coupon.id"
      >
        <div class="d-flex justify-content-between align-items-center pb-2">
          <h2 class="d-flex align-items-center fs-6 mb-0">
            <span class="material-symbols-outlined icon-fill me-3">
              confirmation_number </span
            >{{ coupon.title }}
          </h2>
          <h4 class="fs-7 mb-0 me-2">期限： 2024.12.12</h4>
        </div>
        <p class="mb-2">
          優惠碼：<strong>{{ coupon.id }}</strong>
        </p>
        <p>
          不限訂單金額，現折<span class="text-danger">{{
            coupon.discount
          }}</span
          >元
        </p>
      </div>
    </div>
  </div>
</template>
