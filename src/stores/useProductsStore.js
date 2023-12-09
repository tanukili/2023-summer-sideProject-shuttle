import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import axios from 'axios';

const hexApi = import.meta.env.VITE_HEX_API_PATH;
const apiPath = '2023shuttle';

export default defineStore('products', {
  state: () => ({
    products: [],
    pagination: {},
    singleProduct: {
      state: {},
      info: {},
      calssDates: [],
      courseTime: '',
    },
    productPromotion: {},
  }),
  getters: {
    countQuota() {
      return (
        this.singleProduct.info.capacity - this.singleProduct.info.studentNum
      );
    },
  },
  actions: {
    getProducts(page = 1) {
      axios
        .get(`${hexApi}api/${apiPath}/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          swal.fire(err.message);
        });
    },
    getProduct(id) {
      axios
        .get(`${hexApi}api/${apiPath}/product/${id}`)
        .then((res) => {
          this.singleProduct = res.data.product;
          this.productPromotion = res.data.product.state.promotion;
          const classInfo = this.singleProduct.info;
          this.singleProduct.calssDates = classInfo.ClassTime.map((e) => {
            const unixTime = new Date(e[0] * 1000);
            const month = unixTime.getMonth().toString().padStart(2, '0');
            const date = unixTime.getDate().toString().padStart(2, '0');
            return `${unixTime.getFullYear()}.${month}.${date}`;
          });
          this.singleProduct.courseTime = classInfo.ClassTime[0].map((e) => {
            const unixTime = new Date(e * 1000);
            const hour = unixTime.getHours().toString().padStart(2, '0');
            const min = unixTime.getMinutes().toString().padStart(2, '0');
            return `${hour}:${min}`;
          });
        })
        .catch((err) => err.response);
    },
  },
});
