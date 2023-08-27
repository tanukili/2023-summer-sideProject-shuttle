<script>
import { def } from '@vue/shared';
import TheWelcome from '../components/TheWelcome.vue';

export default {
  comments: {
    TheWelcome,
    def
  },
};
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
