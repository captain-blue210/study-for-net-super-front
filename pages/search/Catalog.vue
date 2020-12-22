<template>
  <section class="row-start-2 row-end-3 col-start-3 col-end-13 bg-yellow-200">
    <div class="grid grid-rows-6 grid-cols-4">
      <CatalogItem :item="item" v-for="item in items" :key="item.id" />
    </div>
    <no-ssr>
      <Paginate
        class="row-span-1 col-span-10 bg-green-200"
        :page-count="48"
        :page-range="9"
        :prevText="'前のページ'"
        :nextText="'次のページ'"
      />
    </no-ssr>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import CatalogItem from '~/components/organisms/goods/CatalogItem.vue';
import ROUTES from '~/routes/api';

export default Vue.extend({
  name: 'Catalog',
  components: {
    CatalogItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
});
</script>
