import { mount } from '@vue/test-utils';
import AtomText from '~/components/atoms/text/AtomText.vue';
import GoodsPrices from '~/components/molecules/goods/GoodsPrices.vue';

describe('GoodsPrices', () => {
  test('render prop.excludingTaxPrice', () => {
    const expected = '2000';

    const wrapper = mount(GoodsPrices, {
      propsData: {
        excludingTaxPrice: 2000,
        includingTaxPrice: 500,
      },
    });

    const atomTexts = wrapper.findAllComponents(AtomText);
    expect(atomTexts.at(0).text()).toBe(expected);
  });

  test('render prop.includingTaxPrice', () => {
    const expected = '(税込 2160円)';

    const wrapper = mount(GoodsPrices, {
      propsData: {
        excludingTaxPrice: 2000,
        includingTaxPrice: 2160,
      },
    });

    const atomTexts = wrapper.findAllComponents(AtomText);
    expect(atomTexts.at(1).text()).toBe(expected);
  });
});
