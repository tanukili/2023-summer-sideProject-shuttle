<script>
export default {
  props: ['pages'],
  methods: {
    updatePage(page) {
      this.$emit('updatePage', page);
    },
  },
};
</script>

<template>
  <nav class="mt-5">
    <ul class="pagination justify-content-center align-items-center">
      <li class="page-item me-2">
        <a class="page-link rounded-circle p-1" href="#/products" aria-label="Previous">
          <span class="material-symbols-outlined lh-1">chevron_left</span>
        </a>
      </li>
      <li
        class="page-item mx-1"
        v-for="page in pages.total_pages"
        :key="page"
        :class="{ active: page === pages.current_page }"
      >
        <a
          class="page-link fs-6 rounded-circle"
          href="#/products"
          @click.prevent="updatePage(page)"
        >
          {{ page }}
        </a>
      </li>
      <li class="page-item ms-2">
        <a class="page-link rounded-circle p-1" href="#/products" aria-label="Next">
          <span class="material-symbols-outlined lh-1">chevron_right</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
