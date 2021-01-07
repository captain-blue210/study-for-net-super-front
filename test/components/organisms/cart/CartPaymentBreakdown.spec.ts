import { mount } from '@vue/test-utils';
import CartPaymentBreakdown from '~/components/organisms/cart/CartPaymentBreakdown.vue';
import { formatPrice, formatPriceWithUnit } from '~/plugins/filter';

describe('CartPaymentBreakdown', () => {
  const prop = {
    cart: {
      cartId: 1,
      userId: 1,
      goodsSubtotalIncludingTaxPrice: 2107,
      packingFee: 0,
      shippingFee: 330,
      subtotalIncludingTaxPrice: 2437,
      subtotalNonTaxable: 0,
      subtotalInternalTax: 2437,
      totalIncludingTaxPrice: 2437,
      createdAt: '2021-01-02 14:04:00',
      updatedAt: '2021-01-02 14:04:00',
      cartDetail: [
        {
          cartId: 1,
          goodsId: 1,
          goodsName: 'テスト商品1',
          goodsBrand: 'テストメーカー1',
          saleUnit: '90g×2',
          goodsImgUri: 'test2.jpg',
          excludingTaxPrice: 340,
          includingTaxPrice: 367,
          goodsQuantity: 4,
          goodsTotalIncludingTaxPrice: 1468,
        },
        {
          cartId: 1,
          goodsId: 2,
          goodsName: 'テスト商品2',
          goodsBrand: 'テストメーカー2',
          saleUnit: '90g×2',
          goodsImgUri: 'test2.jpg',
          excludingTaxPrice: 198,
          includingTaxPrice: 213,
          goodsQuantity: 3,
          goodsTotalIncludingTaxPrice: 639,
        },
      ],
    },
  };

  it('display payment breakdown goods subtotal including tax price', () => {
    const wrapper = mount(CartPaymentBreakdown, {
      propsData: prop,
    });

    const goodsSubtotalIncludingTaxPrice = wrapper.find(
      'div div.table div.table-row:nth-child(1) div.table-cell:nth-child(2)',
    );
    expect(goodsSubtotalIncludingTaxPrice.text()).toBe(
      formatPriceWithUnit(prop.cart.goodsSubtotalIncludingTaxPrice),
    );
  });

  it('display payment breakdown packing fee', () => {
    const wrapper = mount(CartPaymentBreakdown, {
      propsData: prop,
    });

    const packingFee = wrapper.find(
      'div div.table div.table-row:nth-child(2) div.table-cell:nth-child(2)',
    );
    expect(packingFee.text()).toBe(formatPriceWithUnit(prop.cart.packingFee));
  });

  it('display payment breakdown shipping fee', () => {
    const wrapper = mount(CartPaymentBreakdown, {
      propsData: prop,
    });

    const shippingFee = wrapper.find(
      'div div.table div.table-row:nth-child(3) div.table-cell:nth-child(2)',
    );
    expect(shippingFee.text()).toBe(formatPriceWithUnit(prop.cart.shippingFee));
  });

  it('display payment breakdown subtotal including tax price', () => {
    const wrapper = mount(CartPaymentBreakdown, {
      propsData: prop,
    });

    const subtotalIncludingTaxPrice = wrapper.find(
      'div div.table div.table-row:nth-child(4) div.table-cell:nth-child(2)',
    );
    expect(subtotalIncludingTaxPrice.text()).toBe(
      formatPriceWithUnit(prop.cart.subtotalIncludingTaxPrice),
    );
  });

  it('display payment breakdown subtotal non-taxable', () => {
    const wrapper = mount(CartPaymentBreakdown, {
      propsData: prop,
    });

    const subtotalNonTaxable = wrapper.find(
      'div div.table div.table-row:nth-child(5) div.table-cell:nth-child(2)',
    );
    expect(subtotalNonTaxable.text()).toBe(
      formatPriceWithUnit(prop.cart.subtotalNonTaxable),
    );
  });

  it('display payment breakdown subtotal internal tax', () => {
    const wrapper = mount(CartPaymentBreakdown, {
      propsData: prop,
    });

    const subtotalInternalTax = wrapper.find(
      'div div.table div.table-row:nth-child(6) div.table-cell:nth-child(2)',
    );
    expect(subtotalInternalTax.text()).toBe(
      formatPriceWithUnit(prop.cart.subtotalInternalTax),
    );
  });

  it('display payment breakdown total including tax price', () => {
    const wrapper = mount(CartPaymentBreakdown, {
      propsData: prop,
    });

    const totalIncludingTaxPrice = wrapper.find(
      'div div.table div.table-row:nth-child(8) div.table-cell:nth-child(2)',
    );
    expect(totalIncludingTaxPrice.text()).toMatch(
      formatPrice(prop.cart.totalIncludingTaxPrice),
    );
  });
});
