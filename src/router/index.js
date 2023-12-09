import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/front/HomeView.vue'),
    },
    // 產品
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/front/ProductsView.vue'),
    },
    {
      // 動態路由
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/front/ProductView.vue'),
    },
    // 購物車
    {
      path: '/carts',
      name: 'carts',
      component: () => import('../views/front/CartsView.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/front/OrderView.vue'),
    },
    {
      path: '/order-established',
      name: 'order-established',
      component: () => import('../views/front/OrderEstablished.vue'),
    },
    {
      path: '/carts-empty',
      name: 'carts-empty',
      component: () => import('../views/front/CartsEmpty.vue'),
    },
    // 會員
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/front/LoginView.vue'),
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/front/member/MemberView.vue'),
      children: [
        {
          path: 'edit',
          component: () => import('../views/front/member/MemberEdit.vue'),
        },
        {
          path: 'orders',
          component: () => import('../views/front/member/MemberOrders.vue'),
        },
        {
          path: 'order',
          component: () => import('../views/front/member/MemberOrder.vue'),
        },
        {
          path: 'feedback',
          component: () => import('../views/front/member/MemberFeedback.vue'),
        },
        {
          path: 'favorites',
          component: () => import('../views/front/member/MemberFavorite.vue'),
        },
        {
          path: 'discounts',
          component: () => import('../views/front/member/MemberDiscounts.vue'),
          children: [
            {
              path: '',
              component: () =>
                import('../views/front/member/MemberDiscount.vue'),
            },
            {
              path: 'coupons',
              component: () =>
                import('../views/front/member/MemberCoupons.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/front/SignupView.vue'),
    },
    {
      path: '/howto',
      name: 'howto',
      component: () => import('../views/front/HowtoView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/front/ContactView.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/front/NewsView.vue'),
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/front/NewView.vue'),
    },
    // 後台
    {
      path: '/admin-login',
      name: '/admin-login',
      component: () => import('../views/admin/AdminLogin.vue'),
    },
    {
      path: '/admin',
      name: '/admin',
      component: () => import('../views/admin/AdminView.vue'),
      children: [
        {
          path: 'home',
          component: () => import('../views/admin/AdminProducts.vue'),
        },
        {
          path: 'orders',
          component: () => import('../views/admin/AdminOrders.vue'),
        },
        {
          path: 'discounts',
          component: () => import('../views/admin/AdminDiscounts.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/admin/AdminPromotions.vue'),
            },
            {
              path: 'coupons',
              component: () => import('../views/admin/AdminCoupon.vue'),
            },
          ],
        },
        {
          path: 'news',
          component: () => import('../views/admin/AdminNews.vue'),
        },
      ],
    },
  ],
  scrollBehavior() {
    return {
      top: 0, // 切換後將固定在最上方
    };
  },
});

export default router;
