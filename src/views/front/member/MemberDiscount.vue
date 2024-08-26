<template>
  <div class="px-5 pb-5 bg-white">
    <div
      class="py-7 border-dashed-b border-gray-100"
      v-for="activity in activies"
      :key="activity.title"
    >
      <h2 class="fs-6 bg-light p-3 mb-7">
        <router-link :to="`${activity.page_path ? activity.page_path : '/'}`">
          {{ activity.title }}
        </router-link>
      </h2>
      <div class="row align-items-center mx-2">
        <div class="col-3">
          <img :src="`${activity['image-sm']}`" alt="優惠封面照" class="img-fluid" />
        </div>
        <div class="col">
          <h3 class="fs-6 mb-2">
            {{ activity.badge ? activity.badge : '全館優惠' }}
          </h3>
          <p>{{ activity.description }}</p>
        </div>
        <div class="col-3 text-end">
          <router-link
            class="px-4 py-2 btn btn-primary-light fs-8 shadow-none"
            :to="`${activity.page_path ? activity.page_path : '/'}`"
          >
            了解更多
            <span class="icon-e icon-east"></span>
          </router-link>
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
