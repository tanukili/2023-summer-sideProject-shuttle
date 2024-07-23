<script>
const hexApi = import.meta.env.VITE_HEX_API_URL;
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
    <div class="bg-white block-spacing-sm">
      <div class="container">
        <div class="w-50 mx-auto">
          <h2 class="text-center mb-4">後台登入</h2>
          <form class="mx-5 form-clear d-flex flex-column align-items-center">
            <div class="form-floating mb-4 w-100">
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
            <div class="form-floating pb-3 mb-4 w-100">
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
              style="width: 280px"
              @click.prevent="abminSingin(SinginInfo)"
              class="btn btn-primary mt-2 fs-6"
            >
              登入
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
