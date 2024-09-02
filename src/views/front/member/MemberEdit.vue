<template>
  <div class="bg-white p-7 py-md-5 rounded mt-3 mt-md-0">
    <h2 class="title fs-4 text-primary mb-7 mb-md-5">
      <span class="border-primary">會員資料</span>
    </h2>
    <div class="d-flex flex-column align-items-center">
      <VForm
        @submit="putUserInfo(userInfo.id, token, $event)"
        v-slot="{ errors }"
        style="max-width: 480px"
      >
        <div class="row gx-3 mb-3">
          <div :style="{ width: isEditing ? '80px' : 'auto' }">
            <label for="name" class="form-label mb-0 pt-6">
              會員名稱
              <span v-show="!isEditing">：{{ userInfo.name }}</span>
            </label>
          </div>
          <div class="col" v-show="isEditing">
            <VField
              name="name"
              rules="required"
              v-model="userTemp.name"
              type="text"
              id="name"
              class="form-control fs-7"
              :class="{ 'is-invalid': errors.name }"
            />
            <ErrorMessage name="name" v-slot="{ message }">
              <small class="fs-9 mt-1 text-danger">
                {{ message.replace('name', '名稱') }}
              </small>
            </ErrorMessage>
          </div>
        </div>
        <div class="row g-3 mb-3">
          <div :style="{ width: isEditing ? '80px' : 'auto' }">
            <label for="email" class="form-label mb-0 pt-6">
              電子信箱
              <span v-show="!isEditing">：{{ userInfo.email }}</span>
            </label>
          </div>
          <div class="col" v-show="isEditing">
            <VField
              name="email"
              rules="required|email"
              v-model="userTemp.email"
              type="email"
              id="email"
              class="form-control fs-7"
              :class="{ 'is-invalid': errors.name }"
            />
            <ErrorMessage name="email" v-slot="{ message }">
              <small class="fs-9 mt-1 text-danger">{{ message.replace('email', '信箱') }}</small>
            </ErrorMessage>
          </div>
        </div>
        <div class="row g-3 mb-3">
          <div :style="{ width: isEditing ? '80px' : 'auto' }">
            <label for="password" class="form-label mb-0 pt-6">
              密碼
              <span v-show="!isEditing">：＊＊＊＊＊＊＊</span>
            </label>
          </div>
          <div class="col" v-show="isEditing">
            <VField
              name="password"
              rules="required|alpha_num|min:6|max:20"
              type="password"
              id="password"
              class="form-control fs-7"
              :class="{ 'is-invalid': errors.name }"
              placeholder="請輸入新密碼"
            />
            <ErrorMessage name="password" v-slot="{ message }">
              <small class="fs-9 mt-1 text-danger">
                {{ message.replace('password', '密碼') }}
              </small>
            </ErrorMessage>
            <VField
              name="checkPassword"
              rules="confirmed:@password"
              type="password"
              class="form-control fs-7 mt-2"
              :class="{ 'is-invalid': errors.name }"
              placeholder="請再次輸入新密碼"
            />
            <ErrorMessage name="checkPassword" v-slot="{ message }">
              <small class="fs-9 mt-1 text-danger">
                {{ message.replace('checkPassword', '密碼') }}
              </small>
            </ErrorMessage>
          </div>
        </div>
        <div class="row g-3 mb-3">
          <div :style="{ width: isEditing ? '80px' : 'auto' }">
            <label for="phone" class="form-label mb-0 pt-6">
              手機號碼
              <span v-show="!isEditing">：{{ userInfo.phone }}</span>
            </label>
          </div>
          <div class="col" v-show="isEditing">
            <VField
              name="phone"
              rules="required|numeric|length:10"
              v-model="userTemp.phone"
              type="phone"
              id="phone"
              class="form-control fs-7"
              :class="{ 'is-invalid': errors.name }"
            />
            <ErrorMessage name="phone" v-slot="{ message }">
              <small class="fs-9 mt-1 text-danger">
                {{ message.replace('phone', '手機號碼') }}
              </small>
            </ErrorMessage>
          </div>
        </div>
        <div class="row g-3 mb-3">
          <div :style="{ width: isEditing ? '80px' : 'auto' }">
            <label for="birthday" class="form-label mb-0 pt-6">
              生日
              <span v-show="!isEditing">：{{ userInfo.birthday }}</span>
            </label>
          </div>
          <div class="col" v-show="isEditing" ref="birthdayDiv">
            <VField
              name="birthday"
              v-model="userTemp.birthday"
              type="text"
              id="birthday"
              class="form-control fs-7"
            />
          </div>
        </div>
        <div class="row g-3 pt-6">
          <div :style="{ width: isEditing ? '80px' : 'auto' }">
            <label class="form-label mb-0">
              性別
              <span v-show="!isEditing">：{{ sexTw }}</span>
            </label>
          </div>
          <div class="col d-flex" v-if="isEditing">
            <div class="form-check me-3">
              <VField
                name="sex"
                v-model="userTemp.sex"
                value="male"
                type="radio"
                class="form-check-input"
                id="male"
              />
              <label class="form-check-lable" for="male">男性</label>
            </div>
            <div class="form-check me-3">
              <VField
                name="sex"
                v-model="userTemp.sex"
                value="female"
                type="radio"
                class="form-check-input"
                id="female"
              />
              <label class="form-check-lable" for="female">女性</label>
            </div>
            <div class="form-check">
              <VField
                name="sex"
                v-model="userTemp.sex"
                value="other"
                type="radio"
                class="form-check-input"
                id="other"
              />
              <label class="form-check-lable" for="other">其他</label>
            </div>
          </div>
        </div>
        <div class="row g-2 mt-7 mt-md-5 justify-content-center">
          <div class="col-10" :class="{ 'col-lg-5': isEditing }">
            <button
              @click="isEditing = !isEditing"
              :class="[isEditing ? 'btn-primary-light' : 'btn-primary']"
              class="btn fs-8 w-100"
              type="button"
              style="min-width: 140px"
            >
              {{ isEditing ? '取消編輯' : '變更資料' }}
            </button>
          </div>
          <div class="col-10 col-lg-5" v-show="isEditing">
            <button class="btn btn-primary fs-8 w-100" type="submit">送出</button>
          </div>
        </div>
      </VForm>
    </div>
  </div>
</template>

<script>
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

import { mapActions, mapState } from 'pinia';
import alertStore from '@/stores/alertStore';
import memberStore from '@/stores/front/memberStore';

export default {
  data() {
    return {
      api: import.meta.env.VITE_API_PATH,
      userId: null,
      token: null,
      userTemp: {},
      isEditing: false,
      flatpickr: null,
    };
  },
  methods: {
    ...mapActions(alertStore, ['baseContent']),
    ...mapActions(memberStore, ['getUserInfo', 'putUserInfo']),
  },
  computed: {
    ...mapState(alertStore, ['alertstyles']),
    ...mapState(memberStore, ['userInfo']),
    sexTw() {
      switch (this.userInfo.sex) {
        case 'male':
          return '男性';
        case 'female':
          return '女性';
        default:
          return '其他';
      }
    },
  },
  watch: {
    isEditing(now) {
      // 避免傳參考
      if (now) {
        this.userTemp = { ...this.userInfo };
      }
    },
    userInfo() {
      // 還原預設狀態
      this.isEditing = false;
    },
  },
  mounted() {
    this.userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.getUserInfo(this.userId, this.token);
    this.flatpickr = new Flatpickr(this.$refs.birthdayDiv.firstChild, {
      dateFormat: 'Y-m-d',
      maxDate: 'today',
    });
  },
  beforeUnmount() {
    this.flatpickr.destroy();
  },
};
</script>
