<template>
  <div>注文完了</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Complete',
  async asyncData({ store }) {
    store.dispatch('completeOrder');
  },
});
</script>
