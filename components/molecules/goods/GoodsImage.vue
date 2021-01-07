<template>
  <AtomImage :imgUri="imgUri" :cssClass="'h-auto w-full max-w-full pr-5'" />
</template>

<script lang="ts">
import Vue from 'vue';
import AtomImage from '~/components/atoms/image/AtomImage.vue';

export default Vue.extend({
  components: {
    AtomImage,
  },
  props: {
    imgUri: {
      type: String,
      required: true,
    },
  },
});
</script>
