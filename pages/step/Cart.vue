<template>
  <div
    class="grid grid-rows-12 grid-cols-12 row-start-2 row-end-3 col-start-1 col-end-13 h-screen"
  >
    <AtomText
      :text="'買い物かご'"
      :cssClass="'row-start-1 row-end-2 col-start-2 col-end-12 text-3xl py-5'"
    />
    <CartItemList :cart="cart" />
    <CartPaymentBreakdown :cart="cart" />
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
import GoToOrderButton from '~/components/molecules/cart/GoToOrderButton.vue';

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
  async asyncData({ $axios }) {
    const mockCartID: number = 1;
    const cart: Cart[] = await $axios.$get(`${ROUTES.GET.CART}/${mockCartID}`);
    return { cart: cart[0] };
  },
});
</script>
