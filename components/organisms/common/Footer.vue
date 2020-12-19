<template>
  <footer class="h-1/3 row-span-1 col-span-12 bg-red-200">
    <AtomText text="Footer" :classObject="footerClass" />
  </footer>
</template>
<script lang="ts">
import Vue from 'vue';
import AtomText from '~/components/atoms/text/AtomText.vue';
export default Vue.extend({
  name: 'Footer',
  components: {
    AtomText,
  },
  data: function () {
    return {
      footerClass: {
        'text-lg': true,
      },
    };
  },
});
</script>


