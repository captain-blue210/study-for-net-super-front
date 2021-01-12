<template>
  <nuxt-link to="/step/cart">
    <button class="btn-form btn-prev">前に戻る</button>
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

.btn-form.btn-prev {
  font-size: 16px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #999;
  padding: 25px 35px 25px;
  margin-right: 1px;
}

.btn-form::after {
  display: inline-block;
  content: '';
  position: absolute;
  -webkit-transform: translateY(-50%) rotate(-45deg);
  transform: translateY(-50%) rotate(-45deg);
  top: 50%;
}

.btn-form.btn-prev::after {
  width: 12px;
  height: 12px;
  border-top: 2px solid #333;
  border-left: 2px solid #333;
  left: 20px;
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
