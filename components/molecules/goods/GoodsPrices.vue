<template>
  <div>
    <AtomText
      :text="excludingTaxPrice"
      :cssClass="'text-red-500 text-2xl inline-block'"
    />
    <span class="text-sm text-red-500 inline">円</span>
    <AtomText :text="decoratedIncTaxPrice" :cssClass="'text-base'" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AtomText from '~/components/atoms/text/AtomText.vue';

export default Vue.extend({
  name: 'GoodsPrices',
  components: {
    AtomText,
  },
  data: function () {
    return {
      decoratedIncTaxPrice: `(税込 ${this.includingTaxPrice}円)`,
    };
  },
  props: {
    excludingTaxPrice: {
      type: Number,
      required: true,
    },
    includingTaxPrice: {
      type: Number,
      required: true,
    },
  },
});
</script>
