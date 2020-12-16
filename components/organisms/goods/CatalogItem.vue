<template>
  <div>
    <GoodsImage :imgUri="item.goodsImgUri" />
    <GoodsLabelsInfo :goodsName="item.goodsName" :saleUnit="item.saleUnit" />
    <GoodsPrices
      :excludingTaxPrice="item.excludingTaxPrice"
      :includingTaxPrice="item.includingTaxPrice"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GoodsImage from '~/components/molecules/goods/GoodsImage.vue';
import GoodsLabelsInfo from '~/components/molecules/goods/GoodsLabelsInfo.vue';
import GoodsPrices from '~/components/molecules/goods/GoodsPrices.vue';

export default Vue.extend({
  components: {
    GoodsImage,
    GoodsLabelsInfo,
    GoodsPrices,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
});
</script>
