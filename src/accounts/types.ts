import { Brand } from 'src/shared/brand';
import { Account, AccountHold, AccountLedgerEntry, Transfer } from '../model/';
import { GetAccountResponse as internalGet } from '../model/GetAccountResponse';

export type ListAccountsRequest = Record<string, never>;
export type ListAccountsResponse = Account[];

export type GetAccountRequest = {
  accountId: string;
};

export type GetAccountResponse = Brand<internalGet, 'GetAccountResponse'>;

export type GetAccountHoldsRequest = {
  accountId: string;
  before?: string;
  after?: string;
  limit?: number;
};

export type GetAccountHoldsResponse = AccountHold[];

export type GetAccountLedgerRequest = {
  accountId: string;
  startDate?: string;
  endDate?: string;
  before?: string;
  after?: string;
  limit?: number;
  profileId?: string;
};

export type GetAccountLedgerResponse = AccountLedgerEntry[];

export type GetAccountTransfersRequest = {
  accountId: string;
  before?: string;
  after?: string;
  limit?: number;
  type?: string;
};

export type GetAccountTransfersResponse = Transfer[];
