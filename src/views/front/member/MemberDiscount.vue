<template>
  <div class="px-5 pb-5 bg-white">
    <div
      class="py-7 border-dashed-b border-gray-100"
      v-for="activity in activies"
      :key="activity.title"
    >
      <h2 class="fs-7 fs-lg-6 bg-light p-3 mb-4 mb-md-7">
        <router-link :to="`${activity.page_path ? activity.page_path : '/'}`">
          {{ activity.title }}
        </router-link>
      </h2>
      <div class="row gx-2 gx-md-3 mx-2">
        <div class="col-12 col-sm-5 col-lg-">
          <img
            :src="`${activity['image-sm']}`"
            alt="優惠封面照"
            class="rounded-2"
            style="max-height: 180px"
          />
        </div>
        <div class="col-sm-7 col-lg">
          <div class="row gx-0 gy-2 gy-sm-0 flex-sm-column h-100">
            <div class="col-12 my-auto text-center">
              <h3 class="fs-7 fs-lg-6 d-none d-sm-block mb-1 mb-lg-2">
                {{ activity.badge ? activity.badge : '全館優惠' }}
              </h3>
              <p class="fs-sm-8 fs-lg-7">
                {{ activity.description }}
              </p>
            </div>
            <div class="col-12 text-end">
              <router-link
                class="btn btn-sm btn-primary-light fs-8 fs-xl-7 shadow-none px-lg-3 py-lg-2"
                :to="`${activity.page_path ? activity.page_path : '/'}`"
              >
                了解更多
                <span class="icon-e icon-east"></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import getDataStore from '@/stores/getDataStore';

export default {
  data() {
    return {
      activies: null,
    };
  },
  computed: {
    ...mapState(getDataStore, ['jsonData']),
  },
  methods: {
    ...mapActions(getDataStore, ['getJsonData']),
  },
  watch: {
    jsonData(newValue) {
      this.activies = Object.values(newValue).map((activity) => {
        if (Object.values(activity).length === 1) {
          return Object.values(activity)[0];
        }
        return activity;
      });
    },
  },
  mounted() {
    this.getJsonData('activities');
  },
};
</script>
