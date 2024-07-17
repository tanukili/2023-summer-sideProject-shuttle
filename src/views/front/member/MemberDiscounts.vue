<template>
  <div class="pt-3">
    <MemberNavs :options="navsOption" :now-option="nowOption" @get-option="getOption" />
  </div>
  <router-view></router-view>
</template>

<script>
import MemberNavs from '@/components/front/member/MemberNavs.vue';

export default {
  components: {
    MemberNavs,
  },
  data() {
    return {
      navsOption: [
        {
          name: '優惠活動',
          isRouterLink: true,
          path: '/discounts',
        },
        {
          name: '折扣券',
          isRouterLink: true,
          path: '/discounts/coupons',
        },
      ],
      nowOption: '優惠活動',
    };
  },
  methods: {
    getOption(value) {
      this.nowOption = value;
    },
  },
};
</script>
