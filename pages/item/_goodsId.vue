<template>
  <div class="grid grid-rows-12 grid-cols-2 col-start-4 col-end-12 mt-10">
    <GoodsImage :imgUri="item.goodsImgUri" />
    <div class="grid grid-rows-5 grid-cols-7">
      <AtomText
        :text="item.goodsBrand"
        :cssClass="'row-start-1 row-end-2 col-start-1 col-end-4 text-xs pt-5'"
      />
      <AtomText
        :text="item.goodsName"
        :cssClass="'row-start-2 row-end-3 col-start-1 col-end-4 text-3xl'"
      />
      <AtomText
        :text="item.saleUnit"
        :cssClass="'row-start-2 row-end-3 col-start-1 col-end-7 text-xs self-end pb-2 border-b-2 align-top'"
      />
      <AtomText
        :text="`${item.excludingTaxPrice}円`"
        :cssClass="'row-start-4 row-end-5 col-start-2 col-end-4 text-red-500 text-4xl'"
      />
      <AtomText
        :text="`(税込 ${item.includingTaxPrice}円)`"
        :cssClass="'row-start-4 row-end-5 col-start-2 col-end-4 pt-12 text-right'"
      />
    </div>
    <div class="col-start-1 col-end-3">
      <AtomText
        :text="'商品説明'"
        :cssClass="'row-start-3 row-start-4 col-start-1 col-end-13 text-left text-3xl'"
      />
      <AtomText
        :text="item.descriptions[0].descriptionContent"
        :cssClass="'row-start-4 row-end-5 col-start-2 col-end-13 text-left mt-3'"
        :key="item.descriptions[0].goodsId"
      />
      <table class="border-collapse border row-start-6 row-end-7 mt-5 w-full">
        <tr
          v-for="(description, index) in item.descriptions"
          :key="description.goodsId"
          class="border-2 border-gray-300"
        >
          <td v-if="index != 0" class="p-2 w-1/4 bg-gray-200">
            {{ description.descriptionTitle }}
          </td>
          <td v-if="index != 0" class="p-2 w-4/5">
            {{ description.descriptionContent }}
          </td>
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
