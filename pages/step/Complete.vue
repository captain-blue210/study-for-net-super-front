<template>
  <div class="row-start-2 col-start-6 col-end-12 h-screen">
    <AtomText :text="'注文完了しました'" :cssClass="'text-5xl'" />
    <nuxt-link to="/">
      <AtomText :text="'TOPへ'" :cssClass="'text-3xl ml-32 mt-20'" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AtomText from '~/components/atoms/text/AtomText.vue';

export default Vue.extend({
  name: 'Complete',
  layout: 'cart',
  components: {
    AtomText,
  },
});
</script>
