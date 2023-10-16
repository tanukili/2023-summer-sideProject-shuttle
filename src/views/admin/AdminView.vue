<template>
  <div class="about">
    <h1>後台頁面</h1>
    <nav>
      <RouterLink to="/admin/orders">訂單列表</RouterLink>
      <RouterLink to="/admin">產品列表</RouterLink>
      <RouterLink to="/admin/discounts">優惠列表</RouterLink>
      <RouterLink to="/admin/news">文章列表</RouterLink>
    </nav>
  </div>
  <RouterView></RouterView>
</template>
