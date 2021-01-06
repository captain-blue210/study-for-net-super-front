import Vue from 'vue';

Vue.filter('formatPrice', (pricNum: number): string => {
  return pricNum.toLocaleString();
});

Vue.filter('formatPriceWithUnit', (pricNum: number): string => {
  return `${pricNum.toLocaleString()}円`;
});
