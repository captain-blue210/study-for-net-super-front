<template>
  <div>
    <BackButton />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BackButton from '~/components/molecules/common/button/BackButton.vue';

export default Vue.extend({
  name: 'Payment',
  components: {
    BackButton,
  },
});
</script>

<style scoped>
</style>
