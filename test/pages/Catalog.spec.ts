import { mount } from '@vue/test-utils';
import CatalogItem from '~/components/organisms/goods/catalogItem.vue';
import Catalog from '~/pages/search/Catalog.vue';

type Item = {
  id: number;
  goodsName: string;
  goodsBrand: string;
  saleUnit: string;
  goodsImgUri: string;
  excludingTaxPrice: number;
  includingTaxPrice: number;
};

describe('Catalog', () => {
  describe('display 47 items', () => {
    test('47 items on a page', () => {
      const items: Item[] = initialItemsData(47);
      const wrapper = mount(Catalog, {
        propsData: {
          items: items,
          totalCount: items.length,
        },
      });
      const catalogItems = wrapper.findAllComponents(CatalogItem);
      expect(catalogItems.length).toBe(47);
    });
  });

  describe('display 48 items', () => {
    test('48 items on a page', () => {
      const items: Item[] = initialItemsData(48);
      const wrapper = mount(Catalog, {
        propsData: {
          items: items,
          totalCount: items.length,
        },
      });
      const catalogItems = wrapper.findAllComponents(CatalogItem);
      expect(catalogItems.length).toBe(48);
    });
  });

  describe('display 49 items', () => {
    test('48 items on a page', () => {
      const items: Item[] = initialItemsData(48);
      const wrapper = mount(Catalog, {
        propsData: {
          items: items,
          totalCount: items.length,
        },
      });
      const catalogItems = wrapper.findAllComponents(CatalogItem);
      expect(catalogItems.length).toBe(48);
    });
  });
});

const initialItemsData = (maxSize: number): Item[] => {
  var items: Item[] = [];
  for (let i = 1; i <= maxSize; i++) {
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
  return items;
};
