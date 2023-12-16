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
    toggleActivedClass(options) {
      options.forEach((e) => {
        e.isClicked ? (e.isClicked = false) : (e.isClicked = true);
      });
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
      <Router-link
        v-if="option.isRouterLink"
        :to="`/member${option.path}`"
        class="nav-link text-center pt-6 border border-white fw-medium rounded-top"
        :class="{ active: option.isClicked }"
        @click="toggleActivedClass(options)"
        >{{ option.name }}</Router-link
      >
      <a
        v-else
        class="nav-link text-center pt-6 border border-white fw-medium rounded-top"
        :class="options[0] === option ? 'active' : false"
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
