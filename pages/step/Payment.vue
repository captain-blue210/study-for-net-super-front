<template>
  <div
    class="grid grid-rows-12 grid-cols-12 row-start-2 row-end-3 col-start-1 col-end-13"
  >
    <AtomText
      :text="'お支払い'"
      :cssClass="'row-start1 row-end-2 col-start-2 col-end-13 text-3xl'"
    />
    <PaymentSelector
      class="row-start-1 row-end-2 col-start-3 col-end-13 mt-24"
      @picked-payment="handlePickedPayment"
    />
    <GoToOrderConfirmButton
      class="row-start-1 row-end-2 col-start-9 col-end-12 text-center mt-24"
    />
    <CartPaymentBreakdown
      :cart="cart"
      class="row-start-1 row-end-2 col-start-9 col-end-12 w-full mt-48"
    />
    <div class="grid grid-rows-2 grido-cols-12 row-start-2 col-start-5 mt-24">
      <GoToOrderConfirmButton class="row-start-1 row-end-2 text-center" />
      <BackButton class="row-start-2 row-end-3 text-center mt-2" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BackButton from '~/components/molecules/common/button/BackButton.vue';
import GoToOrderConfirmButton from '~/components/molecules/common/button/GoToOrderConfirmButton.vue';
import PaymentSelector from '~/components/organisms/payment/PaymentSelector.vue';
import CartPaymentBreakdown from '~/components/organisms/cart/CartPaymentBreakdown.vue';

export default Vue.extend({
  name: 'Payment',
  layout: 'cart',
  components: {
    BackButton,
    GoToOrderConfirmButton,
    PaymentSelector,
    CartPaymentBreakdown,
  },
  data() {
    return {
      paymentMethod: '',
    };
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
  methods: {
    handlePickedPayment(value: string) {
      this.paymentMethod = value;
      this.$store.dispatch('', { paymentMethod: this.paymentMethod });
    },
  },
  async asyncData({ $axios, store }) {
    await store.dispatch('fetchCart');
  },
});
</script>

<style scoped>
</style>
