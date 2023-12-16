import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import axios from 'axios';

const api = import.meta.env.VITE_API_PATH;
const userId = document.cookie.replace(
  /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
  '$1'
);

export default defineStore('coupon', {
  state: () => ({
    favorites: [],
    favoritesObj: {},
  }),
  getters: {},
  actions: {
    addFavorite(prodcutId) {
      console.log(prodcutId);
      this.favorites.push(prodcutId);
      const obj = {
        productId: prodcutId,
        userId,
      };
      axios.post(`${api}/favorites`, obj).then((res) => {
        console.log(res.data);
        swal.fire({
          confirmButtonText: '確認',
          title: '已加入收藏',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutDown',
          },
        });
      });
    },
    toggleFavorite(prodcutId) {
      const isAdded = this.favorites.indexOf(prodcutId) !== -1;
      if (isAdded) {
        const id = this.favoritesObj[prodcutId];
        this.deleteFavorite(id);
      } else {
        const obj = {
          productId: prodcutId,
          userId,
        };
        axios.post(`${api}/favorites`, obj).then(() => {
          this.getFavorites();
          swal.fire({
            confirmButtonText: '確認',
            title: '已加入收藏',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutDown',
            },
          });
        });
      }
    },
    deleteFavorite(id) {
      axios.delete(`${api}/favorites/${id}`).then(() => {
        this.getFavorites();
        swal.fire({
          confirmButtonText: '確認',
          title: '已移除收藏',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutDown',
          },
        });
      });
    },
    getFavorites() {
      axios.get(`${api}/favorites?userId=${userId}`).then((res) => {
        const { data } = res;
        data.forEach((e) => {
          this.favoritesObj[e.productId] = e.id;
        });
        this.favorites = data.map((e) => e.productId);
      });
    },
  },
});
