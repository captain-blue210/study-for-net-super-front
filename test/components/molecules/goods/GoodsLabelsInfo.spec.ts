import { mount } from '@vue/test-utils';
import AtomText from '~/components/atoms/text/AtomText.vue';
import GoodsLabelsInfo from '~/components/molecules/goods/GoodsLabelsInfo.vue';

describe('GoodsLabelsInfo', () => {
  test('renders goodsName and saleUnit', () => {
    const goodsName = 'テスト商品';
    const saleUnit = '90g×2';
    const wrapper = mount(GoodsLabelsInfo,{
      propsData: {
        goodsName: goodsName,
        saleUnit: saleUnit
      }
    })

    const atomTexts = wrapper.findAllComponents(AtomText)
    const goodsNameText = atomTexts.at(0);
    const saleUnitText = atomTexts.at(1);
    expect(goodsNameText.text()).toBe('テスト商品');
    expect(saleUnitText.text()).toBe('90g×2');
  })
})
