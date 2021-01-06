<template>
  <table :class="cartTableClass">
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
            <AtomImage :classObject="goodsImgClass" :imgUri="item.goodsImgUri" />
          </nuxt-link>
          <div class="flex flex-col">
            <AtomText :text="item.goodsBrand" :classObject="goodsBrandClass" />
            <nuxt-link
              :to="`/${itemDetailPath}/${item.goodsId}`"
              class="row-start-2 row-end-3 col-start-1 col-end-4"
            >
              <AtomText :text="item.goodsName" :classObject="goodsNameClass" />
            </nuxt-link>
            <AtomText :text="item.saleUnit" :classObject="saleUnitClass" />
          </div>
        </td>
        <td>
          <p :class="excludingTaxPriceClass">{{item.excludingTaxPrice | formatPriceWithUnit}}</p>
        </td>
        <td>
          <p :class="includingTaxPriceClass">{{item.includingTaxPrice | formatPriceWithUnit}}</p>
        </td>
        <td class="w-32">
          <div class="table">
            <span class="w-10 bg-gray-400 text-2xl text-center table-cell rounded-l">-</span>
            <span
              class="w-12 table-cell text-center align-middle border-t-2 border-b-2"
            >{{item.goodsQuantity}}</span>
            <span class="w-10 bg-gray-400 text-2xl text-center table-cell rounded-r">+</span>
          </div>
        </td>
        <td>
          <p
            :class="goodsTotalIncludingTaxPriceClass"
          >{{item.goodsTotalIncludingTaxPrice | formatPriceWithUnit}}</p>
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

export default Vue.extend({
  name: 'CartItemList',
  components: {},
  data() {
    return {
      itemDetailPath: `${ROUTES.GET.ITEM}`,
      cartTableClass: {
        'table-auto': true,
        'row-start-2': true,
        'row-end-3': true,
        'col-start-3': true,
        'col-end-12': true,
      },
      goodsImgClass: {},
      goodsBrandClass: {
        'row-start-1': true,
        'row-end-2': true,
        'col-start-1': true,
        'col-end-4': true,
        'text-xs': true,
        'mt-2': true,
      },
      goodsNameClass: {
        'text-base': true,
        'font-medium': true,
      },
      saleUnitClass: {
        'row-start-3': true,
        'row-end-4': true,
        'col-start-1': true,
        'col-end-4': true,
        'text-xs': true,
      },
      excludingTaxPriceClass: {
        'text-center': true,
      },
      includingTaxPriceClass: {
        'text-center': true,
      },
      goodsQuantityClass: {
        'text-center': true,
        'text-base': true,
      },
      goodsTotalIncludingTaxPriceClass: {
        'text-center': true,
        'text-base': true,
      },
    };
  },
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
});
</script>
