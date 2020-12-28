<template>
  <AtomImage :imgUri="imgUri" :classObject="classObject" />
</template>

<script lang="ts">
import Vue from 'vue';
import AtomImage from '~/components/atoms/image/AtomImage.vue';

export default Vue.extend({
  components: {
    AtomImage,
  },
  data: function () {
    return {
      classObject: {
        'h-auto': true,
        'w-auto': true,
      },
    };
  },
  props: {
    imgUri: {
      type: String,
      required: true,
    },
  },
});
</script>
