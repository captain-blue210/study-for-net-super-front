<template>
  <nav class="row-span-1 col-span-2 h-full bg-gray-200">
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
