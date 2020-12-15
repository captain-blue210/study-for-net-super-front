<template>
  <label for>{{goodsName}}</label>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    goodsName: {
      type: String,
      required: true,
    },
  },
});
</script>
