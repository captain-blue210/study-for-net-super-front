<template>
  <footer class="row-start-3 row-end-4 col-start-1 col-end-13 bg-red-200">
    <AtomText text="Footer" :cssClass="'text-lg'" />
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
});
</script>


