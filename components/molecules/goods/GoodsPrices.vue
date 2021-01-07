<template>
  <div>
    <AtomText :text="excludingTaxPrice" :classObject="excludingTaxPriceClass" />
    <span class="text-sm text-red-500 inline">円</span>
    <AtomText
      :text="decoratedIncTaxPrice"
      :classObject="includingTaxPriceClass"
    />
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
      excludingTaxPriceClass: {
        'text-red-500': true,
        'text-2xl': true,
        'inline-block': true,
      },
      includingTaxPriceClass: {
        'text-base': true,
      },
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
