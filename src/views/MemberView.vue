<template>
  <div class="about">
    <h1>會員頁面</h1>
    <nav>
      <RouterLink to="/member/edit">會員資料</RouterLink>
      <RouterLink to="/member/orders">訂單列表</RouterLink>
      <RouterLink to="/member/discounts">優惠一覽</RouterLink>
    </nav>
    <p>視圖切換</p>
    <router-view>
    </router-view>
  </div>
</template>
