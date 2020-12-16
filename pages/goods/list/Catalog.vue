<template>
  <section>
    <div v-for="item in items" :key="item.id">
      <CatalogItem :item="item"></CatalogItem>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import CatalogItem from '~/components/organisms/goods/CatalogItem.vue';

export default Vue.extend({
  components: {
    CatalogItem,
  },
  data: function () {
    return {
      items: [
        {
          goodsName: 'テスト商品1',
          goodsBrand: 'テストメーカー',
          saleUnit: '90g×2',
          goodsImgUri: 'test.jpg',
          excludingTaxPrice: 1000,
          includingTaxPrice: 1080,
        },
        {
          goodsName: 'テスト商品2',
          goodsBrand: 'テストメーカー',
          saleUnit: '90g×2',
          goodsImgUri: 'test2.jpg',
          excludingTaxPrice: 1000,
          includingTaxPrice: 1080,
        },
        {
          goodsName: 'テスト商品3',
          goodsBrand: 'テストメーカー',
          saleUnit: '90g×2',
          goodsImgUri: 'test2.jpg',
          excludingTaxPrice: 1000,
          includingTaxPrice: 1080,
        },
      ],
    };
  },
});
</script>
