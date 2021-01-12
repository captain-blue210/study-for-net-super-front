import { mount, RouterLinkStub } from '@vue/test-utils';
import GoToOrderButton from '~/components/molecules/common/button/GoToOrderButton.vue';

describe('GoToOrderButton', () => {
  it('should render href to payment page', () => {
    const wrapper = mount(GoToOrderButton, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    expect(wrapper.findComponent(RouterLinkStub).props('to')).toEqual(
      '/step/payment',
    );
  });

  it('should have button which name is 購入手続き', () => {
    const wrapper = mount(GoToOrderButton, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const button = wrapper.find('button');
    expect(button.text()).toBe('購入手続き');
  });
});
