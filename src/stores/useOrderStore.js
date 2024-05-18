import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import axios from 'axios';

const api = import.meta.env.VITE_API_PATH;
const hexApi = import.meta.env.VITE_HEX_API_URL;
const apiPath = '2023shuttle';
const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1');

export default defineStore('orders', {
  state: () => ({
    orderInfo: {
      user: {},
    },
    orders: [],
    calenderEvents: [],
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
    getfixBill() {
      axios.get(`${api}/ordersFinalBill`).then((res) => {
        const billArr = [...res.data].reverse().map((e) => e.total);
        console.log(billArr);
        this.orders.forEach((e, i) => {
          e.finalBill = billArr[i];
        });
      });
    },
    getOrder(id) {
      axios.get(`${hexApi}api/${apiPath}/order/${id}`).then((res) => {
        this.orderInfo = res.data.order;
      });
    },
    getOrders() {
      axios.get(`${hexApi}api/${apiPath}/orders`).then((res) => {
        this.orders = res.data.orders;
        this.orders.forEach((e) => {
          e.products = Object.values(e.products);
        });
        this.getfixBill();
        this.calenderEvent();
      });
    },
    // 整理日歷事件
    calenderEvent() {
      const course = [];
      this.orders.forEach((e) => {
        course.push(...e.products);
      });
      this.calenderEvents = course.map((e) => {
        const obj = {
          title: '',
          start: '',
          end: '',
          description: '',
          borderColor: 'var(--bs-success)',
          startStr: '',
        };
        obj.title = e.product.title;
        obj.description = `${e.qty} 位學員`;
        e.product.info.ClassTime.forEach((ele) => {
          const date = this.countDate(ele[0]);
          obj.start = `${date} ${this.countTime(ele[0])}`;
          obj.end = `${date} ${this.countTime(ele[1])}`;
          obj.startStr = `${obj.end}~${this.countTime(ele[0])}`;
        });
        return obj;
      });
    },
    countDate(time) {
      const unixTime = new Date(time * 1000);
      const year = unixTime.getFullYear();
      const month = (unixTime.getMonth() + 1).toString().padStart(2, '0');
      const date = unixTime.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${date}`;
    },
    countTime(time) {
      const unixTime = new Date(time * 1000);
      const hour = unixTime.getHours().toString().padStart(2, '0');
      const min = unixTime.getMinutes().toString().padStart(2, '0');
      return `${hour}:${min}`;
    },
  },
});
