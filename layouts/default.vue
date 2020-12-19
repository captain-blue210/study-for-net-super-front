<template>
  <div class="grid grid-rows-3 grid-cols-12 gap-1">
    <Header />
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/organisms/common/Header.vue';
import Nav from '~/components/organisms/common/Nav.vue';
import Footer from '~/components/organisms/common/Footer.vue';
export default Vue.extend({
  components: {
    Header,
    Nav,
    Footer,
  },
});
</script>
