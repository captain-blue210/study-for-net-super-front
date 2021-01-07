<template>
  <table class="table-auto row-start-2 row-end-3 col-start-3 col-end-12">
    <thead>
      <th class="text-center">
        <span>商品</span>
      </th>
      <th class="text-center">
        <span>価格(税抜)</span>
      </th>
      <th class="text-center">
        <span>価格(税込)</span>
      </th>
      <th class="text-center">
        <span>数量</span>
      </th>
      <th class="text-center">
        <span>小計(税込)</span>
      </th>
      <th class="text-center">
        <span>削除</span>
      </th>
    </thead>
    <tbody>
      <tr v-for="item in cart.cartDetail" :key="item.goodsId">
        <td class="grid grid-rows-1 grid-cols-2">
          <nuxt-link
            :to="`/${itemDetailPath}/${item.goodsId}`"
            class="h-24 w-24 row-start-1 col-start-1 col-end-2"
          >
            <AtomImage :cssClass="''" :imgUri="item.goodsImgUri" />
          </nuxt-link>
          <div class="flex flex-col">
            <AtomText
              :text="item.goodsBrand"
              :cssClass="'row-start-1 row-end-2 col-start-1 col-end-4 text-xs mt-2'"
            />
            <nuxt-link
              :to="`/${itemDetailPath}/${item.goodsId}`"
              class="row-start-2 row-end-3 col-start-1 col-end-4"
            >
              <AtomText
                :text="item.goodsName"
                :cssClass="'text-base font-medium'"
              />
            </nuxt-link>
            <AtomText
              :text="item.saleUnit"
              :cssClass="'row-start-3 row-start-4 col-start-1 col-end-4 text-xs'"
            />
          </div>
        </td>
        <td>
          <p class="text-center">
            {{ item.excludingTaxPrice | formatPriceWithUnit }}
          </p>
        </td>
        <td>
          <p class="text-center">
            {{ item.includingTaxPrice | formatPriceWithUnit }}
          </p>
        </td>
        <td class="w-32">
          <div class="table">
            <span
              class="w-10 bg-gray-400 text-2xl text-center table-cell rounded-l"
              >-</span
            >
            <span
              class="w-12 table-cell text-center align-middle border-t-2 border-b-2"
              >{{ item.goodsQuantity }}</span
            >
            <span
              class="w-10 bg-gray-400 text-2xl text-center table-cell rounded-r"
              >+</span
            >
          </div>
        </td>
        <td>
          <p class="text-center text-base">
            {{ item.goodsTotalIncludingTaxPrice | formatPriceWithUnit }}
          </p>
        </td>
        <td class="text-center">
          <button class="border border-gray-500 rounded px-4 py-2">削除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue';
import { ROUTES } from '~/routes/api';
import AtomImage from '~/components/atoms/image/AtomImage.vue';
import AtomText from '~/components/atoms/text/AtomText.vue';
import { formatPrice, formatPriceWithUnit } from '~/plugins/filter';

export default Vue.extend({
  name: 'CartItemList',
  components: {
    AtomText,
    AtomImage,
  },
  data() {
    return {
      itemDetailPath: `${ROUTES.GET.ITEM}`,
    };
  },
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
  filters: {
    formatPrice,
    formatPriceWithUnit,
  },
});
</script>
