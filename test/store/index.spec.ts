import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { createLocalVue } from '@vue/test-utils';
import axios from 'axios';
import { cloneDeep } from 'lodash';
import Vuex from 'Vuex';
import ROUTES from '~/routes/api';
import * as storeIndex from '~/store/index';

const localVue = createLocalVue();
localVue.use(Vuex);

let url = '';
let body;
let mockError = false;
jest.mock('axios', () => ({
  $get: (_url: string) => {
    return new Promise((resolve) => {
      if (mockError) throw Error('Mock error');

      url = _url;
      resolve(true);
    });
  },
  put: (_url: string, _body: Object) => {
    return new Promise((resolve) => {
      url = _url;
      body = _body;
      resolve(true);
    });
  },
  post: (_url: string, _body: Object) => {
    return new Promise((resolve) => {
      url = _url;
      body = _body;
      resolve(true);
    });
  },
}));

const cart = {
  cartId: 1,
  userId: 1,
  goodsSubtotalIncludingTaxPrice: 2107,
  packingFee: 0,
  shippingFee: 330,
  subtotalIncludingTaxPrice: 2437,
  subtotalNonTaxable: 0,
  subtotalInternalTax: 2437,
  totalIncludingTaxPrice: 2437,
  paymentMethod: 'creditCard',
  deliveryDate: '2021-01-15 12:00:00',
  createdAt: '2021-01-02 14:04:00',
  updatedAt: '2021-01-02 14:04:00',
  cartDetail: [
    {
      cartId: 1,
      goodsId: 1,
      goodsName: 'テスト商品1',
      goodsBrand: 'テストメーカー',
      saleUnit: '90g×2',
      goodsImgUri: 'test2.jpg',
      excludingTaxPrice: 340,
      includingTaxPrice: 367,
      goodsQuantity: 4,
      goodsTotalIncludingTaxPrice: 1468,
    },
    {
      cartId: 1,
      goodsId: 2,
      goodsName: 'テスト商品2',
      goodsBrand: 'テストメーカー',
      saleUnit: '90g×2',
      goodsImgUri: 'test2.jpg',
      excludingTaxPrice: 198,
      includingTaxPrice: 213,
      goodsQuantity: 3,
      goodsTotalIncludingTaxPrice: 639,
    },
  ],
};

const user = {
  userId: 1,
  lastName: '太郎',
  firstName: '鈴木',
  postalCode: '111-1111',
  address: 'テスト県テスト市1−1−1　000号室',
  telNo: '01234567890',
};

describe('index store', () => {
  describe('actions', () => {
    let store: any;

    beforeEach(() => {
      store = new Vuex.Store(cloneDeep(storeIndex as any));
      store.$axios = axios as NuxtAxiosInstance;
      store.commit = jest.fn();
      store.$router = { push: jest.fn() };
    });

    test('fetchUser should call user api and mutateUser', async () => {
      await store.dispatch('fetchUser');
      expect(url).toBe(ROUTES.GET.USER);

      store.commit('mutateUser', user);
      expect(store.commit).toHaveBeenCalledWith('mutateUser', user);
    });

    test('fetchCart should call cart api and mutateCart', async () => {
      await store.dispatch('fetchCart');
      expect(url).toBe(ROUTES.GET.CART);

      store.commit('mutateCart', cart);
      expect(store.commit).toHaveBeenCalledWith('mutateCart', cart);
    });

    test('setPaymentMethod should call user api and setPaymentMethod', async () => {
      await store.dispatch('setPaymentMethod', 'test');

      store.commit('mutatePaymentMethod', 'test');
      expect(store.commit).toHaveBeenCalledWith('mutatePaymentMethod', 'test');
    });

    test('confirmOrder should call user api and confirmOrder', async () => {
      await store.dispatch('confirmOrder', cart);

      store.commit('mutateCart', {});
      expect(store.$router.push).toBeCalledWith('/step/complete');
      expect(store.commit).toHaveBeenCalledWith('mutateCart', {});
    });
  });
});
