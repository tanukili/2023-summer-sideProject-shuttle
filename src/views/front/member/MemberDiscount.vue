<script>
import { mapState, mapActions } from 'pinia';
import useActivitiesStore from '../../../stores/useActivitiesStore';

export default {
  methods: {
    ...mapActions(useActivitiesStore, ['getActivities']),
  },
  mounted() {
    this.getActivities();
  },
  computed: {
    ...mapState(useActivitiesStore, [
      'allActive',
      'numActivities',
      'unlimitedActivities',
    ]),
    activitiesArr() {
      const arr = [];
      arr.push(this.allActive);
      const numKeys = Object.keys(this.numActivities);
      numKeys.forEach((e) => {
        arr.push(this.numActivities[e]);
      });
      const unlimitedKeys = Object.keys(this.unlimitedActivities);
      unlimitedKeys.forEach((e) => {
        arr.push(this.unlimitedActivities[e]);
      });
      return arr;
    },
    imgBase() {
      return import.meta.env.VITE_IMG_BASE;
    },
  },
};
</script>

<template>
  <div
    class="pb-5 p-4 border-dashed-b border-gray-100 bg-white"
    v-for="active in activitiesArr"
    :key="active.title"
  >
    <div class="d-flex justify-content-between py-3 bg-light">
      <h2 class="fs-7 mb-0 ms-2">活動名稱：{{ active.title }}</h2>
      <!-- <h4 class="fs-7 mb-0 me-2">活動期間：{{}}</h4> -->
    </div>
    <div class="row align-items-center my-4">
      <div class="col">
        <h3 class="fs-7 text-center mb-0">
          {{ active.badge ? active.badge : '全館優惠' }}
        </h3>
      </div>
      <div class="col">
        <img
          :src="`${imgBase}${active['image-sm']}`"
          alt=""
          class="img-fluid"
          style="max-width: 100px"
        />
      </div>
      <div class="col">
        <p class="fs-7" style="width: 420px">
          {{ active.description }}
        </p>
      </div>
      <div class="col">
        <button
          type="button"
          class="btn btn-outline-primary btn-sm shadow-none mb-2 w-100"
          data-bs-toggle="modal"
          data-bs-target="#productInfo"
        >
          了解詳情
        </button>
      </div>
    </div>
  </div>
</template>
