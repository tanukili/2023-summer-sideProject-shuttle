import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

export default defineStore('alertStore', {
  state: () => ({
    styles: [
      {
        toast: {
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            title: 'my-0 mx-2 pt-0 fs-lg-6 text-white',
            popup: 'rounded-2 bg-primary',
            container: 'mx-0',
          },
          didOpen: (toast) => {
            const toastDom = toast;
            toastDom.onmouseenter = Swal.stopTimer;
            toastDom.onmouseleave = Swal.resumeTimer;
          },
          showClass: {
            popup: 'animate__animated animate__fadeInRight  animate__slow',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutRight animate__slow',
          },
        },
      },
      {
        toast_danger: {
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            title: 'my-0 mx-2 pt-0 fs-lg-6 text-white',
            popup: 'rounded-2 bg-danger',
            container: 'mx-0',
          },
          didOpen: (toast) => {
            const toastDom = toast;
            toastDom.onmouseenter = Swal.stopTimer;
            toastDom.onmouseleave = Swal.resumeTimer;
          },
          showClass: {
            popup: 'animate__animated animate__fadeInRight  animate__slow',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutRight animate__slow',
          },
        },
      },
    ],
  }),
  getters: {
    alertstyles() {
      const stylesObj = {};
      this.styles.forEach((style) => {
        const styleName = `${Object.keys(style)}`;
        stylesObj[styleName] = Swal.mixin(style[styleName]);
      });
      return stylesObj;
    },
  },
  actions: {
    baseContent(title, iconCode = 0, confirmButtonText = '確認') {
      const icons = ['', 'success', 'error'];
      return {
        icon: icons[iconCode],
        title,
        confirmButtonText,
      };
    },
  },
});
