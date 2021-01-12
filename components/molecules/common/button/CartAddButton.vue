<template>
  <button
    class="border border-red-600 rounded my-3 p-2"
    @click="addToCart(goodsId)"
  >
    <font-awesome-icon :icon="['fas', 'cart-plus']" class="text-red-600" />
    カートに入れる
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import ROUTES from '~/routes/api';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default Vue.extend({
  name: 'CartAddButton',
  components: {
    FontAwesomeIcon,
  },
  methods: {
    async addToCart(goodsId: number) {
      const params = {
        goodsId: goodsId,
        userId: 1, // TODO this should be replaced. get from store.
        cartId: 1, // TODO same as above
      };

      const result = await this.$axios.$post(ROUTES.POST.CART, params);

      alert(result.message);
    },
  },
  props: {
    goodsId: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
</style>
