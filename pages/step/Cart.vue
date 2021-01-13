<template>
  <div
    class="grid grid-rows-12 grid-cols-12 row-start-2 row-end-3 col-start-1 col-end-13"
  >
    <AtomText
      :text="'買い物かご'"
      :cssClass="'row-start-1 row-end-2 col-start-2 col-end-12 text-3xl py-5'"
    />
    <CartItemList :cart="cart" />
    <CartPaymentBreakdown
      :cart="cart"
      class="'row-start-4 row-end-5 col-start-9 col-end-12 w-full'"
    />
    <GoToOrderButton />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Cart } from '~/types/cart/cart';
import CartPaymentBreakdown from '~/components/organisms/cart/CartPaymentBreakdown.vue';
import CartItemList from '~/components/organisms/cart/CartItemList.vue';
import { ROUTES } from '~/routes/api';
import AtomText from '~/components/atoms/text/AtomText.vue';
import GoToOrderButton from '~/components/molecules/common/button/GoToOrderButton.vue';

// TODO use composition API,
export default Vue.extend({
  name: 'Cart',
  layout: 'cart',
  components: {
    AtomText,
    CartPaymentBreakdown,
    CartItemList,
    GoToOrderButton,
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
  async asyncData({ $axios, store }) {
    await store.dispatch('fetchCart');
  },
});
</script>
