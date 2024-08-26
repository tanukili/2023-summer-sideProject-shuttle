<template>
  <div class="about">
    <div class="bg-white position-relative z-0">
      <!-- content -->
      <div class="container block-spacing-sm">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb fs-8 fs-lg-7">
            <li class="breadcrumb-item">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">註冊</li>
          </ol>
        </nav>
        <div class="row justify-content-center px-3 px-md-0">
          <div class="col-6 col-xxl-5 ps-8 text-white d-none d-lg-block text-end">
            <h2 class="fs-4 fs-xl-3 pt-8 mt-7 mb-2 me-4">{{ bannerAd.title }}</h2>
            <h3 class="fs-7 fs-xxl-6 me-4">{{ bannerAd.subtitle }}</h3>
          </div>
          <div class="col-md-8 col-lg-6 col-xl-5 bg-primary-light rounded-5 py-5 shadow">
            <h1 class="title fs-3 text-primary pt-3 pb-4">
              <span class="border-primary">註冊會員</span>
            </h1>
            <VForm novalidate @submit="onSubmit" class="mx-5 form-clear">
              <div class="form-floating mb-4">
                <VField
                  name="信箱"
                  type="email"
                  rules="required|email"
                  class="form-control"
                  id="signUpEmail"
                  placeholder="name@example.com"
                />
                <label for="signUpEmail" class="required">註冊信箱</label>
                <ErrorMessage name="信箱" />
              </div>
              <div class="form-floating mb-4">
                <VField
                  name="密碼"
                  type="password"
                  rules="required|alpha_num|min:6|max:20"
                  class="form-control"
                  id="signUpPassword"
                  placeholder="password"
                />
                <label for="signUpPassword" class="required">密碼</label>
                <ErrorMessage name="密碼" />
              </div>
              <div class="form-floating mb-4">
                <VField
                  name="輸入密碼"
                  type="password"
                  rules="confirmed:@密碼|required"
                  class="form-control"
                  id="checkPassword"
                  placeholder="password"
                />
                <label for="checkPassword" class="required">再次確認密碼</label>
                <ErrorMessage name="輸入密碼" />
              </div>
              <div class="form-floating mb-4">
                <VField
                  name="會員名稱"
                  type="text"
                  rules="required"
                  class="form-control"
                  id="signUpName"
                  placeholder="name"
                />
                <label for="signUpName" class="required">會員名稱</label>
                <ErrorMessage name="會員名稱" />
              </div>
              <div class="form-floating mb-4">
                <VField
                  name="連絡電話"
                  type="phone"
                  rules="required|numeric|length:10"
                  class="form-control"
                  id="signUpPhone"
                  placeholder="0912345678"
                />
                <label for="signUpPhone" class="required">連絡電話</label>
                <ErrorMessage name="連絡電話" />
              </div>
              <div class="form-date form-floating mb-4">
                <input
                  name="生日"
                  ref="flatpickrInput"
                  type="text"
                  id="signUpBirthday"
                  placeholder="1990-01-01"
                  v-model="userBirthday"
                />
                <label for="signUpBirthday">生日</label>
              </div>
              <div class="mb-5 ms-3">
                <label class="d-block mb-2">性別</label>
                <div class="form-check form-check-inline">
                  <VField
                    type="radio"
                    name="性別"
                    value="male"
                    class="form-check-input"
                    id="signUpMale"
                  />
                  <label for="signUpMale">男性</label>
                </div>
                <div class="form-check form-check-inline">
                  <VField
                    type="radio"
                    name="性別"
                    value="female"
                    class="form-check-input"
                    id="signUpFemale"
                  />
                  <label for="signUpFemale">女性</label>
                </div>
                <div class="form-check form-check-inline">
                  <VField
                    type="radio"
                    name="性別"
                    value="other"
                    class="form-check-input"
                    id="signUpOther"
                  />
                  <label for="signUpOther">其他</label>
                </div>
                <div class="form-check form-check-inline">
                  <VField
                    type="radio"
                    name="性別"
                    value="private"
                    class="form-check-input"
                    id="signUpPrivate"
                  />
                  <label for="signUpPrivate">不公開</label>
                </div>
              </div>
              <div class="form-check mb-3">
                <VField
                  type="checkbox"
                  rules="required"
                  name="agreeTerms"
                  value="true"
                  class="form-check-input"
                />
                <label class="form-check-label required">我同意網站服務條款及隱私政策</label>
                <ErrorMessage name="agreeTerms" v-slot="{ message }">
                  <span class="text-danger fs-9 ms-2">{{ (message = '請閱讀完後勾選') }}</span>
                </ErrorMessage>
              </div>
              <button class="btn btn-primary w-100 mb-3 fs-5">註冊</button>
            </VForm>
          </div>
        </div>
      </div>
      <!-- background -->
      <BackgroundBanner :bannerImg="bannerAd.bannerImg" class="singUp-banner"></BackgroundBanner>
    </div>
  </div>
</template>

<script>
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { mapState, mapActions } from 'pinia';
import memberLoginStore from '@/stores/front/memberLoginStore';
import BackgroundBanner from '@/components/BackgroundBanner.vue';

export default {
  components: {
    BackgroundBanner,
  },
  data() {
    return {
      bannerAd: {
        title: '新註冊會員 贈100元折價券',
        subtitle: '新會員招募中，註冊即贈優惠券',
        bannerImg: 'activity/newMember.jpg',
      },
      userBirthday: '',
      flatpickrConfig: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
      },
    };
  },
  methods: {
    ...mapActions(memberLoginStore, ['singUp']),
    onSubmit(values) {
      const obj = {
        email: values.信箱,
        password: values.密碼,
        phone: values.連絡電話,
        name: values.會員名稱,
        birthday: this.userBirthday,
        sex: values.性別 ? values.性別 : '',
        favorites: [],
      };
      this.singUp(obj);
    },
  },
  mounted() {
    // 初始化Flatpickr
    this.flatpickr = new Flatpickr(this.$refs.flatpickrInput, {
      altInput: true,
      dateFormat: 'Y-m-d',
      altFormat: 'F j, Y',
    });
    // 為使用日期時間選擇器的input加入樣式
    document.querySelector('.form-date .input').classList.add('form-control');
  },
  beforeUnmount() {
    // 銷毀Flatpickr實體，防止資料洩漏
    this.flatpickr.destroy();
  },
  computed: {
    ...mapState(memberLoginStore, ['isLogin']),
  },
};
</script>

<style lang="scss">
.singUp-banner {
  height: 60% !important;
  width: 100%;
  position: absolute;
  z-index: -1;
  top: calc(120px + 24px * 1.2 + 16px + 64px);
  img {
    object-position: 50% 70% !important;
  }
}
</style>
