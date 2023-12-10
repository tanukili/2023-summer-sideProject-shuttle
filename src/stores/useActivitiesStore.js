import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import axios from 'axios';

const api = import.meta.env.VITE_API_PATH;

export default defineStore('activities', {
  state: () => ({
    allActive: {},
    numActivities: {},
    unlimitedActivities: {},
  }),
  actions: {
    getActivities() {
      axios
        .get(`${api}/activities`)
        .then((res) => {
          this.allActive = res.data.allActive;
          this.numActivities = res.data.numActivities;
          this.unlimitedActivities = res.data.unlimitedActivities;
        })
        .catch(() => {
          swal.fire('無法取得優惠資料');
        });
    },
  },
});
