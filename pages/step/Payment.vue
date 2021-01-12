<template>
  <div
    class="grid grid-rows-12 grid-cols-12 row-start-2 row-end-3 col-start-1 col-end-13 h-screen"
  >
    <AtomText
      :text="'お支払い'"
      :cssClass="'row-start1 row-end-2 col-start-2 col-end-13 text-3xl'"
    />
    <PaymentSelector
      class="grid grid-rows-12 row-start-1 row-end-2 col-start-2 col-end-13 mt-5"
    />
    <GoToOrderConfirmButton
      class="row-start-5 row-end-6 col-start-1 col-end-13 text-center -mb-4"
    />
    <BackButton
      class="row-start-6 row-end-7 col-start-1 col-end-13 text-center -mt-24"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BackButton from '~/components/molecules/common/button/BackButton.vue';
import GoToOrderConfirmButton from '~/components/molecules/common/button/GoToOrderConfirmButton.vue';
import PaymentSelector from '~/components/organisms/payment/PaymentSelector.vue';

export default Vue.extend({
  name: 'Payment',
  layout: 'cart',
  components: {
    BackButton,
    GoToOrderConfirmButton,
    PaymentSelector,
  },
});
</script>

<style scoped>
</style>
