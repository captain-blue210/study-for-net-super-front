<template>
  <div class="grid grid-rows-12 grid-cols-12 gap-1 h-screen">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/organisms/common/Header.vue';
import Footer from '~/components/organisms/common/Footer.vue';
export default Vue.extend({
  components: {
    Header,
    Footer,
  },
});
</script>
