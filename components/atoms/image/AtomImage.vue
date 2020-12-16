<template>
  <img :class="classObject" :src="require(`@/assets/images/goods/${imgUri}`)" alt />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    imgUri: {
      type: String,
      required: true,
    },
    classObject: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
img {
  height: 10vh;
  width: 10vh;
}
</style>
