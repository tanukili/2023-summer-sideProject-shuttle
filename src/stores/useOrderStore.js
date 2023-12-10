import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import axios from 'axios';

const api = import.meta.env.VITE_API_PATH;
const hexApi = import.meta.env.VITE_HEX_API_PATH;
const apiPath = '2023shuttle';
const userId = document.cookie.replace(
  /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
  '$1'
);

export default defineStore('orders', {
  state: () => ({
    orderInfo: {
      user: {},
    },
  }),
  actions: {
    postOrder(values) {
      const obj = {
        data: {
          user: {
            name: values.名稱,
            email: values.連絡信箱,
            tel: values.連絡電話,
            address: 'none',
            userId,
          },
          message: values.備註,
          payment: values.付款方式,
          finalBill: values.finalBill,
        },
      };
      axios
        .post(`${hexApi}api/${apiPath}/order`, obj)
        .then((res) => {
          const newOrderId = res.data.orderId;
          document.cookie = 'couponDiscount=;';
          document.cookie = `newOrderId=${newOrderId}; max-age=86400;Secure`;
          this.fixBill(values.finalBill, newOrderId);
          swal.fire({
            icon: 'success',
            confirmButtonText: '確認',
            title: res.data.message,
            didClose: () => {
              this.router.push({ name: 'order-established' });
            },
          });
        })
        .catch((err) => {
          swal.fire(`問題${err.response.status}，請洽客服`);
        });
    },
    // 另外儲存訂單金額
    fixBill(total, id) {
      const obj = {
        id,
        total,
      };
      axios.post(`${api}/ordersFinalBill`, obj);
    },
    getOrder(id) {
      axios.get(`${hexApi}api/${apiPath}/order/${id}`).then((res) => {
        this.orderInfo = res.data.order;
      });
    },
  },
});
