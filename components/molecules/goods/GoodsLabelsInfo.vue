<template>
  <div>
    <AtomText :text="goodsName" :classObject="goodsNameClass" />
    <AtomText :text="saleUnit" :classObject="saleUnitClass" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AtomText from '~/components/atoms/text/AtomText.vue';

export default Vue.extend({
  name: 'GoodsLabelsInfo',
  components: {
    AtomText,
  },
  data: function () {
    return {
      goodsNameClass: {
        'text-base': true,
      },
      saleUnitClass: {
        'text-sm': true,
      },
    };
  },
  props: {
    goodsName: {
      type: String,
      required: true,
    },
    saleUnit: {
      type: String,
      required: true,
    },
  },
});
</script>
