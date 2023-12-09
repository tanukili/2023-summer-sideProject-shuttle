<script>
import { mapActions } from 'pinia';
import useMemberLoginStore from '../../stores/useMemberLoginStore';
import BackgroundBanner from '../../components/BackgroundBanner.vue';

const api = import.meta.env.VITE_API_PATH;

export default {
  components: {
    BackgroundBanner,
  },
  data() {
    return {
      bannerAd: {
        title: '2023夏季 織心好友揪團趣',
        subtitle: '兩人同行，現打 85 折',
        imgUrl: 'background-image: url(/banner/banner-products.jpg)',
      },
      loginInfo: {
        password: '',
        email: '',
      },
    };
  },
  methods: {
    ...mapActions(useMemberLoginStore, ['login']),
  },
  mounted() {
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1200);
  },
};
</script>

<template>
  <!-- <LoadingOverlay v-model:active="isLoading">
    <div class="loadingio-spinner-pulse-1iwbsd99pb">
      <div class="ldio-dcvhkke5k">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingOverlay> -->
  <div class="about">
    <div class="bg-white position-relative z-0">
      <!-- content -->
      <div class="container block-spacing">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">登入</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-6 ps-8 text-white">
            <h2 class="fs-4 pt-8 mt-7 mb-2">{{ bannerAd.title }}</h2>
            <h3 class="fs-7">{{ bannerAd.subtitle }}</h3>
          </div>
          <div class="col-6 bg-primary-light rounded-5 py-5 shadow">
            <h1 class="title fs-3 text-primary pt-3 pb-4">
              <span class="border-primary">會員登入</span>
            </h1>
            <form
              class="mx-5 form-clear pb-4 border-dashed-b border-secondary-light"
            >
              <div class="form-floating mb-4">
                <input
                  name="信箱"
                  type="email"
                  class="form-control"
                  id="signUpEmail"
                  placeholder="name@example.com"
                  v-model="loginInfo.email"
                />
                <label for="signUpEmail">註冊信箱</label>
              </div>
              <div class="form-floating pb-3 mb-5">
                <input
                  name="密碼"
                  type="password"
                  class="form-control"
                  id="signUpPassword"
                  placeholder="password"
                  v-model="loginInfo.password"
                />
                <label for="signUpPassword">密碼</label>
              </div>
              <div class="d-flex justify-content-between lh-lg">
                <a
                  href="#"
                  class="link-gray-500 text-decoration-underline"
                  @click.prevent
                  >忘記密碼？</a
                >
                <RouterLink to="/admin-login" class="link-gray-500"
                  >後台登入</RouterLink
                >
              </div>

              <button
                @click.prevent="login(loginInfo)"
                class="btn btn-primary w-100 mt-2 fs-5"
                :class="
                  !loginInfo.email || !loginInfo.password ? 'disabled' : true
                "
              >
                登入
              </button>
            </form>
            <p class="text-center mt-7">
              是新織友嗎？<RouterLink
                to="/signup"
                class="link-gray-500 text-decoration-underline fw-bold lh-lg"
                >立即註冊</RouterLink
              >
            </p>
          </div>
        </div>
      </div>
      <!-- background -->
      <BackgroundBanner
        v-bind:bannerImg="bannerAd.imgUrl"
        class="login-banner"
      ></BackgroundBanner>
    </div>
  </div>
</template>

<style>
.login-banner > * {
  height: 420px;
  top: calc(120px + 24px * 1.2 + 16px + 64px);
}
</style>
