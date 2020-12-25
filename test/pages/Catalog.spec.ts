import { mount } from '@vue/test-utils';
import Catalog from '~/pages/search/Catalog.vue';

describe('Catalog', () => {
  test('display 47 items on 1 page', () => {
    var items: Object[] = [];
    for (let i = 1; i <= 47; i++) {
      items.push({
        id: i,
        goodsName: `テスト商品${i}`,
        goodsBrand: 'テストメーカー',
        saleUnit: '90g×2',
        goodsImgUri: 'test.jpg',
        excludingTaxPrice: 1000,
        includingTaxPrice: 1080,
      });
    }

    const wrapper = mount(Catalog, {
      propsData: {
        items: items,
        totalCount: items.length,
      },
    });
  });
});
