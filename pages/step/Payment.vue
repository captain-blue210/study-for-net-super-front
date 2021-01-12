<template>
  <div>
    <GoToOrderConfirmButton />
    <BackButton />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BackButton from '~/components/molecules/common/button/BackButton.vue';
import GoToOrderConfirmButton from '~/components/molecules/common/button/GoToOrderConfirmButton.vue';

export default Vue.extend({
  name: 'Payment',
  components: {
    BackButton,
    GoToOrderConfirmButton,
  },
});
</script>

<style scoped>
</style>
