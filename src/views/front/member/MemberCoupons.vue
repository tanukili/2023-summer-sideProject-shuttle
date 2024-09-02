<template>
  <div class="px-5 py-4 bg-white">
    <div class="row gx-3 gy-4">
      <div class="col-lg-6" v-for="coupon in coupons" :key="coupon.id">
        <div class="bg-secondary-light border-dashed border-secondary rounded-1 px-3 py-4 h-100">
          <div class="d-flex flex-column">
            <h2 class="fs-6 mb-2">
              <span class="material-symbols-outlined icon-fill align-top">confirmation_number</span>
              {{ coupon.title }}
            </h2>
            <p class="mb-3 fs-8">{{ coupon.description }}</p>
            <div class="d-flex justify-content-between mt-auto fs-8">
              <Router-link to="/carts" class="link-primary text-decoration-underline">
                前往購物車
              </Router-link>
              <span>期限：{{ unixToStr(coupon.exp) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import getDataStore from '@/stores/getDataStore';
import utilitiesStore from '@/stores/utilitiesStore';

export default {
  data() {
    return {
      coupons: {},
    };
  },
  computed: {
    ...mapState(getDataStore, ['jsonData']),
  },
  methods: {
    ...mapActions(getDataStore, ['getJsonData']),
    ...mapActions(utilitiesStore, ['unixToStr']),
  },
  watch: {
    jsonData(newValue) {
      this.coupons = newValue;
    },
  },
  mounted() {
    const nowDate = Math.floor(new Date().getTime() / 1000);
    this.getJsonData('coupons', `?is_used=false&exp_gte=${nowDate}`);
  },
};
</script>
