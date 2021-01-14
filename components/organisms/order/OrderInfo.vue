<template>
  <table class="border-collapse border text-lg w-full">
    <tr class="border-2 border-gray-300">
      <td class="text-left bg-gray-200 pl-2 h-20 w-32">お届け日時</td>
      <td class="pl-2">{{ cart.deliveryDate }}</td>
    </tr>
    <tr class="border-2 border-gray-300">
      <td class="text-left bg-gray-200 pl-2 h-20 w-32">お届け先住所</td>
      <td class="pl-2">
        <p>{{ user.firstName }} {{ user.lastName }}</p>
        <p>{{ user.postCode }}</p>
        <p>{{ user.address }}</p>
        <p>電話番号：{{ user.telNo }}</p>
      </td>
    </tr>
    <tr class="border-2 border-gray-300">
      <td class="text-left bg-gray-200 pl-2 h-12 w-32">お支払い方法</td>
      <td class="pl-2" v-if="cart.paymentMethod === 'creditCard'">
        クレジットカード
      </td>
      <td class="pl-2" v-if="cart.paymentMethod === 'cashOnDelivery'">
        代金引換
      </td>
    </tr>
    <tr class="border-2 border-gray-300">
      <td class="text-left bg-gray-200 pl-2 h-12 w-32">代替品チェック</td>
      <td></td>
    </tr>
    <tr class="border-2 border-gray-300">
      <td class="text-left bg-gray-200 pl-2 h-12 w-32">販売者</td>
      <td class="pl-2">合同会社ABC</td>
    </tr>
  </table>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OrderInfo',
  props: {
    user: {
      type: Object,
      required: true,
    },
    cart: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
</style>
