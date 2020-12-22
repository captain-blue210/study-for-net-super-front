<template>
  <section class="row-start-2 row-end-3 col-start-3 col-end-13">
    <div class="grid grid-cols-4">
      <CatalogItem :item="item" v-for="item in items" :key="item.id" />
      <no-ssr>
        <Paginate
          class="col-start-1 col-end-5"
          :container-class="'flex justify-center divide-x-2 divide-gray-500'"
          :page-class="'border-2 border-t-2 border-b-2 py-1.5 px-3'"
          :prev-class="'border-2 m-2'"
          :next-class="'border-2 ml-8'"
          :page-count="48"
          :page-range="9"
          :prevText="'前のページ'"
          :nextText="'次のページ'"
          :hide-prev-next="true"
        />
      </no-ssr>
    </div>
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
  data: function () {
    return {
      containerClass: {
        'justify-between': true,
      },
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
});
</script>
