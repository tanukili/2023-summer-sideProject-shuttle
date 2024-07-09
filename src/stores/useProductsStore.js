import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import axios from 'axios';

const hexApi = import.meta.env.VITE_HEX_API_URL;
const apiPath = '2023shuttle';

export default defineStore('products', {
  state: () => ({
    products: [],
    pagination: {},
    popProducts: [],
    singleProduct: {
      state: {},
      info: {
        detail: {},
      },
      calssDates: [],
      courseTime: '',
    },
    productPromotion: {},
  }),
  getters: {
    countQuota() {
      return this.singleProduct.info.capacity - this.singleProduct.info.studentNum;
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
    getAllProducts() {
      axios
        .get(`${hexApi}api/${apiPath}/products/all`)
        .then((res) => {
          this.products = res.data.products;
          const arrLength = this.products.length;
          let i = arrLength - 5;
          for (i; i < arrLength; i++) {
            this.popProducts.push(this.products[i]);
          }
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
          this.singleProduct.calssDates = classInfo.classTime.map((e) => {
            const unixTime = new Date(e[0] * 1000);
            const month = (unixTime.getMonth() + 1).toString().padStart(2, '0');
            const date = unixTime.getDate().toString().padStart(2, '0');
            return `${unixTime.getFullYear()}.${month}.${date}`;
          });
          console.log(this.singleProduct);
          console.log(this.productPromotion);
          this.singleProduct.courseTime = classInfo.classTime[0].map((e) => {
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
