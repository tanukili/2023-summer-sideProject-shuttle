import { defineStore } from 'pinia';
import axios from 'axios';
import swal from 'sweetalert2';
import alertStore from '@/stores/alertStore';
import getDataStore from '@/stores/getDataStore';

export default defineStore('carts', {
  state: () => ({
    hexApi: import.meta.env.VITE_HEX_API_URL,
    apiPath: import.meta.env.VITE_HEX_API_PATH,
    alertstyles: alertStore().alertstyles,
  }),
  getters: {},
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
          .post(`${this.hexApi}api/${this.apiPath}/cart`, obj)
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
    // 修改數量
    putCart(id, newQty) {
      const obj = { data: { product_id: id, qty: newQty } };
      axios
        .put(`${this.hexApi}api/${this.apiPath}/cart/${id}`, obj)
        .then(() => {
          getDataStore().getFontData('cart');
        })
        .catch((err) => err.response);
    },
    // 刪除全部
    deleteAllCart() {
      const { alertstyles, baseContent } = alertStore();
      axios
        .delete(`${this.hexApi}api/${this.apiPath}/carts`)
        .then(() => {
          alertstyles.toast.fire({ ...baseContent('成功清空購物車！') });
          getDataStore().getFontData('cart');
        })
        .catch((err) => {
          alertstyles.toast_danger.fire({ ...baseContent(err.response.data.message) });
        });
    },
    // 刪除單筆
    deleteCart(id) {
      const { alertstyles, baseContent } = alertStore();
      axios
        .delete(`${this.hexApi}api/${this.apiPath}/cart/${id}`)
        .then(() => {
          alertstyles.toast.fire({ ...baseContent('刪除成功！') });
          getDataStore().getFontData('cart');
        })
        .catch((err) => {
          alertstyles.toast_danger.fire({ ...baseContent(err.response.data.message) });
        });
    },
    // 計算訂單金額細項
    countCart(couponDiscount, requiredPrice, percentOff) {
      const { cartData } = getDataStore();
      const sumSubtotals = cartData.reduce((acc, item) => acc + item.subtotal, 0); // 小計總和
      const fullDiscount = Math.floor(sumSubtotals / requiredPrice) * percentOff; // 滿額折抵
      const finalBill = sumSubtotals - fullDiscount - couponDiscount; // 最終金額
      return { sumSubtotals, couponDiscount, fullDiscount, finalBill };
    },
  },
});
