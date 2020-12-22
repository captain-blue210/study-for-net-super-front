<template>
  <Catalog :items="items" />
</template>

<script lang="ts">
import Vue from 'vue';
import Catalog from '~/pages/search/Catalog.vue';
import ROUTES from '~/routes/api';

export default Vue.extend({
  components: {
    Catalog,
  },
  data() {
    return {
      items: [],
    };
  },
  async asyncData({ $axios }) {
    const items = await $axios.$get(ROUTES.GET.SEARCH);
    return { items };
  },
});
</script>
