<script>
import MemberNavs from '@/components/front/member/MemberNavs.vue';

export default {
  components: {
    MemberNavs,
  },
  data() {
    return {
      orderOption: [
        {
          name: '優惠活動',
          sort: 'activities',
          isRouterLink: true,
          path: '/discounts',
          isClicked: true,
        },
        {
          name: '折扣券',
          sort: 'coupon',
          isRouterLink: true,
          path: '/discounts/coupons',
          isClicked: false,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="pt-3">
    <MemberNavs :options="orderOption" />
  </div>
  <router-view></router-view>
</template>
