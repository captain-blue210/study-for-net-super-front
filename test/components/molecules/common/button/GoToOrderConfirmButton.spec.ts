import { mount, RouterLinkStub } from '@vue/test-utils';
import GoToOrderConfirmButton from '~/components/molecules/common/button/GoToOrderConfirmButton.vue';

describe('GoToOrderConfirmButton', () => {
  it('should render href to payment page', () => {
    const wrapper = mount(GoToOrderConfirmButton);

    expect(wrapper.find('button').emitted()).toBeTruthy();
  });

  it('should have button which name is 注文確認', () => {
    const wrapper = mount(GoToOrderConfirmButton, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    const button = wrapper.find('button');
    expect(button.text()).toBe('注文確認');
  });
});
