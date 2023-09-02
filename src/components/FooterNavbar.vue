<script></script>

<template>
  <div class="border-dashed border-bottom border-gray-200">
    <div class="container">
      <ul class="nav justify-content-around fs-6 lh-sm">
        <li class="nav-item">
          <RouterLink class="nav-link py-4" aria-current="page" to="/"
            >首頁</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link py-4" to="/products">購買課程</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link py-4" to="/news">最新消息</RouterLink>
        </li>
        <li class="nav-item d-none d-md-block">
          <RouterLink class="nav-link py-4" to="/">版權宣告</RouterLink>
        </li>
        <li class="nav-item d-none d-md-block">
          <RouterLink class="nav-link py-4" to="/">隱私權政策</RouterLink>
        </li>
      </ul>
    </div>
  </div>
  <div class="container py-4 py-lg-5">
    <div
      class="d-flex flex-column flex-md-row justify-content-md-between align-items-center"
    >
      <img
        class="bottom-logo order-md-1 mb-3 mb-md-0"
        src="../assets/images/logo-horizontal.png"
        alt="logo"
        style="max-width: 236px"
      />
      <ul class="order-md-0 list-unstyled fw-medium mb-md-0 align">
        <li class="mb-1 mb-lg-6">
          <a href="tel:0312-345-678">
            <span class="fill-ture material-symbols-outlined me-1 me-md-0 me-lg-1"> call </span>
            0312-345-678
          </a>
        </li>
        <li>
          <a href="mailto:Shuttle2013@gmail.com">
            <span class="fill-ture material-symbols-outlined me-1 me-md-0 me-lg-1"> mail </span>
            Shuttle2013@gmail.com
          </a>
        </li>
      </ul>
      <ul class="order-md-2 nav">
        <li class="nav-item mx-2 mx-md-1 mx-lg-2">
          <a
            class="nav-link p-2 rounded-circle bg-white"
            href="#"
            style="width: 40px; height: 40px"
          >
            <img class="align-top" src="../assets/images/vector/Facebook.svg" alt="facebook-icon" />
          </a>
        </li>
        <li class="nav-item mx-2 mx-md-1 mx-lg-2">
          <a
            class="nav-link p-2 rounded-circle bg-white"
            href="#"
            style="width: 40px; height: 40px"
          >
            <img class="align-top" src="../assets/images/vector/Messager.svg" alt="messager-icon" />
          </a>
        </li>
        <li class="nav-item mx-2 mx-md-1 mx-lg-2">
          <a
            class="nav-link p-2 rounded-circle bg-white"
            href="#"
            style="width: 40px; height: 40px"
          >
            <img class="align-top"
              src="../assets/images/vector/Instagram.svg"
              alt="instagram-icon"
            />
          </a>
        </li>
        <li class="nav-item mx-2 ms-md-1 me-md-0 mx-lg-2">
          <a
            class="nav-link p-2 rounded-circle bg-white"
            href="#"
            style="width: 40px; height: 40px"
          >
            <img class="align-top"
              src="../assets/images/vector/Pinterest.svg"
              alt="pinterest-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
  <p class="py-3 lh-sm text-primary text-center border-dashed border-top border-gray-200">
    <small>Copyright © 2023 Shuttle All Rights Reserved.</small>
  </p>
</template>

<style>
.material-symbols-outlined.fill-ture {
  font-variation-settings: "FILL" 1;
  font-size: 20px;
  padding: 6px;
}
</style>
