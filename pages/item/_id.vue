<template>
  <div class="grid grid-rows-2 grid-cols-2 col-start-3 col-end-13">
    <AtomImage :imgUri="item.goodsImgUri" :classObject="goodsImgClass" />
    <AtomText :text="item.goodsName" :classObject="goodsNameClass" />
    <AtomText :text="item.excludingTaxPrice" :classObject="goodsDetailClass" />
    <AtomText :text="item.includingTaxPrice" :classObject="goodsDetailClass" />
    <AtomText :text="item.goodsBrand" :classObject="goodsDetailClass" />
    <AtomText :text="item.saleUnit" :classObject="goodsDetailClass" />
    <AtomText
      :text="description.description"
      :classObject="goodsDetailClass"
      v-for="description in item.descriptions"
      :key="description.description_id"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AtomText from '~/components/atoms/text/AtomText.vue';
import ROUTES from '~/routes/api';

type Item = {
  id: number;
  goodsName: string;
  goodsBrand: string;
  saleUnit: string;
  goodsImgUri: string;
  excludingTaxPrice: number;
  includingTaxPrice: number;
  descriptions: Description[];
};

type Description = {
  description_id: number;
  description: string;
  description_type: string;
};

export default Vue.extend({
  components: {
    AtomText,
  },
  data() {
    return {
      item: {},
      goodsImgClass: {
        'col-start-1': true,
        'col-end-2': true,
      },
      goodsNameClass: {
        'row-start-1': true,
        'row-start-2': true,
        'col-start-2': true,
        'col-end-3': true,
      },
      goodsDetailClass: {
        'text-lg': true,
      },
    };
  },
  async asyncData({ $axios, route }) {
    const goodsId: string = route.params.id;
    let item = {} as Item;

    await $axios.get(`${ROUTES.GET.ITEM}/${goodsId}`).then((res) => {
      item = res.data;
    });
    return { item: item };
  },
});
</script>
