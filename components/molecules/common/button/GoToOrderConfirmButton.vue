<template>
  <button @click="emitOrderConfirm" class="btn-form btn-next w-full">
    注文確認
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GoToOrderButton',
  methods: {
    emitOrderConfirm() {
      this.$emit('handle-emit-order-confirm');
    },
  },
});
</script>

<style scoped>
.btn-form {
  position: relative;
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
