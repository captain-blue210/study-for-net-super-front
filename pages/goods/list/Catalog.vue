<template>
  <section class="grid grid-rows-6 grid-cols-5 row-span-1 col-span-10 gap-1">
    <div v-for="item in items" :key="item.id" class="h-1/3 row-span-1 col-span-1 bg-yellow-200">
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
        {
          goodsName: 'テスト商品4',
          goodsBrand: 'テストメーカー',
          saleUnit: '90g×2',
          goodsImgUri: 'test2.jpg',
          excludingTaxPrice: 1000,
          includingTaxPrice: 1080,
        },
        {
          goodsName: 'テスト商品5',
          goodsBrand: 'テストメーカー',
          saleUnit: '90g×2',
          goodsImgUri: 'test2.jpg',
          excludingTaxPrice: 1000,
          includingTaxPrice: 1080,
        },
        {
          goodsName: 'テスト商品6',
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
