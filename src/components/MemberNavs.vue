<script>
export default {
  props: ['options'],
  data() {
    return {};
  },
  methods: {
    selectSort(sort) {
      console.log(sort);
    },
  },
};
</script>
<template>
  <ul class="orderNav nav row g-0" role="tablist">
    <li
      v-for="option in options"
      :key="option.sort"
      class="nav-item col"
      role="presentation"
    >
      <a
        class="nav-link text-center pt-6 border border-white fw-medium rounded-top"
        :class="options[0] === option ? 'active' : false"
        type="button"
        role="tab"
        data-bs-toggle="tab"
        :aria-selected="options[0] === option ? true : false"
        @click="selectSort(option.sort)"
      >
        {{ option.name }}
      </a>
    </li>
  </ul>
</template>

<style>
.orderNav {
  .nav-link {
    background-color: var(--bs-gray-400);
    color: var(--bs-white);
  }
  .nav-link:hover,
  .active {
    background-color: var(--bs-primary);
  }
}
</style>
