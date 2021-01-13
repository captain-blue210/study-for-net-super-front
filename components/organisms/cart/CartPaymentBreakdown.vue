<template>
  <div>
    <AtomText :text="'お支払い内訳'" :cssClass="'text-lg'" />
    <div class="table w-full border-2 p-2">
      <div class="table-row-group">
        <div class="table-row">
          <div class="table-cell pt-4 pl-2 border-b-2">商品合計(税込)</div>
          <div class="table-cell text-right pr-2 border-b-2">
            {{ cart.goodsSubtotalIncludingTaxPrice | formatPriceWithUnit }}
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell pl-2">梱包手数料(税込)</div>
          <div class="table-cell text-right pr-2">
            {{ cart.packingFee | formatPriceWithUnit }}
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell pl-2 border-b-2">送料(税込)</div>
          <div class="table-cell text-right pr-2 border-b-2">
            {{ cart.shippingFee | formatPriceWithUnit }}
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell pl-2">小計(税込)</div>
          <div class="table-cell text-right pr-2">
            {{ cart.subtotalIncludingTaxPrice | formatPriceWithUnit }}
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell pl-10 text-sm">非課税商品</div>
          <div class="table-cell text-right pr-2">
            {{ cart.subtotalNonTaxable | formatPriceWithUnit }}
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell pl-10 text-sm">内税対象額</div>
          <div class="table-cell text-right pr-2">
            {{ cart.subtotalInternalTax | formatPriceWithUnit }}
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell pl-2 border-b-2"></div>
          <div class="table-cell text-right pr-2 border-b-2 text-xs"></div>
        </div>
        <div class="table-row mb-3">
          <div class="table-cell pl-2">総合計金額(税込)</div>
          <div class="table-cell text-right pr-2 text-2xl font-bold">
            {{ cart.totalIncludingTaxPrice | formatPrice }}
            <span class="text-base font-medium">円</span>
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell pl-10 text-sm">内税対象額(8%)</div>
          <div class="table-cell text-right pr-2">
            {{ cart.goodsSubtotalIncludingTaxPrice | formatPriceWithUnit }}
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell pl-10 text-sm">内税対象額(10%)</div>
          <div class="table-cell text-right pr-2">
            {{
              (cart.totalIncludingTaxPrice -
                cart.goodsSubtotalIncludingTaxPrice)
                | formatPriceWithUnit
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { formatPrice, formatPriceWithUnit } from '~/plugins/filter';
import AtomText from '~/components/atoms/text/AtomText.vue';

export default Vue.extend({
  name: 'CartPaymentBreakdown',
  components: {
    AtomText,
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
