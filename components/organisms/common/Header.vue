<template>
  <header class="row-start-1 row-end-2 col-start-1 col-end-13 bg-red-200">
    <AtomText text="Header" :classObject="headerClass" />
  </header>
</template>
<script lang="ts">
import Vue from 'vue';
import AtomText from '~/components/atoms/text/AtomText.vue';
export default Vue.extend({
  name: 'Header',
  components: {
    AtomText,
  },
  data: function () {
    return {
      headerClass: {
        'text-lg': true,
      },
    };
  },
});
</script>


