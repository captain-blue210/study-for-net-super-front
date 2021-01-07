<template>
  <img
    :class="cssClass"
    :src="require(`@/assets/images/goods/${imgUri}`)"
    alt
  />
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AtomImage',
  props: {
    imgUri: {
      type: String,
      required: true,
    },
    cssClass: {
      type: String,
      required: true,
    },
  },
});
</script>
