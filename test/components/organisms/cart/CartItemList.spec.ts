import { mount, RouterLinkStub } from '@vue/test-utils';
import AtomText from '~/components/atoms/text/AtomText.vue';
import CartItemList from '~/components/organisms/cart/CartItemList.vue';
import { formatPriceWithUnit } from '~/plugins/filter';

describe('CartItemList', () => {
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

  it('display cart item', () => {
    const wrapper = mount(CartItemList, {
      propsData: prop,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const tableCells = wrapper.findAll('table tr');
    expect(tableCells.length).toBe(2);
  });

  it('display cart item image', () => {
    const wrapper = mount(CartItemList, {
      propsData: prop,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const image = wrapper.find('table tr:nth-child(1) td:nth-child(1) img');
    expect(image.exists()).toBe(true);
  });

  it('display cart item brand', () => {
    const wrapper = mount(CartItemList, {
      propsData: prop,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const goodsBrand = wrapper.findComponent(AtomText);
    expect(goodsBrand.text()).toBe(prop.cart.cartDetail[0].goodsBrand);
  });

  it('display cart item goods name', () => {
    const wrapper = mount(CartItemList, {
      propsData: prop,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const atomTexts = wrapper.findAllComponents(AtomText);
    expect(atomTexts.at(1).text()).toBe(prop.cart.cartDetail[0].goodsName);
  });

  it('display cart item goods sale unit', () => {
    const wrapper = mount(CartItemList, {
      propsData: prop,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const atomTexts = wrapper.findAllComponents(AtomText);
    expect(atomTexts.at(2).text()).toBe(prop.cart.cartDetail[0].saleUnit);
  });

  it('display cart item excluding tax price', () => {
    const wrapper = mount(CartItemList, {
      propsData: prop,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const excludingTaxPrice = wrapper.find(
      'table tr:nth-child(1) td:nth-child(2) p',
    );
    expect(excludingTaxPrice.text()).toBe(
      `${prop.cart.cartDetail[0].excludingTaxPrice}円`,
    );
  });

  it('display cart item including tax price', () => {
    const wrapper = mount(CartItemList, {
      propsData: prop,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const includingTaxPrice = wrapper.find(
      'table tr:nth-child(1) td:nth-child(3) p',
    );
    expect(includingTaxPrice.text()).toBe(
      `${prop.cart.cartDetail[0].includingTaxPrice}円`,
    );
  });

  it('display cart item quantity', () => {
    const wrapper = mount(CartItemList, {
      propsData: prop,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const goodsQuantity = wrapper.find(
      'table tr:nth-child(1) td:nth-child(4) span:nth-child(2)',
    );
    expect(goodsQuantity.text()).toBe(
      prop.cart.cartDetail[0].goodsQuantity.toString(),
    );
  });

  it('display cart goods total including tax price', () => {
    const wrapper = mount(CartItemList, {
      propsData: prop,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const goodsTotalIncludingTaxPrice = wrapper.find(
      'table tr:nth-child(1) td:nth-child(5) p',
    );
    expect(goodsTotalIncludingTaxPrice.text()).toBe(
      formatPriceWithUnit(prop.cart.cartDetail[0].goodsTotalIncludingTaxPrice),
    );
  });

  it('display cart goods delete button', () => {
    const wrapper = mount(CartItemList, {
      propsData: prop,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const goodsDeleteButton = wrapper.find(
      'table tr:nth-child(1) td:nth-child(6) button',
    );
    expect(goodsDeleteButton.exists()).toBe(true);
    expect(goodsDeleteButton.text()).toBe('削除');
  });
});
