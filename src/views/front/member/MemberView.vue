<template>
  <div class="about bg-gray-100">
    <div class="block-spacing-sm container">
      <nav aria-label="breadcrumb" class="mb-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">會員頁面</li>
        </ol>
      </nav>
      <div class="mx-5">
        <MemberCalendar></MemberCalendar>
      </div>
      <div class="row">
        <div class="col-md-3">
          <ul class="memberNav nav nav-fill flex-md-column">
            <li class="nav-item">
              <RouterLink class="nav-link py-3 border border-white" to="/member/edit">
                會員資料
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link py-3 border border-white" to="/member/orders">
                訂單列表
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link py-3 border border-white" to="/member/discounts">
                優惠一覽
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link py-3 border border-white" to="/member/favorites">
                我的收藏
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-md-9">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import memberStore from '@/stores/front/memberStore';
import useActivitiesStore from '@/stores/useActivitiesStore';

import MemberCalendar from '@/components/front/member/MemberCalendar.vue';

export default {
  components: {
    MemberCalendar,
  },
  methods: {
    ...mapActions(memberStore, ['checkUserId']),
    ...mapActions(useActivitiesStore, ['getActivities']),
  },
  beforeMount() {
    this.checkUserId();
    this.getActivities();
  },
};
</script>

<style>
.memberNav {
  .nav-link {
    background-color: var(--bs-secondary-light);
  }
  .nav-link:hover,
  .router-link-active {
    background-color: var(--bs-primary-light);
  }
}
</style>
