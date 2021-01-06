import { blankCartDetail, CartDetail } from './cartDetail';

export type Cart = {
  cartId: number;
  userId: number;
  goodsSubtotalIncludingTaxPrice: number;
  packingFee: number;
  shippingFee: number;
  subtotalIncludingTaxPrice: number;
  subtotalNonTaxable: number;
  subtotalInternalTax: number;
  totalIncludingTaxPrice: number;
  cartDetail: CartDetail[];
  createdAt: Date | null;
  updatedAt: Date | null;
};

export const blankCart: Cart = {
  cartId: 0,
  userId: 0,
  goodsSubtotalIncludingTaxPrice: 0,
  packingFee: 0,
  shippingFee: 0,
  subtotalIncludingTaxPrice: 0,
  subtotalNonTaxable: 0,
  subtotalInternalTax: 0,
  totalIncludingTaxPrice: 0,
  cartDetail: [blankCartDetail],
  createdAt: null,
  updatedAt: null,
};
