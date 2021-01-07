export const formatPrice = (priceNum: number): string => {
  return priceNum.toLocaleString();
};

export const formatPriceWithUnit = (priceNum: number): string => {
  return `${priceNum.toLocaleString()}円`;
};
