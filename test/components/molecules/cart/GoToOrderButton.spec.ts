import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';
import VueRouter from 'vue-router';
import GoToOrderButton from '~/components/molecules/cart/GoToOrderButton.vue';

describe('GoToOrderButton', () => {
  const mocks = {
    $router: {
      push: () => {},
    },
  };

  it('should render href to payment page', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    const router = new VueRouter();

    const wrapper = mount(GoToOrderButton, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      localVue,
      router,
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
