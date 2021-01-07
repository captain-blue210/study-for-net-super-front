import { mount } from '@vue/test-utils';
import AtomText from '~/components/atoms/text/AtomText.vue';

describe('AtomText', () => {
  test('renders props.goodsName', () => {
    const goodsName = 'テスト商品';
    const wrapper = mount(AtomText, {
      propsData: {
        text: goodsName,
        cssClass: 'text-base',
      },
    });
    expect(wrapper.text()).toBe('テスト商品');
  });
});
