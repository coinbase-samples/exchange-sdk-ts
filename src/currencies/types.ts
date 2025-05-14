import { Brand } from '../shared/brand';
import { Currency } from '../model';

export type ListCurrenciesRequest = Record<string, never>;
export type ListCurrenciesResponse = Brand<
  Currency[],
  'ListCurrenciesResponse'
>;

export type GetCurrencyRequest = {
  currencyId: string;
};
export type GetCurrencyResponse = Brand<Currency, 'GetCurrencyResponse'>;
