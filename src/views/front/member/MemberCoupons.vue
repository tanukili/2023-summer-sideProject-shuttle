<script>
import { mapState, mapActions } from 'pinia';
import useCouponStore from '../../../stores/useCouponStore';

export default {
  methods: {
    ...mapActions(useCouponStore, ['getCoupons']),
  },
  mounted() {
    this.getCoupons();
  },
  computed: {
    ...mapState(useCouponStore, ['coupons']),
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
