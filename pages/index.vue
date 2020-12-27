<template>
  <nuxt-link :to="toCatalog">商品一覧へ</nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';
import Catalog from '~/pages/search/Catalog.vue';
import ROUTES from '~/routes/api';

export default Vue.extend({
  data() {
    return {
      toCatalog: `${ROUTES.GET.SEARCH}?page=1`,
    };
  },
  components: {
    Catalog,
  },
});
</script>
