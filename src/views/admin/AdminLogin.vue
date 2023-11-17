<script>
const hexApi = import.meta.env.VITE_HEX_API_PATH;
// const apiPath = '2023shuttle';

export default {
  data() {
    return {
      SinginInfo: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    abminSingin(obj) {
      this.axios
        .post(`${hexApi}admin/signin`, obj)
        .then((res) => {
          console.log(res.data.message);
          const { expired, token } = res.data;
          document.cookie = `token=${token}; expires=${expired};Secure`;
          this.$router.push('/admin');
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>
<template>
  <div class="about">
    <h1>後台登入</h1>
    <div class="container">
      <form class="mx-5 form-clear pb-4 border-dashed-b border-secondary-light">
        <div class="form-floating mb-4">
          <input
            name="信箱"
            type="email"
            class="form-control"
            id="signInEmail"
            placeholder="name@example.com"
            v-model="SinginInfo.username"
          />
          <label for="signInEmail">信箱</label>
        </div>
        <div class="form-floating pb-3 mb-5">
          <input
            name="密碼"
            type="password"
            class="form-control"
            id="signInPassword"
            placeholder="password"
            v-model="SinginInfo.password"
          />
          <label for="signInPassword">密碼</label>
        </div>
        <button
          @click.prevent="abminSingin(SinginInfo)"
          class="btn btn-primary w-100 mt-2 fs-5"
        >
          登入
        </button>
      </form>
    </div>
  </div>
</template>
