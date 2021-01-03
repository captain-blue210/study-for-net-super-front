import { mount } from '@vue/test-utils';
import AtomImage from '~/components/atoms/image/AtomImage.vue';
import GoodsImage from '~/components/molecules/goods/GoodsImage.vue';

describe('GoodsImage', () => {
  test('renders Goods Detail', () => {
    const imgUri: string = 'test2.jpg';

    const wrapper = mount(GoodsImage, {
      propsData: {
        imgUri: imgUri,
      },
    });

    const atomImage = wrapper.findComponent(AtomImage);
    expect(atomImage.attributes().src).toMatch(/test2.jpg/);
  });
});
