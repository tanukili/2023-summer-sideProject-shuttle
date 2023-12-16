import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import axios from 'axios';

const api = import.meta.env.VITE_API_PATH;

export default defineStore('coupon', {
  state: () => ({
    couponDiscount: 0,
    coupons: {},
  }),
  getters: {
    cookieCouponDiscount() {
      const couponDiscount = document.cookie.replace(
        /(?:(?:^|.*;\s*)couponDiscount\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      return couponDiscount;
    },
  },
  actions: {
    useCoupon(code) {
      axios
        .get(`${api}/coupons/${code}`)
        .then((res) => {
          const obj = res.data;
          // if (obj.is_used) {
          //   swal.fire('優惠券已使用');
          //   return;
          // }
          swal.fire({
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
          this.couponDiscount += res.data.discount;
          document.cookie = `couponDiscount=${this.couponDiscount}; max-age=86400;Secure`;
          obj.is_used = true;
          // this.putCouponState(code, obj);
        })
        .catch(() => {
          swal.fire({
            icon: 'error',
            title: '優惠券使用失敗',
          });
        });
    },
    putCouponState(code, obj) {
      axios.put(`${api}/coupons/${code}`, obj).then((res) => {
        swal.fire({
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
        this.couponCode = '';
      });
    },
    getCoupons() {
      axios.get(`${api}/coupons`).then((res) => {
        console.log(res.data);
        this.coupons = res.data;
      });
    },
  },
});
