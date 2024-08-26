<template>
  <div>
    <nav class="navbar navbar-expand-lg py-md-3">
      <div class="container">
        <RouterLink to="/" class="d-lg-none">
          <img src="/logo/logo.png" alt="logo" style="width: 96px" />
        </RouterLink>
        <div class="d-flex mx-lg-auto">
          <RouterLink to="/carts" class="p-1 me-2 d-lg-none" v-if="isLogin">
            <span
              class="material-symbols-outlined fs-3 position-relative"
              :class="{ 'icon-fill': cartsNum }"
            >
              shopping_cart
              <span class="position-absolute start-100 translate-middle badge" style="top: -10%">
                <span
                  class="text-white fs-9 lh-sm px-1 bg-danger rounded-1"
                  style="font-family: var(--bs-font-sans-serif)"
                >
                  {{ cartsNum }}
                </span>
              </span>
            </span>
          </RouterLink>
          <button
            class="navbar-toggler border-0 p-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#headerNavbar"
            aria-controls="headerNavbar"
          >
            <span class="material-symbols-outlined fs-3">menu</span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="headerNavbar"
            aria-labelledby="headerNavbarLabel"
          >
            <div class="offcanvas-header justify-content-end">
              <button
                type="button"
                class="btn-close p-2 m-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <span class="material-symbols-outlined fs-5 text-primary">close</span>
              </button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end align-items-lg-end flex-grow-1 lh-sm">
                <li class="nav-item me-2">
                  <RouterLink to="/howto" class="fs-lg-6 fs-5 nav-link" @click="closeOffcanvas">
                    認識手織
                  </RouterLink>
                </li>
                <li class="nav-item me-2">
                  <RouterLink to="/products" class="fs-lg-6 fs-5 nav-link" @click="closeOffcanvas">
                    購買課程
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/news" class="fs-lg-6 fs-5 nav-link" @click="closeOffcanvas">
                    最新消息
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink
                    to="/"
                    class="nav-link px-4 py-0 d-none d-lg-block"
                    @click="closeOffcanvas"
                  >
                    <img src="/logo/logo-straight.png" alt="logo" style="width: 96px" />
                  </RouterLink>
                </li>
                <li class="nav-item me-2">
                  <RouterLink to="/contact" class="fs-lg-6 fs-5 nav-link" @click="closeOffcanvas">
                    聯絡我們
                  </RouterLink>
                </li>
                <!-- 登入前：登入 -->
                <li class="nav-item me-2" v-if="!isLogin">
                  <RouterLink to="/login" class="fs-lg-6 fs-5 nav-link" @click="closeOffcanvas">
                    會員登入
                  </RouterLink>
                </li>
                <!-- 登入後：會員下拉選單 -->
                <li class="nav-item dropdown me-2" v-else>
                  <a
                    class="nav-link dropdown-toggle fs-lg-6 fs-5"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    會員相關
                  </a>
                  <ul class="dropdown-menu rounded-1" aria-labelledby="navbarDropdown">
                    <li>
                      <RouterLink class="dropdown-item" to="/member/orders" @click="closeOffcanvas">
                        查看訂單
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        class="dropdown-item"
                        to="/member/favorites"
                        @click="closeOffcanvas"
                      >
                        我的收藏
                      </RouterLink>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click.prevent="logout()">登出</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item d-none d-lg-block">
                  <RouterLink
                    to="/signup"
                    class="fs-lg-6 fs-5 nav-link"
                    v-if="!isLogin"
                    @click="closeOffcanvas"
                  >
                    註冊會員
                  </RouterLink>
                  <RouterLink
                    to="/carts"
                    class="nav-link"
                    v-else
                    style="padding-top: 6px; padding-bottom: 6px"
                    @click="closeOffcanvas"
                  >
                    <span
                      class="icon-lg material-symbols-outlined position-relative"
                      :class="{ 'icon-fill': cartsNum }"
                    >
                      shopping_cart
                      <span
                        class="position-absolute start-100 translate-middle badge"
                        style="top: -15%"
                      >
                        <span
                          class="text-white fs-9 lh-sm px-1 bg-danger rounded-1"
                          style="font-family: var(--bs-font-sans-serif)"
                        >
                          {{ cartsNum }}
                        </span>
                      </span>
                    </span>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import getDataStore from '@/stores/getDataStore';
import memberLoginStore from '@/stores/front/memberLoginStore';

export default {
  data() {
    return {
      nowRoute: this.$route.name,
    };
  },
  computed: {
    ...mapState(getDataStore, ['cartData']),
    ...mapState(memberLoginStore, ['isLogin']),
    cartsNum() {
      return this.cartData.length;
    },
  },
  methods: {
    ...mapActions(getDataStore, ['getFontData']),
    ...mapActions(memberLoginStore, ['logout', 'checkLoginState']),
    closeOffcanvas() {
      const colseBtn = document.querySelector('#headerNavbar .btn-close');
      colseBtn.click();
    },
  },
  mounted() {
    this.checkLoginState(); // 網頁關閉後，仍可從 cookie 保持登入狀態
    this.getFontData('cart');
  },
};
</script>

<style lang="scss"></style>
