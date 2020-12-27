<template>
  <Catalog :items="items" :totalCount="totalCount" @change-page="getCurrenCatalog" />
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
      totalCount: 0,
    };
  },
  watchQuery: ['page'],
  methods: {
    getCurrenCatalog(currentPage: number): void {
      this.$router.push(`${ROUTES.GET.SEARCH}?page=${currentPage}`);
    },
  },
  async asyncData({ $axios, query }) {
    let data: Object[] = [];
    let totalCount: number = 0;

    await $axios.get(`${ROUTES.GET.SEARCH}?page=${query.page}`).then((res) => {
      data = res.data;
      totalCount = res.headers['x-total-count'];
    });
    return { items: data, totalCount: Number(totalCount) };
  },
});
</script>
