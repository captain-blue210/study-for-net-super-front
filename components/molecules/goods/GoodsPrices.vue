<template>
  <div>
    <p>{{excludingTaxPrice}}</p>
    <p>{{includingTaxPrice}}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
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
