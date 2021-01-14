<template>
  <header
    class="grid grid-rows-1 grid-cols-12 row-start-1 row-end-2 col-start-1 col-end-13 bg-red-200"
  >
    <nuxt-link to="/" class="row-start-1">
      <AtomText text="Header" :cssClass="'text-lg'" />
    </nuxt-link>
    <nuxt-link
      to="/step/cart"
      class="row-start-1 col-start-11 col-end-13 ml-10 mr-5"
    >
      <AtomText
        text="カートに進む"
        :cssClass="'border border-red-600 rounded my-3 p-2 bg-red-500 text-center text-white'"
      />
    </nuxt-link>
  </header>
</template>
<script lang="ts">
import Vue from 'vue';
import AtomText from '~/components/atoms/text/AtomText.vue';
import GoToCartButton from '~/components/molecules/common/button/GoToCartButton.vue';

export default Vue.extend({
  name: 'Header',
  components: {
    AtomText,
    GoToCartButton,
  },
});
</script>


