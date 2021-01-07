<template>
  <p :class="cssClass">{{ text }}</p>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AtomText',
  props: {
    text: {
      type: [String, Number],
      required: true,
    },
    cssClass: {
      type: String,
      required: true,
    },
  },
});
</script>
