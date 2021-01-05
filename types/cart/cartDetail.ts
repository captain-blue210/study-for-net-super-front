export type CartDetail = {
  cartId: number;
  goodsId: number;
  goodsName: string;
  goodsBrand: string;
  saleUnit: string;
  goodsImgUri: string;
  excludingTaxPrice: number;
  includingTaxPrice: number;
  goodsQuantity: number;
  goodsTotalIncludingTaxPrice: number;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export const blankCartDetail: CartDetail = {
  cartId: 0,
  goodsId: 0,
  goodsName: '',
  goodsBrand: '',
  saleUnit: '',
  goodsImgUri: '',
  excludingTaxPrice: 0,
  includingTaxPrice: 0,
  goodsQuantity: 0,
  goodsTotalIncludingTaxPrice: 0,
  createdAt: null,
  updatedAt: null,
};
