import { defineStore } from 'pinia';
import axios from 'axios';
import swal from 'sweetalert2';

export default defineStore('getDataStore', {
  state: () => ({
    url: import.meta.env.VITE_HEX_API_URL,
    path: import.meta.env.VITE_HEX_API_PATH,
    remoteData: null,
    singleInfo: null,
    pagination: null,
  }),
  actions: {
    getFontData(targetName, id = '') {
      const apiUrl = `${this.url}api/${this.path}/${targetName}${id ? '/' + id : ''}`;
      console.log(apiUrl);
      axios
        .get(apiUrl)
        .then((res) => {
          // 區分：全部 vs 指定單筆
          const updateTarget = id ? 'singleInfo' : 'remoteData';
          this[updateTarget] = res.data[targetName];
          const { pagination } = res.data;
          if (pagination) {
            this.pagination = pagination;
          }
        })
        .catch((err) => {
          swal.fire({
            icon: 'error',
            title: `系統問題${err.response.status}，請聯繫客服`,
          });
        });
    },
  },
});
