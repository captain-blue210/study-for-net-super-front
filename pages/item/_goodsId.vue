<template>
  <div class="grid grid-rows-12 grid-cols-2 col-start-4 col-end-12 mt-10">
    <GoodsImage :imgUri="item.goodsImgUri" />
    <div class="grid grid-rows-5 grid-cols-7">
      <AtomText :text="item.goodsBrand" :classObject="goodsBrandClass" />
      <AtomText :text="item.goodsName" :classObject="goodsNameClass" />
      <AtomText :text="item.saleUnit" :classObject="saleUnitClass" />
      <AtomText :text="`${item.excludingTaxPrice}円`" :classObject="excludingTaxPriceClass" />
      <AtomText :text="`(税込 ${item.includingTaxPrice}円)`" :classObject="includingTaxPriceClass" />
    </div>
    <div class="col-start-1 col-end-3">
      <AtomText :text="'商品説明'" :classObject="goodsDescriptionLabel" />
      <AtomText
        :text="item.descriptions[0].descriptionContent"
        :classObject="goodsMainDescription"
        :key="item.descriptions[0].goodsId"
      />
      <table class="border-collapse border row-start-6 row-end-7 mt-5 w-full">
        <tr
          v-for="(description, index) in item.descriptions"
          :key="description.goodsId"
          class="border-2 border-gray-300"
        >
          <td v-if="index != 0" class="p-2 w-1/4 bg-gray-200">{{description.descriptionTitle}}</td>
          <td v-if="index != 0" class="p-2 w-4/5">{{description.descriptionContent}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AtomText from '~/components/atoms/text/AtomText.vue';
import AtomHeader from '~/components/atoms/header/AtomHeader.vue';
import Table from '~/components/organisms/table/Table.vue';
import ROUTES from '~/routes/api';
import { Item } from '~/types/goods/item';
import { Description } from '~/types/goods/description';

export default Vue.extend({
  components: {
    AtomText,
  },
  data() {
    return {
      item: {},
      descriptions: {},
      goodsImgClass: {
        'col-start-1': true,
        'col-end-2': true,
      },
      goodsBrandClass: {
        'row-start-1': true,
        'row-end-2': true,
        'col-start-1': true,
        'col-end-4': true,
        'text-xs': true,
        'pt-5': true,
      },
      goodsNameClass: {
        'row-start-2': true,
        'row-end-3': true,
        'col-start-1': true,
        'col-end-4': true,
        'text-3xl': true,
      },
      saleUnitClass: {
        'row-start-2': true,
        'row-end-3': true,
        'col-start-1': true,
        'col-end-7': true,
        'text-xs': true,
        'self-end': true,
        'pb-2': true,
        'border-b-2': true,
        'align-top': true,
      },
      excludingTaxPriceClass: {
        'row-start-4': true,
        'row-end-5': true,
        'col-start-2': true,
        'col-end-4': true,
        'text-red-500': true,
        'text-4xl': true,
      },
      includingTaxPriceClass: {
        'row-start-4': true,
        'row-end-5': true,
        'col-start-2': true,
        'col-end-4': true,
        'pt-12': true,
        'text-right': true,
      },
      goodsPriceClass: {
        'row-start-2': true,
        'row-start-3': true,
        'col-start-2': true,
        'col-end-3': true,
      },
      goodsDescriptionLabel: {
        'row-start-3': true,
        'row-start-4': true,
        'col-start-1': true,
        'col-end-13': true,
        'text-left': true,
        'text-3xl': true,
      },
      goodsMainDescription: {
        'row-start-4': true,
        'row-start-5': true,
        'col-start-2': true,
        'col-end-13': true,
        'text-left': true,
        'mt-3': true,
      },
      tableClassObject: {
        'border-collapse': true,
        border: true,
        'row-start-6': true,
        'row-end-7': true,
        'mt-5': true,
        'w-full': true,
      },
      tableRowClassObject: {
        'border-collapse': true,
        border: true,
        'row-start-6': true,
        'row-end-7': true,
        'mt-5': true,
        'w-full': true,
      },
      tableCellClassObject: {
        'border-2': true,
        'border-gray-300': true,
      },
    };
  },
  async asyncData({ $axios, route }) {
    const goodsId: string = route.params.goodsId;
    let item = {} as Item;

    await $axios.get(`${ROUTES.GET.ITEM}/${goodsId}`).then((res) => {
      item = res.data[0];
    });

    return { item: item };
  },
});
</script>
