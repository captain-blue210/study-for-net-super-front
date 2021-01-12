<template>
  <div>
    <nuxt-link :to="itemDetailPath">
      <GoodsImage :imgUri="item.goodsImgUri" />
      <GoodsLabelsInfo :goodsName="item.goodsName" :saleUnit="item.saleUnit" />
      <GoodsPrices
        :excludingTaxPrice="item.excludingTaxPrice"
        :includingTaxPrice="item.includingTaxPrice"
      />
    </nuxt-link>
    <CartAddButton :goodsId="item.goodsId" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GoodsImage from '~/components/molecules/goods/GoodsImage.vue';
import GoodsLabelsInfo from '~/components/molecules/goods/GoodsLabelsInfo.vue';
import GoodsPrices from '~/components/molecules/goods/GoodsPrices.vue';
import ROUTES from '~/routes/api';
import CartAddButton from '~/components/molecules/common/button/CartAddButton.vue';

export default Vue.extend({
  name: 'CatalogItem',
  components: {
    GoodsImage,
    GoodsLabelsInfo,
    GoodsPrices,
    CartAddButton,
  },
  data() {
    return {
      itemDetailPath: `${ROUTES.GET.ITEM}/${this.item.goodsId}`,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
});
</script>
