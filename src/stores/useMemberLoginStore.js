import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import axios from 'axios';

const api = import.meta.env.VITE_API_PATH;

export default defineStore('member', {
  // data
  state: () => ({
    isLogin: false,
  }),
  // computed / 同步的
  getters: {
    checkUserId: () => {
      const userId = document.cookie.replace(
        /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      return Boolean(userId);
    },
  },
  // methods
  actions: {
    login(obj) {
      axios
        .post(`${api}/login`, obj)
        .then((res) => {
          const { accessToken } = res.data;
          const { id } = res.data.user;
          document.cookie = `token=${accessToken}; max-age=86400;Secure`;
          document.cookie = `userId=${id}; max-age=86400;Secure`;
          swal.fire({
            icon: 'success',
            title: '登入成功',
            showConfirmButton: false,
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutDown',
            },
          });
          this.isLogin = true;
          this.router.push({ name: 'home' });
        })
        .catch((err) => {
          switch (err.response.data) {
            case 'Cannot find user':
              swal.fire({
                icon: 'error',
                title: '該用戶不存在',
                showConfirmButton: false,
              });
              break;
            case 'Incorrect password':
              swal.fire({
                icon: 'error',
                title: '密碼輸入錯誤',
                showConfirmButton: false,
              });
              break;

            default:
              swal.fire({
                icon: 'error',
                title: `問題${err.response.status}，抱歉請洽客服`,
                showConfirmButton: false,
              });
              break;
          }
        });
    },
    logout() {
      document.cookie = 'token=;';
      document.cookie = 'userId=;';
      this.isLogin = false;
      swal.fire('成功登出');
      this.router.push({ name: 'home' });
    },
    // f5 後保持登入
    updateLoginStatus() {
      this.isLogin = this.checkUserId;
    },
    singUp(userInfo) {
      axios
        .post(`${api}/signup`, userInfo)
        .then((res) => {
          console.log(res.data);
          this.isLogin = true;
          const { data } = res;
          document.cookie = `token=${data.accessToken}; max-age=86400;Secure`;
          document.cookie = `userId=${data.user.id}; max-age=86400;Secure`;
          swal.fire({
            icon: 'success',
            title: '註冊成功',
            showConfirmButton: false,
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutDown',
            },
            didClose: () => {
              this.router.push({ name: 'home' });
            },
          });
        })
        .catch((err) => {
          if (err.response.data === 'Email already exists') {
            // 待修改 原生樣式
            swal.fire('該信箱已註冊');
          } else {
            swal.fire(`問題${err.response.status}，抱歉請洽客服`);
          }
        });
    },
  },
});
