<template>
  <ul class="orderNav nav nav-justified" role="navigation">
    <li v-for="option in options" :key="option" class="nav-item mx-1">
      <Router-link
        v-if="option.isRouterLink"
        :to="`/member${option.path}`"
        class="nav-link text-center py-3 border border-white fw-medium rounded-top"
        :class="{ active: nowOption === option.name }"
      >
        {{ option.name }}
      </Router-link>
      <a
        v-else
        class="nav-link text-center py-3 border border-white fw-medium rounded-top"
        :class="{ active: nowOption === option }"
        @click.prevent="$emit('getOption', option)"
      >
        {{ option }}
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['options', 'nowOption'],
  emits: ['getOption'],
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
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
