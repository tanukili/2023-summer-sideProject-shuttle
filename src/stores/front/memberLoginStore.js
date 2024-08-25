import { defineStore } from 'pinia';
import axios from 'axios';
import alertStore from '@/stores/alertStore';

const api = import.meta.env.VITE_API_PATH;

export default defineStore('member', {
  state: () => ({
    isLogin: false,
  }),
  getters: {},
  actions: {
    login(obj) {
      const { alertstyles, baseContent } = alertStore();
      axios
        .post(`${api}/login`, obj)
        .then((res) => {
          const { accessToken } = res.data;
          const { id } = res.data.user;
          document.cookie = `token=${accessToken}; max-age=86400;Secure`;
          document.cookie = `userId=${id}; max-age=86400;Secure`;
          alertstyles.alert.fire({ ...baseContent('登入成功', 1) });
          this.isLogin = true;
          this.router.push({ name: 'home' });
        })
        .catch((err) => {
          switch (err.response.data) {
            case 'Cannot find user':
              alertstyles.alert.fire({ ...baseContent('該用戶不存在', 2) });
              break;
            case 'Incorrect password':
              alertstyles.alert.fire({ ...baseContent('密碼輸入錯誤', 2) });
              break;

            default:
              alertstyles.alert.fire({
                ...baseContent(`問題${err.response.status}，抱歉請洽客服`, 2),
              });
              break;
          }
        });
    },
    logout() {
      const { alertstyles, baseContent } = alertStore();
      document.cookie = 'token=;';
      document.cookie = 'userId=;';
      this.isLogin = false;
      alertstyles.alert.fire({ ...baseContent('成功登出', 1) });
      this.router.push({ name: 'home' });
    },
    checkLoginState() {
      const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.isLogin = Boolean(userId);
    },
    singUp(userInfo) {
      const { alertstyles, baseContent } = alertStore();
      axios
        .post(`${api}/signup`, userInfo)
        .then((res) => {
          this.isLogin = true;
          const { data } = res;
          document.cookie = `token=${data.accessToken}; max-age=86400;Secure`;
          document.cookie = `userId=${data.user.id}; max-age=86400;Secure`;
          alertstyles.alert.fire({
            ...baseContent('註冊成功', 1),
            didClose: () => {
              this.router.push({ name: 'home' });
              this.isLogin = true;
            },
          });
        })
        .catch((err) => {
          if (err.response.data === 'Email already exists') {
            alertstyles.alert.fire({ ...baseContent('該信箱已註冊', 2) });
          } else {
            alertstyles.alert.fire({
              ...baseContent(`問題${err.response.status}，抱歉請洽客服`, 2),
            });
          }
        });
    },
  },
});
