import { mount } from '@vue/test-utils';
import PaymentSelector from '~/components/organisms/payment/PaymentSelector.vue';

describe('PaymentSelector', () => {
  it('should emit change event', () => {
    const wrapper = mount(PaymentSelector, {
      propsData: {
        paymentMethod: 'creditCard',
      },
    });

    wrapper.vm.$emit('picked-payment');
    expect(wrapper.emitted()).toBeTruthy();
  });

  it('should have value, "creditCard"', () => {
    const wrapper = mount(PaymentSelector, {
      propsData: {
        paymentMethod: 'creditCard',
      },
    });

    const inputs = wrapper.findAll('input');
    expect(inputs.at(0).attributes('value')).toBe('creditCard');
  });

  it('should have value, "cashOnDelivery"', () => {
    const wrapper = mount(PaymentSelector, {
      propsData: {
        paymentMethod: 'creditCard',
      },
    });

    const inputs = wrapper.findAll('input');
    expect(inputs.at(1).attributes('value')).toBe('cashOnDelivery');
  });
});
