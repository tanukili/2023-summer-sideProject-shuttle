import { defineStore } from 'pinia';
import axios from 'axios';
import alertStore from './alertStore';

export default defineStore('coupon', {
  state: () => ({
    url: import.meta.env.VITE_API_PATH,
    couponDiscount: 0,
    couponId: '',
    coupon: null,
  }),
  getters: {
    cookieCouponDiscount() {
      const cookieValue = document.cookie.replace(
        /(?:(?:^|.*;\s*)couponDiscount\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (cookieValue) {
        return cookieValue;
      }
      return 0;
    },
  },
  actions: {
    // 寫入、清除 cookie 中 coupon 資訊
    toggleCoupon(coupon = '') {
      const couponObj = coupon ? JSON.stringify(coupon) : '';
      document.cookie = `coupon=${couponObj}; max-age=86400;Secure`;
      this.getCookieCoupon();
    },
    getCookieCoupon() {
      const couponObj = document.cookie.replace(
        /(?:(?:^|.*;\s*)coupon\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      this.coupon = couponObj ? JSON.parse(couponObj) : {};
      const { id, discount } = this.coupon;
      this.couponId = id || '';
      this.couponDiscount = discount || 0;
    },
    useCoupon(id = this.couponId) {
      const { alertstyles } = alertStore();
      const obj = { ...this.coupon };
      obj.is_used = true;
      axios
        .put(`${this.url}/coupons/${id}`, obj)
        .then(() => {
          this.toggleCoupon();
        })
        .catch((err) => {
          alertstyles.toast_danger.fire(`問題${err.response.status}，請洽客服`);
        });
    },
  },
});
