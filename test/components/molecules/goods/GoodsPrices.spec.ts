import { mount } from '@vue/test-utils';
import GoodsPrices from '~/components/molecules/goods/GoodsPrices.vue';

describe('GoodsPrices', () => {
   test('render prop.excludingTaxPrice', () => {
      const wrapper = mount(GoodsPrices, {
         propsData:{
            excludingTaxPrice: 2000,
            includingTaxPrice: 500,
         }
      })
   })
})
