<template>
  <div class="grid grid-rows-6 grid-cols-12 row-start-2 row-end-3 col-start-1 col-end-13 h-screen">
    <AtomText :text="'買い物かご'" :classObject="cartTitleClass" />
    <table :class="tableClass">
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
            <AtomText :text="`${item.excludingTaxPrice}円`" :classObject="excludingTaxPriceClass" />
          </td>
          <td>
            <AtomText :text="`${item.includingTaxPrice}円`" :classObject="includingTaxPriceClass" />
          </td>
          <td>
            <AtomText :text="item.goodsQuantity" :classObject="goodsQuantityClass" />
          </td>
          <td>
            <AtomText
              :text="`${item.goodsTotalIncludingTaxPrice}円`"
              :classObject="goodsTotalIncludingTaxPriceClass"
            />
          </td>
          <td class="text-center">
            <button class="border border-gray-500 rounded px-4 py-2">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Cart, blankCart } from '~/types/cart/cart';
import { Item, blankItem } from '~/types/goods/item';
import { ROUTES } from '~/routes/api';
import { CartDetail } from '~/types/cart/cartDetail';
import AtomImage from '~/components/atoms/image/AtomImage.vue';
import AtomText from '~/components/atoms/text/AtomText.vue';

// TODO use composition API,
export default Vue.extend({
  name: 'Cart',
  layout: 'cart',
  components: {
    AtomImage,
    AtomText,
  },
  data() {
    return {
      itemDetailPath: `${ROUTES.GET.ITEM}`,
      cartTitleClass: {
        'row-start-1': true,
        'row-end-2': true,
        'col-start-2': true,
        'col-end-13': true,
        'text-3xl': true,
        'py-5': true,
      },
      tableClass: {
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
  async asyncData({ $axios }) {
    const mockCartID: number = 1;
    const cart: Cart[] = await $axios.$get(`${ROUTES.GET.CART}/${mockCartID}`);
    return { cart: cart[0] };
  },
});
</script>
