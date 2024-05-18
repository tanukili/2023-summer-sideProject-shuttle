import { defineStore } from 'pinia';
import axios from 'axios';
import swal from 'sweetalert2';

export default defineStore('getDataStore', {
  state: () => ({
    url: import.meta.env.VITE_HEX_API_URL,
    path: import.meta.env.VITE_HEX_API_PATH,
    remoteData: null,
    pagination: null,
  }),
  actions: {
    getFontData(targetName, id = '') {
      let apiUrl = `${this.url}api/${this.path}/${targetName}`;
      if (id) {
        apiUrl += `/${id}`;
      }
      console.log(apiUrl);
      axios
        .get(apiUrl)
        .then((res) => {
          this.remoteData = res.data[targetName];
          const { pagination } = res.data;
          if (pagination) {
            this.pagination = pagination;
          }
          console.log(this.remoteData);
          console.log(this.pagination);
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
