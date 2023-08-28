import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // 產品
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
    },
    // 購物車
    {
      path: '/carts',
      name: 'carts',
      component: () => import('../views/CartsView.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue'),
    },
    {
      path: '/order-established',
      name: 'order-established',
      component: () => import('../views/OrderEstablishedView.vue'),
    },
    {
      path: '/carts-empty',
      name: 'carts-empty',
      component: () => import('../views/CartsEmptyView.vue'),
    },
    // 會員
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberView.vue'),
      children: [
        {
          path: 'edit',
          component: () => import('../views/MemberEdit.vue'),
        },
        {
          path: 'orders',
          component: () => import('../views/MemberOrders.vue'),
        },
        {
          path: 'order',
          component: () => import('../views/MemberOrder.vue'),
        },
        {
          path: 'feedback',
          component: () => import('../views/MemberFeedback.vue'),
        },
        {
          path: 'discounts',
          component: () => import('../views/MemberDiscounts.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/MemberDiscount.vue'),
            },
            {
              path: 'coupons',
              component: () => import('../views/MemberCoupons.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
    },
    {
      path: '/howto',
      name: 'howto',
      component: () => import('../views/HowtoView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue'),
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/NewView.vue'),
    },
    // 後台
    {
      path: '/admin-login',
      name: '/admin-login',
      component: () => import('../views/AdminLogin.vue'),
    },
    {
      path: '/admin',
      name: '/admin',
      component: () => import('../views/AdminView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/AdminProducts.vue'),
        },
        {
          path: 'orders',
          component: () => import('../views/AdminOrders.vue'),
        },
        {
          path: 'discounts',
          component: () => import('../views/AdminDiscounts.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/AdminPromotions.vue'),
            },
            {
              path: 'coupons',
              component: () => import('../views/AdminCoupon.vue'),
            },
          ],
        },
        {
          path: 'news',
          component: () => import('../views/AdminNews.vue'),
        },
      ],
    },
  ],
});

export default router;
