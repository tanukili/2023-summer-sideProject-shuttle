import { defineStore } from 'pinia';
import axios from 'axios';
import swal from 'sweetalert2';
import alertStore from '@/stores/alertStore';

const hexApi = import.meta.env.VITE_HEX_API_URL;
const apiPath = '2023shuttle';

export default defineStore('carts', {
  state: () => ({
    carts: [],
    totalBill: 0,
    nowAllDiscount: 0,
    alertstyles: alertStore().alertstyles,
  }),
  getters: {
    cartsNum() {
      return this.carts.length;
    },
  },
  actions: {
    addToCart(id, qty, quota, buyNow) {
      const obj = { data: { product_id: id, qty } };
      const isOverQuota = this.checkQuota(qty, quota);
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (!token) {
        swal.fire('請先登入註冊');
        this.router.push({ name: 'login' });
      } else if (!isOverQuota) {
        axios
          .post(`${hexApi}api/${apiPath}/cart`, obj)
          .then(() => {
            this.checkoutNow(buyNow);
          })
          .catch((err) => {
            swal.fire(`問題${err.response.status}，抱歉請洽客服`);
          });
      }
    },
    // 檢查名額
    checkQuota(addNum, quota) {
      if (addNum >= quota) {
        swal.fire({
          title: '目前名額不足，請洽客服',
          showConfirmButton: false,
          icon: 'warning',
          html: '<p class="mb-2"><span class="icon-fill material-symbols-outlined align-bottom"> call </span>：<a href="tel:0912345678" class="link-hover">0912345678</a></p><p><span class="icon-fill material-symbols-outlined align-bottom"> mail </span>：<a href="mailto:Shuttle2013@gmail.com" class="link-hover">Shuttle2013@gmail.com</a></p>',
        });
        return true;
      }
      return false;
    },
    // 直接購買 還是 加入購物車
    checkoutNow(boolean) {
      const { alertstyles, baseContent, btns } = alertStore();
      if (boolean) {
        this.router.push({ name: 'carts' });
      } else {
        alertstyles.alert_btns
          .fire({
            ...baseContent('成功加入購物車', 1, '繼續購物'),
            ...btns('立即結帳'),
          })
          // 按鈕事件
          .then((res) => {
            if (res.isConfirmed) {
              this.router.push({ name: 'products' });
            } else if (res.isDenied) {
              this.router.push({ name: 'carts' });
            }
          });
      }
    },
    // 取得購物車
    getCart() {
      axios
        .get(`${hexApi}api/${apiPath}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
          // 計算 numActive 優惠
          this.carts.forEach((e) => {
            const { promotion } = e.product.state;
            // 暫時的寫法
            if (promotion === '2023-spring' && e.qty >= 2) {
              e.final_total = Math.round(e.total * 0.85);
            }
          });
          // 總金額
          this.totalBill = this.carts.reduce((acc, e) => acc + e.final_total, 0);
          // 折扣金額 暫時的寫法
          const num = Math.floor(this.totalBill / 3000);
          this.nowAllDiscount = 300 * num;
        })
        .catch((err) => err.response);
    },
    // 修改數量
    putCart(id, newQty) {
      const obj = { data: { product_id: id, qty: newQty } };
      axios
        .put(`${hexApi}api/${apiPath}/cart/${id}`, obj)
        .then(() => {
          this.getCart();
        })
        .catch((err) => err.response);
    },
    // 刪除全部
    deleteAllCart() {
      axios
        .delete(`${hexApi}api/${apiPath}/carts`)
        .then((res) => {
          swal.fire({
            title: res.data.message,
            confirmButtonText: '確認',
            didClose: () => {
              this.getCart();
            },
          });
        })
        .catch((err) => {
          swal.fire({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
    // 刪除單筆
    deleteCart(id) {
      axios
        .delete(`${hexApi}api/${apiPath}/cart/${id}`)
        .then((res) => {
          swal.fire({
            title: res.data.message,
            confirmButtonText: '確認',
            didClose: () => {
              this.getCart();
            },
          });
        })
        .catch((err) => {
          swal.fire({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
  },
});
