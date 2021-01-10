import { mount } from '@vue/test-utils';
import CartAddButton from '~/components/molecules/cart/CartAddButton.vue';

describe('CartAddButton', () => {
  it('should show success message when it succeeded to add cart', async () => {
    const wrapper = mount(CartAddButton, {
      propsData: {
        goodsId: 1,
      },
      mocks: {
        $axios: {
          $post: jest.fn(() =>
            Promise.resolve({ message: 'Adding a item to cart is success' }),
          ),
        },
      },
    });

    window.alert = jest.fn();

    await wrapper.find('button').trigger('click');
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(
      'Adding a item to cart is success',
    );
  });
});
