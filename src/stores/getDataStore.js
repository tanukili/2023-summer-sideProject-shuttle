import { defineStore } from 'pinia';
import axios from 'axios';
import alertStore from './alertStore';
import useActivitiesStore from './useActivitiesStore';

export default defineStore('getDataStore', {
  state: () => ({
    url: import.meta.env.VITE_API_PATH,
    hexUrl: import.meta.env.VITE_HEX_API_URL,
    path: import.meta.env.VITE_HEX_API_PATH,
    remoteData: null,
    cartData: [],
    singleInfo: null,
    pagination: null,
    jsonData: null,
  }),
  actions: {
    getFontData(targetName, id = '') {
      const apiUrl = `${this.hexUrl}api/${this.path}/${targetName}${id ? '/' + id : ''}`;
      const { alertstyles, baseContent } = alertStore();
      console.log(apiUrl);
      axios
        .get(apiUrl)
        .then((res) => {
          // 區分：全部 vs 指定單筆
          const updateTarget = id ? 'singleInfo' : 'remoteData';
          if (targetName === 'cart') {
            this.adjustCartData(res.data.data.carts);
          } else {
            this[updateTarget] = res.data[targetName];
          }
          const { pagination } = res.data;
          if (pagination) {
            this.pagination = pagination;
          }
        })
        .catch((err) => {
          alertstyles.toast_danger.fire({
            ...baseContent(`問題 ${err.response.status}，請洽客服。`),
          });
        });
    },
    // 調整購物車資料
    adjustCartData(data) {
      const { numActivities } = useActivitiesStore();
      this.cartData = [...data].map((item) => {
        // 小計計算（數量優惠）
        const { total, qty } = item;
        const { promotion } = item.product.state;
        const activity = numActivities[promotion];
        item.subtotal = total;
        if (!!activity && activity.requiredNum <= qty) {
          item.subtotal = Math.round(total * activity.percentOff);
        }
        return item;
      });
    },
    getJsonData(targetName, filter = '') {
      const apiUrl = `${this.url}/${targetName}${filter ? '/' + filter : ''}`;
      const { alertstyles, baseContent } = alertStore();
      console.log(apiUrl);
      axios
        .get(apiUrl)
        .then((res) => {
          this.jsonData = res.data;
        })
        .catch((err) => {
          alertstyles.toast_danger.fire({
            ...baseContent(`問題 ${err.response.status}，請洽客服。`),
          });
        });
    },
  },
});
