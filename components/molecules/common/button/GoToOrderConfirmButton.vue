<template>
  <nuxt-link
    to="/step/confirm"
    class="row-start-5 row-end-6 col-start-1 col-end-13 text-center"
  >
    <button class="btn-form btn-next">注文確認</button>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GoToOrderButton',
});
</script>

<style scoped>
.btn-form {
  position: relative;
  display: inline-block;
  margin: 0;
  min-width: 365px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.btn-form::after {
  display: inline-block;
  content: '';
  position: absolute;
  -webkit-transform: translateY(-50%) rotate(-45deg);
  transform: translateY(-50%) rotate(-45deg);
  top: 50%;
}

.btn-form.btn-next {
  font-size: 24px;
  background: #bf0000;
  border-radius: 4px;
  color: #fff;
  padding: 20px 40px 20px 35px;
}
.btn-form.btn-next::after {
  width: 16px;
  height: 16px;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  right: 20px;
}
.btn-form::after {
  display: inline-block;
  content: '';
  position: absolute;
  -webkit-transform: translateY(-50%) rotate(-45deg);
  transform: translateY(-50%) rotate(-45deg);
  top: 50%;
}
</style>
