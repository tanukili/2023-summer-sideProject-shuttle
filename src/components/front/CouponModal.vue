<template>
  <p class="fs-8 text-gray-600 mb-2">
    您有
    {{ availableCoupons.length }}
    張優惠券可以使用
    <template v-if="coupons.length - availableCoupons.length">
      （ 另有 {{ coupons.length - availableCoupons.length }} 張未達使用限制 ）
    </template>
    。
  </p>
  <button
    type="button"
    class="btn btn-primary-light fs-7"
    data-bs-toggle="modal"
    data-bs-target="#couponModal"
  >
    {{ couponId && clickedCoupon.title ? `已套用「${clickedCoupon.title}」` : '選擇優惠券' }}
  </button>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable text-start">
      <div class="modal-content">
        <div class="modal-header bg-primary border-dashed border-white border-bottom-0 pb-3">
          <h3 class="modal-title fs-6 text-white" id="couponModalLabel">優惠券一覽</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x-lg text-white"></i>
          </button>
        </div>
        <div class="modal-body px-3 py-7 p-sm-5">
          <div v-if="!coupons.length" class="d-flex flex-column align-items-center lh-1">
            <i
              class="bi bi-exclamation-lg text-gray-200 p-4 rounded-circle mb-3"
              style="font-size: 80px; border: 6px solid var(--bs-gray-100)"
            ></i>
            <p class="text-center fs-6 fw-semibold">沒有可使用的優惠券</p>
          </div>
          <form v-else>
            <p>單筆訂單只能使用一張優惠券。</p>
            <div
              v-for="coupon in coupons"
              :key="coupon.id"
              class="border-dashed border-secondary rounded-1 p-4 fs-8 my-2"
              :class="[coupon.isAvailable ? 'bg-white' : 'bg-gray-100 bg-opacity-50 text-gray-200']"
            >
              <div class="form-check d-flex align-items-center">
                <input
                  class="form-check-input me-2"
                  type="radio"
                  name="coupon"
                  :id="coupon.id"
                  @click="toggleCoupon(coupon), (this.clickedCoupon = { ...coupon })"
                  :checked="couponId === coupon.id"
                  :disabled="!coupon.isAvailable"
                />
                <label class="form-check-label fs-6 fw-bold" :for="coupon.id">
                  {{ coupon.title }}
                </label>
                <i
                  v-if="couponId === coupon.id"
                  class="bi bi-check-circle-fill ms-1 text-success"
                ></i>
                <span class="ms-auto">期限：{{ unixToStr(coupon.exp) }}</span>
              </div>
              <p class="mt-2">
                {{ coupon.description }}
                <i v-if="coupon.quota > total" class="text-danger">
                  還差 {{ coupon.quota - total }} 元
                </i>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import alertStore from '@/stores/alertStore';
import getDateStore from '@/stores/getDataStore';
import utilitiesStore from '@/stores/utilitiesStore';
import useCouponStore from '@/stores/useCouponStore';

export default {
  props: ['sumSubtotals'],
  data() {
    return {
      coupons: [],
      clickedCoupon: {},
      total: 0,
    };
  },
  computed: {
    ...mapState(alertStore, ['alertstyles']),
    ...mapState(getDateStore, ['jsonData']),
    ...mapState(useCouponStore, ['couponId']),
    availableCoupons() {
      return this.coupons.filter((coupon) => coupon.isAvailable);
    },
  },
  methods: {
    ...mapActions(alertStore, ['baseContent']),
    ...mapActions(getDateStore, ['getJsonData']),
    ...mapActions(utilitiesStore, ['unixToStr']),
    ...mapActions(useCouponStore, ['toggleCoupon', 'getCookieCoupon']),
    updateAvailable() {
      this.coupons.forEach((coupon, index) => {
        const isAvailable = coupon.quota <= this.total;
        this.coupons[index].isAvailable = isAvailable;
      });
    },
  },
  watch: {
    jsonData(newValue) {
      this.coupons = [...newValue];
      this.updateAvailable();
      this.clickedCoupon = { ...this.coupons.find((coupon) => coupon.id === this.couponId) };
    },
    sumSubtotals(newValue) {
      this.total = newValue;
      // 檢查小計總和 > 優惠券使用限制
      const { quota } = this.clickedCoupon;
      if (newValue < quota) {
        this.alertstyles.alert.fire({
          ...this.baseContent('優惠券移除', 2),
          text: '目前金額未達該券使用限制',
        });
        this.clickedCoupon = {};
        this.toggleCoupon();
      }
      this.updateAvailable();
    },
  },
  mounted() {
    const nowDate = Math.floor(new Date().getTime() / 1000);
    this.getJsonData('coupons', `?is_used=false&exp_gte=${nowDate}`);
    this.getCookieCoupon();
    this.total = this.sumSubtotals;
  },
};
</script>

<style lang="scss"></style>
