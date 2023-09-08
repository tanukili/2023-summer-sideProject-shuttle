<script></script>

<template>
  <ul
    class="nav nav-style bg-secondary lh-sm d-flex justify-content-around justify-content-md-start"
  >
    <li class="nav-item py-3 px-md-3 ms-md-3">
      <a class="nav-link p-1" href="#/products"
        ><span class="d-none d-md-flex">全部課程</span
        ><span class="d-md-none">ALL</span></a
      >
    </li>
    <li class="nav-item py-3 px-md-3">
      <a class="nav-link p-1" href="#/products">一日體驗</a>
    </li>
    <li class="nav-item py-3 px-md-3">
      <a class="nav-link p-1" href="#/products">初階課程</a>
    </li>
    <li class="nav-item py-3 px-md-3">
      <a class="nav-link p-1" href="#/products">進階課程</a>
    </li>
    <li class="nav-item py-3 px-md-3">
      <a class="nav-link p-1" href="#/products">輔助課程</a>
    </li>
  </ul>
</template>

<style>
.nav-style {
  .nav-link {
    border-bottom: 2px dashed var(--bs-secondary);
    &.active,
    &:hover {
      border-bottom: 2px dashed var(--bs-primary);
    }
  }
}
</style>
