<template>
  <nav class="row-start-2 row-end-3 col-start-1 col-end-3 bg-gray-200 h-screen">
    <AtomText text="Nav" :cssClass="'text-lg'" />
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
});
</script>
