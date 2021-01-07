import { formatPrice, formatPriceWithUnit } from '~/plugins/filter';

describe('format price', () => {
  it('returns 1,000 when receive 1000', () => {
    expect(formatPrice(1000)).toBe('1,000');
  });

  it('returns 100 when receive 100', () => {
    expect(formatPrice(100)).toBe('100');
  });

  it('returns 0 when receive 0', () => {
    expect(formatPrice(0)).toBe('0');
  });
});

describe('format price with unit', () => {
  it('returns 1,000円 when receive 1000', () => {
    expect(formatPriceWithUnit(1000)).toBe('1,000円');
  });

  it('returns 100円 when receive 100', () => {
    expect(formatPriceWithUnit(100)).toBe('100円');
  });

  it('returns 0円 when receive 0', () => {
    expect(formatPriceWithUnit(0)).toBe('0円');
  });
});
