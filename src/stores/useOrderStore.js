import { defineStore } from 'pinia';
import axios from 'axios';

const hexApi = import.meta.env.VITE_HEX_API_URL;
const apiPath = '2023shuttle';

export default defineStore('orders', {
  state: () => ({
    orderInfo: {
      user: {},
    },
    orders: [],
    calenderEvents: [],
  }),
  actions: {
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
        e.product.info.classTime.forEach((ele) => {
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
