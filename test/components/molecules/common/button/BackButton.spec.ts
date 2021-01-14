import { mount, RouterLinkStub } from '@vue/test-utils';
import BackButton from '~/components/molecules/common/button/BackButton.vue';

describe('BackButton', () => {
  it('should render href to cart page', () => {
    const wrapper = mount(BackButton, {
      propsData: {
        to: '/step/cart',
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    expect(wrapper.findComponent(RouterLinkStub).props('to')).toBe(
      '/step/cart',
    );
  });

  it('shoud have button which name is 前に戻る', () => {
    const wrapper = mount(BackButton, {
      propsData: {
        to: '/step/cart',
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const button = wrapper.find('button');
    expect(button.text()).toBe('前に戻る');
  });
});
