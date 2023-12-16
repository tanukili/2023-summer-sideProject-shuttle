<script>
const api = import.meta.env.VITE_API_PATH;
const userId = document.cookie.replace(
  /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
  '$1'
);

export default {
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    getUserInfo() {
      this.axios(`${api}/users/${userId}`).then((res) => {
        this.userInfo = res.data;
      });
    },
  },
  mounted() {
    this.getUserInfo();
  },
};
</script>

<template>
  <div class="bg-white p-4 pb-5 rounded">
    <h2 class="title fs-4 text-primary mb-4">
      <span class="border-primary">會員資料</span>
    </h2>
    <div class="row justify-content-center">
      <div class="col-5">
        <ul class="list-group list-group-flush">
          <li class="list-group-item border-white">
            <div class="row">
              <h3 class="col-4 fs-7 mb-0">會員名稱</h3>
              <p class="col-8">{{ userInfo.name }}</p>
            </div>
          </li>
          <li class="list-group-item border-white">
            <div class="row">
              <h3 class="col-4 fs-7 mb-0">手機號碼</h3>
              <p class="col-8">{{ userInfo.phone }}</p>
            </div>
          </li>
          <li class="list-group-item border-white">
            <div class="row">
              <h3 class="col-4 fs-7 mb-0">電子信箱</h3>
              <p class="col-8">{{ userInfo.email }}</p>
            </div>
          </li>
          <li class="list-group-item border-white">
            <div class="row">
              <h3 class="col-4 fs-7 mb-0">密碼</h3>
              <p class="col-8">**********</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-5">
        <ul class="list-group list-group-flush">
          <li class="list-group-item border-white">
            <div class="row">
              <h3 class="col-4 fs-7 mb-0">性別</h3>
              <p class="col-8">{{ userInfo.sex ? userInfo.sex : '未設定' }}</p>
            </div>
          </li>
          <li class="list-group-item border-white">
            <div class="row">
              <h3 class="col-4 fs-7 mb-0">生日</h3>
              <p class="col-8">
                {{ userInfo.sex ? userInfo.birthday : '未設定' }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <button class="btn btn-primary mt-5 align-self-center w-25" type="button">
        變更資料
      </button>
    </div>
  </div>
</template>

<!-- <style>

</style> -->
