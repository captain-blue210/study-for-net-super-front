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
      :paymentMethod="cart.paymentMethod"
      @picked-payment="handlePickedPayment"
    />
    <GoToOrderConfirmButton
      class="row-start-1 row-end-2 col-start-9 col-end-12 text-center mt-12 h-20 w-full"
      @handle-emit-order-confirm="handleOrderConfirm"
    />
    <CartPaymentBreakdown
      :cart="cart"
      class="row-start-1 row-end-2 col-start-9 col-end-12 w-full mt-48"
    />
    <div class="grid grid-rows-2 row-start-3 col-start-5">
      <GoToOrderConfirmButton
        class="row-start-1 row-end-2 text-center h-20 w-full"
        @handle-emit-order-confirm="handleOrderConfirm"
      />
      <BackButton
        :to="'/step/cart'"
        class="row-start-2 row-end-3 text-center -mt-6"
      />
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
    async handlePickedPayment(value: string) {
      this.paymentMethod = value;
      await this.$store.dispatch('setPaymentMethod', {
        paymentMethod: this.paymentMethod,
      });
    },
    handleOrderConfirm() {
      this.$router.push('/step/confirm');
    },
  },
  async asyncData({ store }) {
    await store.dispatch('fetchCart');
  },
});
</script>

<style scoped>
</style>
