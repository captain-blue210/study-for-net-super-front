import { mount } from '@vue/test-utils';
import PaymentSelector from '~/components/organisms/payment/PaymentSelector.vue';

describe('PaymentSelector', () => {
  it('should have value, "creditCard"', () => {
    const wrapper = mount(PaymentSelector);

    const inputs = wrapper.findAll('input');
    expect(inputs.at(0).attributes('value')).toBe('creditCard');
  });

  it('should have value, "cashOnDelivery"', () => {
    const wrapper = mount(PaymentSelector);

    const inputs = wrapper.findAll('input');
    expect(inputs.at(1).attributes('value')).toBe('cashOnDelivery');
  });

  // TODO add emit value to parent component test
});
