<template>
  <section class="h-full row-start-2 row-end-3 col-start-3 col-end-13">
    <div class="grid grid-cols-4">
      <CatalogItem :item="item" v-for="item in items" :key="item.id" />
    </div>
    <no-ssr>
      <Paginate
        :container-class="'flex justify-center bg-gray-100 border-b-2 border-t-2 h-30 object-bottom'"
        :page-class="'border-b-2 border-t-2 divide-x-2 self-center bg-white'"
        :page-link-class="`py-1.5 px-3`"
        :prev-class="'border-2 m-6 bg-white'"
        :next-class="'border-2 m-6 bg-white'"
        :prev-link-class="'m-3 p-3'"
        :next-link-class="'m-3 p-3'"
        :page-count="getMaxPage"
        :page-range="9"
        :prevText="'＜ 前のページ'"
        :nextText="'次のページ ＞'"
        :click-handler="clickCallBack"
        :active-class="'bg-gray-300'"
        :hide-prev-next="true"
      />
    </no-ssr>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import CatalogItem from '~/components/organisms/goods/CatalogItem.vue';
import ROUTES from '~/routes/api';

interface DataType {
  perPage: number;
  currentPage: number;
}

interface PorpType {
  items: Array<Object>;
}

export default Vue.extend({
  name: 'Catalog',
  components: {
    CatalogItem,
  },
  data: function () {
    return {
      perPage: 48,
      currentPage: 1,
    };
  },
  methods: {
    clickCallBack: function (pageNum: number) {
      this.currentPage = pageNum;
      this.$emit('change-page', pageNum);
    },
  },
  computed: {
    getMaxPage(): number {
      return Math.ceil(this.totalCount / this.perPage);
    },
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    totalCount: {
      type: Number,
      required: true,
    },
  },
});
</script>
