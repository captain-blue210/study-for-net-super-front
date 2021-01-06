<template>
  <div :class="layoutClass">
    <AtomText :text="'買い物かご'" :classObject="cartTitleClass" />
    <CartItemList :cart="cart" />
    <CartPaymentBreakdown :cart="cart" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Cart } from '~/types/cart/cart';
import CartPaymentBreakdown from '~/components/organisms/cart/CartPaymentBreakdown.vue';
import CartItemList from '~/components/organisms/cart/CartItemList.vue';
import { ROUTES } from '~/routes/api';
import AtomText from '~/components/atoms/text/AtomText.vue';

// TODO use composition API,
export default Vue.extend({
  name: 'Cart',
  layout: 'cart',
  components: {
    AtomText,
    CartPaymentBreakdown,
    CartItemList,
  },
  data() {
    return {
      cartTitleClass: {
        'row-start-1': true,
        'row-end-2': true,
        'col-start-2': true,
        'col-end-12': true,
        'text-3xl': true,
        'py-5': true,
      },
      layoutClass: {
        grid: true,
        'grid-rows-12': true,
        'grid-cols-12': true,
        'row-start-2': true,
        'row-end-3': true,
        'col-start-1': true,
        'col-end-13': true,
        'h-full': true,
      },
    };
  },
  async asyncData({ $axios }) {
    const mockCartID: number = 1;
    const cart: Cart[] = await $axios.$get(`${ROUTES.GET.CART}/${mockCartID}`);
    return { cart: cart[0] };
  },
});
</script>
