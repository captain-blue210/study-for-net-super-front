<template>
  <div
    class="grid grid-rows-12 grid-cols-12 row-start-2 row-end-3 col-start-1 col-end-13"
  >
    <AtomText
      :text="'注文確認'"
      :cssClass="'row-start-1 row-end-2 col-start-1 col-end-13 text-3xl ml-2'"
    />
    <OrderInfo
      :user="user"
      :cart="cart"
      class="row-start-2 col-start-2 col-end-9"
    />
    <GoToOrderCompleteButton
      class="row-start-2 row-end-3 col-start-9 col-end-12 text-center mt-12 ml-5 h-20 w-full"
      @handle-emit-order-complete="handleOrderComplete"
    />
    <CartPaymentBreakdown
      :cart="cart"
      class="row-start-2 row-end-3 col-start-9 col-end-12 mt-40 ml-5 w-full"
    />
    <AtomText
      :text="'カートの中の商品'"
      :cssClass="'row-start-3 col-start-2 col-end-13 text-left text-2xl'"
    />
    <OrderItemList
      :cart="cart"
      class="row-start-4 row-end-5 col-start-2 col-end-12"
    />
    <div class="grid grid-rows-2 row-start-5 col-start-5">
      <GoToOrderCompleteButton
        class="row-start-1 row-end-2 text-center h-20 w-full"
        @handle-emit-order-complete="handleOrderComplete"
      />
      <BackButton
        :to="'/step/payment'"
        class="row-start-2 row-end-3 text-center"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CartPaymentBreakdown from '~/components/organisms/cart/CartPaymentBreakdown.vue';
import AtomText from '~/components/atoms/text/AtomText.vue';
import GoToOrderCompleteButton from '~/components/molecules/common/button/GoToOrderCompleteButton.vue';
import OrderItemList from '~/components/organisms/order/OrderItemList.vue';
import OrderInfo from '~/components/organisms/order/OrderInfo.vue';

export default Vue.extend({
  name: 'Confirm',
  layout: 'cart',
  components: {
    AtomText,
    CartPaymentBreakdown,
    GoToOrderCompleteButton,
    OrderItemList,
    OrderInfo,
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    async handleOrderComplete() {
      await this.$store.dispatch('confirmOrder', this.$store.getters.getCart);
    },
  },
  async asyncData({ store }) {
    await store.dispatch('fetchUser');
    await store.dispatch('fetchCart');
  },
});
</script>

<style scoped>
</style>
