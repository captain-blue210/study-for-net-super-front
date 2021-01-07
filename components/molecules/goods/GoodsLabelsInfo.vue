<template>
  <div>
    <AtomText :text="goodsName" :cssClass="'text-base'" />
    <AtomText :text="saleUnit" :cssClass="'text-sm'" />
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
