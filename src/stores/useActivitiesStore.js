import { defineStore } from 'pinia';
import axios from 'axios';
import alertStore from './alertStore';

const api = import.meta.env.VITE_API_PATH;

export default defineStore('activities', {
  state: () => ({
    allActive: {},
    numActivities: {},
    unlimitedActivities: {},
  }),
  actions: {
    getActivities() {
      const { alertstyles, baseContent } = alertStore();
      axios
        .get(`${api}/activities`)
        .then((res) => {
          this.allActive = res.data.allActive;
          this.numActivities = res.data.numActivities;
          this.unlimitedActivities = res.data.unlimitedActivities;
        })
        .catch((err) => {
          if (err.message === 'Network Error') {
            alertstyles.toast.fire({
              ...baseContent('Render 伺服啟動中，請稍後。'),
            });
          } else {
            alertstyles.toast_danger.fire({
              ...baseContent('無法取得優惠資料，請洽客服。'),
            });
          }
        });
    },
  },
});
