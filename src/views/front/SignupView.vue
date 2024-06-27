<script>
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { mapState, mapActions } from 'pinia';
import BackgroundBanner from '../../components/BackgroundBanner.vue';

import useMemberLoginStore from '../../stores/useMemberLoginStore';

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
    ...mapActions(useMemberLoginStore, ['singUp']),
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
    ...mapState(useMemberLoginStore, ['isLogin', 'checkUserId']),
  },
};
</script>

<template>
  <div class="about">
    <div class="bg-white position-relative z-0">
      <!-- content -->
      <div class="container block-spacing">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">註冊</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-6 ps-8 text-white">
            <h2 class="fs-4 pt-8 mt-7 mb-2">{{ bannerAd.title }}</h2>
            <h3 class="fs-7">{{ bannerAd.subtitle }}</h3>
          </div>
          <div class="col-6 bg-primary-light rounded-5 py-5 shadow">
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

<style>
.singUp-banner {
  height: 640px;
  width: 100vw;
  position: absolute;
  z-index: -1;
  top: calc(120px + 24px * 1.2 + 16px + 64px);
}
</style>
