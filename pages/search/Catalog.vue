<template>
  <section class="grid grid-rows-6 grid-cols-5 row-span-1 col-span-10 gap-1">
    <div v-for="item in items" :key="item.id" class="h-1/3 row-span-1 col-span-1 bg-yellow-200">
      <CatalogItem :item="item" />
    </div>
    <no-ssr>
      <Paginate :pageCount="20" :prevText="'Prev'" :nextText="'Next'" />
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
