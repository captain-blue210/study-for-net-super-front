import { blankDescription, Description } from './description';

export type Item = {
  goodsId: number;
  goodsName: string;
  goodsBrand: string;
  saleUnit: string;
  goodsImgUri: string;
  excludingTaxPrice: number;
  includingTaxPrice: number;
  descriptions: Description[];
};

export const blankItem = {
  goodsId: 0,
  goodsName: '',
  goodsBrand: '',
  saleUnit: '',
  goodsImgUri: '',
  excludingTaxPrice: 0,
  includingTaxPrice: 0,
  descriptions: [blankDescription],
};
