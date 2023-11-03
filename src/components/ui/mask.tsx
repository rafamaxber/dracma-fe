import { maskitoNumberOptionsGenerator } from '@maskito/kit';

export const currencyMaskOption = maskitoNumberOptionsGenerator({
    decimalZeroPadding: true,
    precision: 2,
    decimalSeparator: ',',
    min: 0,
    prefix: 'R$ ',
});

export function currencyToNumber(currency: string) {
  return Number(String(currency).replace('R$ ', '').replace(',', '.'));
}
