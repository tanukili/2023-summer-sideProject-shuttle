<template>
  <div class="border-dashed-b border-gray-200">
    <div class="container">
      <ul class="nav fs-6 text-center">
        <li class="nav-item w-20">
          <RouterLink class="nav-link py-4 mx-4" aria-current="page" to="/"
            >首頁</RouterLink
          >
        </li>
        <li class="nav-item w-20">
          <RouterLink class="nav-link py-4 mx-4" to="/products"
            >購買課程</RouterLink
          >
        </li>
        <li class="nav-item w-20">
          <RouterLink class="nav-link py-4 mx-4" to="/news"
            >最新消息</RouterLink
          >
        </li>
        <li class="nav-item w-20 d-none d-md-block">
          <RouterLink class="nav-link py-4 mx-4" to="/">版權宣告</RouterLink>
        </li>
        <li class="nav-item w-20 d-none d-md-block">
          <RouterLink class="nav-link py-4 mx-4" to="/">隱私權政策</RouterLink>
        </li>
      </ul>
    </div>
  </div>
  <div class="container py-4 py-lg-5">
    <div
      class="d-flex flex-column flex-md-row justify-content-md-between align-items-center"
    >
      <img
        class="order-md-1 mb-3 mb-md-0"
        src="/logo/logo-horizontal.png"
        alt="logo"
        style="max-width: 236px"
      />
      <ul class="order-md-0 list-unstyled mb-md-0 align">
        <li class="mb-1 mb-lg-6">
          <a class="lh-lg" href="tel:0312-345-678">
            <span class="icon-fill material-symbols-outlined me-1"> call </span>
            0312-345-678
          </a>
        </li>
        <li>
          <a class="lh-lg" href="mailto:Shuttle2013@gmail.com">
            <span class="icon-fill material-symbols-outlined me-1"> mail </span>
            Shuttle2013@gmail.com
          </a>
        </li>
      </ul>
      <ul class="order-md-2 nav">
        <li class="nav-item mx-2 mx-md-1 mx-lg-2">
          <a
            class="nav-link rounded-circle bg-white"
            href="#"
            style="
              width: 40px;
              height: 40px;
              background: no-repeat center url('/icon/Facebook.svg');
            "
          >
          </a>
        </li>
        <li class="nav-item mx-2 mx-md-1 mx-lg-2">
          <a
            class="nav-link rounded-circle bg-white"
            href="#"
            style="
              width: 40px;
              height: 40px;
              background: no-repeat center url('/icon/Messager.svg');
            "
          >
          </a>
        </li>
        <li class="nav-item mx-2 mx-md-1 mx-lg-2">
          <a
            class="nav-link rounded-circle bg-white"
            href="#"
            style="
              width: 40px;
              height: 40px;
              background: no-repeat center url('/icon/Instagram.svg');
            "
          >
          </a>
        </li>
        <li class="nav-item mx-2 ms-md-1 me-md-0 mx-lg-2">
          <a
            class="nav-link rounded-circle bg-white"
            href="#"
            style="
              width: 40px;
              height: 40px;
              background: no-repeat center url('/icon/Pinterest.svg');
            "
          >
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="border-dashed-t border-gray-200 py-3 text-center">
    <small class="text-primary"
      >Copyright © 2023 Shuttle All Rights Reserved.</small
    ><br />
    <small class="text-gray-200">本網站僅作為面試作品使用，非商業用途。</small>
  </div>
</template>
