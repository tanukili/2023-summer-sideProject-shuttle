<script>
import { mapState, mapActions } from 'pinia';
import useMemberLoginStore from '../stores/useMemberLoginStore';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(useMemberLoginStore, ['logout', 'updateLoginStatus']),
  },
  mounted() {
    this.updateLoginStatus();
  },
  computed: {
    ...mapState(useMemberLoginStore, ['isLogin', 'checkUserId']),
  },
};
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg py-md-3">
      <div class="container">
        <RouterLink to="/" class="d-lg-none">
          <img src="/logo/logo.png" alt="logo" style="width: 96px" />
        </RouterLink>
        <div class="d-flex mx-lg-auto">
          <RouterLink
            to="/signup"
            class="fs-6 fw-bold p-1 me-3 d-lg-none d-flex align-items-center"
            v-if="!isLogin"
          >
            <span class="icon-lg material-symbols-outlined me-1">
              edit_document </span
            >註冊</RouterLink
          >
          <RouterLink to="/carts" class="p-1 me-2 d-lg-none" v-else>
            <span class="material-symbols-outlined fs-3"> shopping_cart </span>
          </RouterLink>
          <button
            class="navbar-toggler border-0 p-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#headerNavbar"
            aria-controls="headerNavbar"
          >
            <span class="material-symbols-outlined fs-3"> menu </span>
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
                <span class="material-symbols-outlined fs-5 text-primary">
                  close
                </span>
              </button>
            </div>
            <div class="offcanvas-body">
              <ul
                class="navbar-nav justify-content-end align-items-lg-end flex-grow-1 lh-sm"
              >
                <li class="nav-item me-2">
                  <RouterLink to="/howto" class="fs-lg-6 fs-5 nav-link"
                    >認識手織</RouterLink
                  >
                </li>
                <li class="nav-item me-2">
                  <RouterLink to="/products" class="fs-lg-6 fs-5 nav-link"
                    >購買課程</RouterLink
                  >
                </li>
                <li class="nav-item">
                  <RouterLink to="/news" class="fs-lg-6 fs-5 nav-link"
                    >最新消息</RouterLink
                  >
                </li>
                <li class="nav-item">
                  <RouterLink
                    to="/"
                    class="nav-link px-4 py-0 d-none d-lg-block"
                  >
                    <img
                      src="/logo/logo-straight.png"
                      alt="logo"
                      style="width: 96px"
                    />
                  </RouterLink>
                </li>
                <li class="nav-item me-2">
                  <RouterLink to="/contact" class="fs-lg-6 fs-5 nav-link"
                    >聯絡我們</RouterLink
                  >
                </li>
                <!-- 登入前：登入 -->
                <li class="nav-item me-2" v-if="!isLogin">
                  <RouterLink to="/login" class="fs-lg-6 fs-5 nav-link"
                    >會員登入</RouterLink
                  >
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
                  <ul
                    class="dropdown-menu rounded-1"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <RouterLink class="dropdown-item" to="/member/orders"
                        >查看訂單</RouterLink
                      >
                    </li>
                    <li>
                      <RouterLink class="dropdown-item" to="/member/favorites"
                        >我的收藏</RouterLink
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent="logout()"
                        >登出</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item d-none d-lg-block">
                  <RouterLink
                    to="/signup"
                    class="fs-lg-6 fs-5 nav-link"
                    v-if="!isLogin"
                  >
                    <span class="icon-lg material-symbols-outlined me-1">
                      edit_document </span
                    >註冊</RouterLink
                  >
                  <RouterLink to="/carts" class="nav-link" v-else>
                    <span class="icon-lg material-symbols-outlined">
                      shopping_cart
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

<style>
#headerNavbar {
  /* .nav-item {
    @include mobile {
      &:first-child {
        margin-top: -4px;
      }
    }
  } */
  @media (min-width: 992px) {
    .offcanvas-body {
      .nav-item:last-child {
        .nav-link {
          padding-top: 6px;
          padding-bottom: 6px;
        }
      }
    }
  }
}
</style>
