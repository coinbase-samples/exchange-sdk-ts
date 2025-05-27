import { Brand } from '../shared/brand';
import {
  CoinbaseAccountGeneratedDepositAddress,
  CoinbaseAccount,
} from '../model';

export type GenerateAddressRequest = {
  accountId: string;
  profileId?: string;
  network?: string;
};

export type GenerateAddressResponse = Brand<
  CoinbaseAccountGeneratedDepositAddress,
  'GenerateAddressResponse'
>;

export type ListWalletsRequest = Record<string, never>;
export type ListWalletsResponse = Brand<
  CoinbaseAccount[],
  'ListWalletsResponse'
>;
