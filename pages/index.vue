<template>
  <div class="container">
    <Catalog />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Catalog from "~/pages/goods/list/Catalog.vue";

export default Vue.extend({
  components: {
    Catalog,
  },
});
</script>
