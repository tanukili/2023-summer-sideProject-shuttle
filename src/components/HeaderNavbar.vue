<template>
  <nav class="navbar navbar-expand-md py-md-3">
    <div class="container">
      <RouterLink to="/" class="d-md-none">
        <img src="../assets/images/logo.png" alt="logo" style="width: 96px" />
      </RouterLink>
      <div class="d-flex mx-md-auto">
        <RouterLink to="/carts" class="p-1 me-2 d-md-none">
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
          <div class="offcanvas-body p-0">
            <ul
              class="navbar-nav justify-content-end align-items-md-end flex-grow-1 lh-sm"
            >
              <li class="nav-item me-2">
                <RouterLink to="/howto" class="fs-lg-6 fs-md-7 fs-5 nav-link"
                  >認識手織</RouterLink
                >
              </li>
              <li class="nav-item me-2">
                <RouterLink to="/products" class="fs-lg-6 fs-md-7 fs-5 nav-link"
                  >購買課程</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink to="/news" class="fs-lg-6 fs-md-7 fs-5 nav-link"
                  >最新消息</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink to="/" class="nav-link px-4 py-0 d-none d-md-block">
                  <img
                    src="../assets/images/logo-straight.png"
                    alt="logo"
                    style="width: 96px"
                  />
                </RouterLink>
              </li>
              <li class="nav-item me-2">
                <RouterLink to="/contact" class="fs-lg-6 fs-md-7 fs-5 nav-link"
                  >聯絡我們</RouterLink
                >
              </li>
              <li class="nav-item me-2">
                <RouterLink to="/login" class="fs-lg-6 fs-md-7 fs-5 nav-link"
                  >登入/註冊</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink to="/carts" class="nav-link d-none d-md-block">
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
      .nav-item:first-child {
        .nav-link {
          padding-right: 14.5px;
          padding-left: 14.5px;
        }
      }
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