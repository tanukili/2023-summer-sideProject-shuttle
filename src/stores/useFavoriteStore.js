import { defineStore } from 'pinia';
import axios from 'axios';
import alertStore from './alertStore';

const api = import.meta.env.VITE_API_PATH;
const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1');

export default defineStore('favorite', {
  state: () => ({
    favorites: [],
    favoritesObj: {},
  }),
  getters: {},
  actions: {
    toggleFavorite(prodcutId) {
      const { alertstyles, baseContent } = alertStore();
      const haveAdded = this.favorites.indexOf(prodcutId) !== -1;
      if (haveAdded) {
        const id = this.favoritesObj[prodcutId];
        this.deleteFavorite(id);
      } else {
        const obj = {
          productId: prodcutId,
          userId,
        };
        axios.post(`${api}/favorites`, obj).then(() => {
          this.getFavorites();
          alertstyles.toast.fire({ ...baseContent('成功加入收藏') });
        });
      }
    },
    deleteFavorite(id) {
      const { alertstyles, baseContent } = alertStore();
      axios.delete(`${api}/favorites/${id}`).then(() => {
        this.getFavorites();
        alertstyles.toast.fire({ ...baseContent('已移除收藏') });
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
