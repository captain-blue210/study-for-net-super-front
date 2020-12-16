<template>
  <p :class="classObject">{{text}}</p>
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
    classObject: {
      type: Object,
      required: true,
    },
  },
});
</script>
