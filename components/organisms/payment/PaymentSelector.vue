<template>
  <div>
    <AtomText :text="'お支払い方法'" :cssClass="'text-2xl'" />

    <div class="row-start-3 row-end-4 col-start-2 col-end-12 text-base">
      <AtomText
        :text="'クレジットカード決済'"
        :cssClass="'border-l-4 border-red-500 text-xl mt-3 pl-3 h-8'"
      />
      <AtomText
        :text="'ご登録のクレジットカード'"
        :cssClass="'text-xl mt-3 pl-3 h-8'"
      />
      <div class="ml-8 mt-3">
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio text-indigo-600"
            name="radio-colors"
            value="creditCard"
            @change="pickedPayment"
          />
          <span class="ml-2">新しいカードを使う</span>
        </label>
      </div>
    </div>
    <div class="row-start-4 row-end-5 col-start-2 col-end-12 text-base mt-8">
      <AtomText
        :text="'その他の決済方法'"
        :cssClass="'row-start-1 row-end-2 col-start-1 col-end-13 border-l-4 border-red-500 text-xl pl-3 h-8'"
      />
      <div class="ml-8">
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio text-indigo-600"
            name="radio-colors"
            value="cashOnDelivery"
            @change="pickedPayment"
          />
          <span class="ml-2">代金引換</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AtomText from '~/components/atoms/text/AtomText.vue';

export default Vue.extend({
  name: 'PaymentSelector',
  components: {
    AtomText,
  },
  methods: {
    pickedPayment(event: Event) {
      if (event.target instanceof HTMLInputElement) {
        this.$emit('picked-payment', event.target.value);
      }
    },
  },
});
</script>

<style scoped>
</style>
