<template>
  <nav class="h-full row-start-2 row-end-3 col-start-1 col-end-3 bg-gray-200">
    <AtomText text="Nav" :classObject="navClass" />
  </nav>
</template>
<script lang="ts">
import Vue from 'vue';
import AtomText from '~/components/atoms/text/AtomText.vue';
export default Vue.extend({
  name: 'Nav',
  components: {
    AtomText,
  },
  data: function () {
    return {
      navClass: {
        'text-lg': true,
      },
    };
  },
});
</script>
