import { defineStore } from 'pinia';
import axios from 'axios';
import alertStore from '@/stores/alertStore';
import router from '../../router';

const { alertstyles, baseContent } = alertStore();

export default defineStore('memberStore', {
  state: () => ({
    url: import.meta.env.VITE_API_PATH,
    userId: null,
    userToken: null,
    userInfo: {},
    userComments: [],
  }),
  getters: {},
  actions: {
    checkUserId() {
      this.userToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (!this.userToken) {
        alertstyles.toast_danger.fire('無法確認身分，請先登入');
        router.replace({ name: 'login' });
      }
    },
    /* 會員資料相關（可優化） */
    getUserInfo(userId, token) {
      axios
        .get(`${this.url}/600/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          this.userInfo = res.data;
        })
        .catch((err) => {
          alertstyles.toast_danger.fire(baseContent(`無法取得資料 問題${err.response.status}`));
        });
    },
    putUserInfo(userId, token, newValue) {
      const obj = { ...newValue };
      delete obj.checkPassword;
      axios
        .put(`${this.url}/600/users/${userId}`, obj, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          this.userInfo = res.data;
          alertstyles.toast.fire(baseContent('更新成功'));
          this.getUserInfo(userId, token);
        })
        .catch((err) => {
          alertstyles.toast_danger.fire(baseContent(`更新失敗 問題${err.response.status}`));
        });
    },
    /* 心得相關 */
    getUserCommits() {
      axios
        .get(`${this.url}/600/comments?userId=${this.userId}`, {
          headers: { Authorization: `Bearer ${this.userToken}` },
        })
        .then((res) => {
          console.log(res.data);
          this.userComments = [...res.data];
        })
        .catch((err) => {
          alertstyles.toast_danger.fire(baseContent(`無法取得心得 問題${err.response.status}`));
        });
    },
    postComment(commentContent, modalDom) {
      const postObj = {
        userId: +this.userId,
        ...commentContent,
      };
      axios
        .post(`${this.url}/660/comments`, postObj, {
          headers: { Authorization: `Bearer ${this.userToken}` },
        })
        .then(() => {
          alertstyles.toast.fire('成功送出心得！');
          modalDom.hide();
          this.getUserCommits();
        })
        .catch((err) => {
          alertstyles.toast_danger.fire(baseContent(`新增失敗 問題${err.response.status}`));
        });
    },
  },
});
