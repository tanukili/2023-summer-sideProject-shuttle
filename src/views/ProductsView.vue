<script>
import ProductsNavs from '../components/ProductsNavs.vue';

export default {
  components: {
    ProductsNavs,
  },
};
</script>

<template>
  <div class="bg-banner product-banner"></div>
  <ProductsNavs></ProductsNavs>
  <div class="about">
    <h1>產品列表</h1>
    <RouterLink to="/product">前往單頁</RouterLink>
  </div>
</template>

<style>
.product-banner {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),
    url(../assets/images/banner/banner-products.jpg);
  height: 180px;
  @media (min-width: 768px) {
    height: 240px
  };
  @media (min-width: 992px) {
    height: 300px
  }
}
</style>
